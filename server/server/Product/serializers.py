from rest_framework import serializers
from .models import Category, Brand, Unit, Product


class CategorySerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(default=True)

    class Meta:
        model = Category
        fields = '__all__'


class UnpaginateCategorySerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(default=True)

    class Meta:
        model = Category
        fields = '__all__'


class BrandSerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(default=True)

    class Meta:
        model = Brand
        fields = '__all__'


class UnpaginateBrandSerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(default=True)

    class Meta:
        model = Brand
        fields = '__all__'


class UnitSerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(default=True)

    class Meta:
        model = Unit
        fields = '__all__'


class UnpaginateUnitSerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(default=True)

    class Meta:
        model = Unit
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(default=True)
    category = CategorySerializer()
    brand = BrandSerializer()
    unit_type = UnitSerializer()
    isFeatureProducts = serializers.BooleanField(default=False)
    isTopSellingProducts = serializers.BooleanField(default=False)
    isNewArrivalProducts = serializers.BooleanField(default=False)

    class Meta:
        model = Product
        fields = '__all__'


class UnpaginateProductSerializer(serializers.ModelSerializer):
    status = serializers.BooleanField(default=True)
    isFeatureProducts = serializers.BooleanField(default=False)
    isTopSellingProducts = serializers.BooleanField(default=False)
    isNewArrivalProducts = serializers.BooleanField(default=False)

    class Meta:
        model = Product
        fields = '__all__'
