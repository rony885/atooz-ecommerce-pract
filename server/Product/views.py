from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response

from .models import Category, Brand, Unit, Product
from .serializers import CategorySerializer, UnpaginateCategorySerializer, BrandSerializer, UnpaginateBrandSerializer, UnitSerializer, UnpaginateUnitSerializer, ProductSerializer, UnpaginateProductSerializer
from .paginations import CategoryPagination, BrandPagination, UnitPagination, ProductPagination


class CategoryView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    # pagination_class = CategoryPagination


class CategoryUnpaginateView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = UnpaginateCategorySerializer


class BrandView(viewsets.ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = BrandSerializer
    # pagination_class = BrandPagination


class BrandUnpaginateView(viewsets.ModelViewSet):
    queryset = Brand.objects.all()
    serializer_class = UnpaginateBrandSerializer


class UnitView(viewsets.ModelViewSet):
    queryset = Unit.objects.all()
    serializer_class = UnitSerializer
    # pagination_class = UnitPagination


class UnitUnpaginateView(viewsets.ModelViewSet):
    queryset = Unit.objects.all()
    serializer_class = UnpaginateUnitSerializer


class ProductView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    # pagination_class = ProductPagination


class ProductUnpaginateView(viewsets.ModelViewSet):
    queryset = Product.objects.all()
    serializer_class = UnpaginateProductSerializer
