from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response

from .models import Supplier, Courier, DeliveryType, Client, GeneralSettings, StaticDataType, StaticData
from .serializers import SupplierSerializer, CourierSerializer, DeliveryTypeSerializer, ClientSerializer, GeneralSettingsSerializer, StaticDataTypeSerializer, StaticDataSerializer,  UnpaginateStaticDataSerializer, UnpaginateStaticDataTypeSerializer
from .serializers import UnpaginateSupplierSerializer, UnpaginateCourierSerializer, UnpaginateDeliveryTypeSerializer, UnpaginateClientSerializer, UnpaginateGeneralSettingsSerializer
from .paginations import SupplierPagination, CourierPagination, DeliveryTypePagination, ClientPagination, GeneralSettingsPagination, StaticDataTypePagination, StaticDataPagination


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


class ClientView(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
    # pagination_class = ClientPagination


class ClientUnpaginateView(viewsets.ModelViewSet):
    queryset = Client.objects.all()
    serializer_class = UnpaginateClientSerializer


class GeneralSettingsView(viewsets.ModelViewSet):
    queryset = GeneralSettings.objects.all()
    serializer_class = GeneralSettingsSerializer
    # pagination_class = GeneralSettingsPagination


class GeneralSettingsUnpaginateView(viewsets.ModelViewSet):
    queryset = GeneralSettings.objects.all()
    serializer_class = UnpaginateGeneralSettingsSerializer


class StaticDataTypeView(viewsets.ModelViewSet):
    queryset = StaticDataType.objects.all()
    serializer_class = StaticDataTypeSerializer
    # pagination_class = StaticDataTypePagination


class UnpaginateStaticDataTypeView(viewsets.ModelViewSet):
    queryset = StaticDataType.objects.all()
    serializer_class = UnpaginateStaticDataTypeSerializer


class StaticDataView(viewsets.ModelViewSet):
    queryset = StaticData.objects.all()
    serializer_class = StaticDataSerializer
    # pagination_class = StaticDataPagination


class UnpaginateStaticDataView(viewsets.ModelViewSet):
    queryset = StaticData.objects.all()
    serializer_class = UnpaginateStaticDataSerializer
