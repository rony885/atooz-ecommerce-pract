from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response

from .models import Supplier, Courier, DeliveryType
from .serializers import SupplierSerializer, CourierSerializer, DeliveryTypeSerializer
from .serializers import UnpaginateSupplierSerializer, UnpaginateCourierSerializer, UnpaginateDeliveryTypeSerializer
from .paginations import SupplierPagination, CourierPagination, DeliveryTypePagination


class SupplierView(viewsets.ModelViewSet):
    queryset = Supplier.objects.all()
    serializer_class = SupplierSerializer
    # pagination_class = SupplierPagination


class SupplierUnpaginateView(viewsets.ModelViewSet):
    queryset = Supplier.objects.all()
    serializer_class = UnpaginateSupplierSerializer


class CourierView(viewsets.ModelViewSet):
    queryset = Courier.objects.all()
    serializer_class = CourierSerializer
    # pagination_class = CourierPagination


class CourierUnpaginateView(viewsets.ModelViewSet):
    queryset = Courier.objects.all()
    serializer_class = UnpaginateCourierSerializer


class DeliveryTypeView(viewsets.ModelViewSet):
    queryset = DeliveryType.objects.all()
    serializer_class = DeliveryTypeSerializer
    # pagination_class = DeliveryTypePagination


class DeliveryTypeUnpaginateView(viewsets.ModelViewSet):
    queryset = DeliveryType.objects.all()
    serializer_class = UnpaginateDeliveryTypeSerializer
