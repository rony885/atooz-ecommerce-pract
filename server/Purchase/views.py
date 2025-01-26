from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .models import Purchase
from .serializers import PurchaseSerializer, UnpaginatePurchaseSerializer


@api_view(['GET', 'POST'])
def purchase_list_create_view(request):
    if request.method == 'GET':
        purchase = Purchase.objects.all()
        serializer = UnpaginatePurchaseSerializer(purchase, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = PurchaseSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
def purchase_detail_view(request, pk):
    try:
        purchase = Purchase.objects.get(pk=pk)
    except Purchase.DoesNotExist:
        return Response({'error': 'Purchase not found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = UnpaginatePurchaseSerializer(purchase)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = PurchaseSerializer(
            purchase, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        purchase.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
