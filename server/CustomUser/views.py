# views.py
from rest_framework import status
from rest_framework import viewsets
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework.permissions import AllowAny, IsAuthenticated, BasePermission
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework_simplejwt.authentication import JWTTokenUserAuthentication
from django.contrib.auth import logout as django_logout
from .serializers import UserSerializer, UserRegisterSerializer, UserLoginSerializer
from .models import CustomUser

from django.db import transaction
from django.http import JsonResponse
from rest_framework.decorators import api_view


def authenticate_user(email=None, password=None):
    try:
        user = CustomUser.objects.get(email=email)
        if user.check_password(password):
            return user
    except CustomUser.DoesNotExist:
        return None


class AllUsersView(viewsets.ModelViewSet):
    queryset = CustomUser.objects.all()
    serializer_class = UserSerializer


class AllowUnauthenticatedForLogout(BasePermission):
    def has_permission(self, request, view):
        # Allow unauthenticated requests only for the logout endpoint
        if request.method == 'POST' and view.__class__.__name__ == 'UserLogoutAPIView':
            return True
        # For other endpoints, require authentication
        authentication_classes = getattr(view, 'authentication_classes', [])
        for auth_class in authentication_classes:
            if isinstance(auth_class(), JWTTokenUserAuthentication):
                return request.user and request.user.is_authenticated
        return False


class CurrentUserAPIView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        serializer = UserSerializer(request.user)
        return Response(serializer.data)


class UserRegisterAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = UserRegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


class UserLoginAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = authenticate_user(
            email=serializer.validated_data['email'], password=serializer.validated_data['password'])
        if user:
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            })
        else:
            return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


class UserLogoutAPIView(APIView):
    permission_classes = [IsAuthenticated, AllowUnauthenticatedForLogout]

    def post(self, request):
        try:
            refresh_token = request.data["refresh_token"]
            token = RefreshToken(refresh_token)
            token.blacklist()

            # Invalidate Django session
            django_logout(request)

            return Response({"message": "Successfully logged out."}, status=status.HTTP_205_RESET_CONTENT)
        except KeyError:
            return Response({"error": "Refresh token is required."}, status=status.HTTP_400_BAD_REQUEST)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_400_BAD_REQUEST)


# staff and superuser
class StaffAndSuperuserLoginAPIView(APIView):
    permission_classes = [AllowAny]

    def post(self, request):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = authenticate_user(
            email=serializer.validated_data['email'], password=serializer.validated_data['password'])
        if user and (user.is_superuser or user.is_staff):
            refresh = RefreshToken.for_user(user)
            return Response({
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            })
        else:
            return Response({'error': 'Invalid credentials or not authorized'}, status=status.HTTP_401_UNAUTHORIZED)
