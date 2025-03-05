from django.shortcuts import render
from rest_framework import viewsets

from .models import Divisions, Districts, Upazilas, Unions
from .serializers import DivisionsSerializer, DistrictsSerializer, UpazilasSerializer, UnionsSerializer
from .paginations import DivisionsPagination, DistrictsPagination, UpazilasPagination, UnionsPagination


class DivisionsView(viewsets.ModelViewSet):
    queryset = Divisions.objects.all()
    serializer_class = DivisionsSerializer
    # pagination_class = DivisionsPagination


class DistrictsView(viewsets.ModelViewSet):
    queryset = Districts.objects.all()
    serializer_class = DistrictsSerializer
    # pagination_class = DistrictsPagination


class UpazilasView(viewsets.ModelViewSet):
    queryset = Upazilas.objects.all()
    serializer_class = UpazilasSerializer
    # pagination_class = UpazilasPagination


class UnionsView(viewsets.ModelViewSet):
    queryset = Unions.objects.all()
    serializer_class = UnionsSerializer
    # pagination_class = UnionsPagination
