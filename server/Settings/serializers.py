from rest_framework import serializers
from .models import Supplier, Courier, DeliveryType


class SupplierSerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(default=True)

    class Meta:
        model = Supplier
        fields = '__all__'


class UnpaginateSupplierSerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(default=True)

    class Meta:
        model = Supplier
        fields = '__all__'


class CourierSerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(default=True)

    class Meta:
        model = Courier
        fields = '__all__'


class UnpaginateCourierSerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(default=True)

    class Meta:
        model = Courier
        fields = '__all__'


class DeliveryTypeSerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(default=True)

    class Meta:
        model = DeliveryType
        fields = '__all__'


class UnpaginateDeliveryTypeSerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(default=True)

    class Meta:
        model = DeliveryType
        fields = '__all__'
