from django.shortcuts import render
from rest_framework import viewsets
from rest_framework.response import Response

from .models import Category, SubCategory, Brand, Unit, Product
from .serializers import CategorySerializer, UnpaginateCategorySerializer, SubCategorySerializer, UnpaginateSubCategorySerializer, BrandSerializer, UnpaginateBrandSerializer, UnitSerializer, UnpaginateUnitSerializer, ProductSerializer, UnpaginateProductSerializer
from .paginations import CategoryPagination, SubCategoryPagination, BrandPagination, UnitPagination, ProductPagination


class CategoryView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    # pagination_class = CategoryPagination


class CategoryUnpaginateView(viewsets.ModelViewSet):
    queryset = Category.objects.all()
    serializer_class = UnpaginateCategorySerializer


class SubCategoryView(viewsets.ModelViewSet):
    queryset = SubCategory.objects.all()
    serializer_class = SubCategorySerializer
    # pagination_class = SubCategoryPagination


class SubCategoryUnpaginateView(viewsets.ModelViewSet):
    queryset = SubCategory.objects.all()
    serializer_class = UnpaginateSubCategorySerializer


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
