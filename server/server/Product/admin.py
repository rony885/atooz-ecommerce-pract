from django.db import models
from django.contrib import admin
from django_json_widget.widgets import JSONEditorWidget
from .models import Category, Brand, Unit, Product


@admin.register(Category)
class CategoryAdmin(admin.ModelAdmin):
    list_display = ['id', 'status', 'name',
                    'Image', 'created_at', 'updated_at']

    readonly_fields = ['Image']

    search_fields = ['id', 'name', 'created_at']
    list_per_page = 10
    list_filter = ['created_at']


@admin.register(Brand)
class BrandAdmin(admin.ModelAdmin):
    list_display = ['id', 'status', 'name',  'created_at', 'updated_at']

    readonly_fields = []

    search_fields = ['id', 'name', 'created_at']
    list_per_page = 10
    list_filter = ['created_at']


@admin.register(Unit)
class UnitAdmin(admin.ModelAdmin):
    list_display = ['id', 'status', 'name',  'created_at', 'updated_at']

    readonly_fields = []

    search_fields = ['id', 'name', 'created_at']
    list_per_page = 10
    list_filter = ['created_at']


@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    formfield_overrides = {
        models.JSONField: {'widget': JSONEditorWidget},
    }

    list_display = ['id', 'product_id', 'status',
                    'product_type', 'name', 'product_code', 'category', 'brand', 'unit_type', 'unit_quantity',
                    'isFeatureProducts', 'isTopSellingProducts', 'isNewArrivalProducts',
                    'purchase_stock', 'purchase_price', 'initial_stock', 'regularPrice', 'discount', 'specialPrice',
                    # 'sizes', 'colors',
                    'MainImage', 'Slider_Image1', 'Slider_Image2', 'Slider_Image3', 'Slider_Image4', 'Slider_Image5',
                    'Details', 'Specification', 'Qa', 'Review',
                    'created_at', 'updated_at']

    readonly_fields = ['MainImage', 'Slider_Image1', 'Slider_Image2',
                       'Slider_Image3', 'Slider_Image4', 'Slider_Image5']

    search_fields = ['id', 'name', 'created_at']
    list_per_page = 10
    list_filter = ['created_at']
