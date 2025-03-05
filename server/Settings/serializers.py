from rest_framework import serializers
from .models import Supplier, Courier, DeliveryType, Client, GeneralSettings, StaticDataType, StaticData


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


class ClientSerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(default=True)

    class Meta:
        model = Client
        fields = '__all__'


class UnpaginateClientSerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(default=True)

    class Meta:
        model = Client
        fields = '__all__'


class GeneralSettingsSerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(default=True)

    class Meta:
        model = GeneralSettings
        fields = '__all__'


class UnpaginateGeneralSettingsSerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(default=True)

    class Meta:
        model = GeneralSettings
        fields = '__all__'


class StaticDataTypeSerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(default=True)

    class Meta:
        model = StaticDataType
        fields = '__all__'


class UnpaginateStaticDataTypeSerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(default=True)

    class Meta:
        model = StaticDataType
        fields = '__all__'


class StaticDataSerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(default=True)
    type = StaticDataTypeSerializer()

    class Meta:
        model = StaticData
        fields = '__all__'


class UnpaginateStaticDataSerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(default=True)

    class Meta:
        model = StaticData
        fields = '__all__'
