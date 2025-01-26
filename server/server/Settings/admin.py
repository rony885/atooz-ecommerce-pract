from django.db import models
from django.contrib import admin
from django_json_widget.widgets import JSONEditorWidget
from .models import Supplier, Courier, DeliveryType


@admin.register(Supplier)
class SupplierAdmin(admin.ModelAdmin):
    list_display = ['id', 'supplier_id', 'status', 'name',
                    'address', 'phone', 'email',
                    'Logo', 'created_at', 'updated_at']

    readonly_fields = ['Logo']

    search_fields = ['id', 'name', 'created_at']
    list_per_page = 10
    list_filter = ['created_at']


@admin.register(Courier)
class CourierAdmin(admin.ModelAdmin):
    list_display = ['id', 'courier_id', 'status',
                    'name',  'created_at', 'updated_at']

    readonly_fields = []

    search_fields = ['id', 'name', 'created_at']
    list_per_page = 10
    list_filter = ['created_at']


@admin.register(DeliveryType)
class DeliveryTypeAdmin(admin.ModelAdmin):
    list_display = ['id', 'status', 'name', 'amount',
                    'duration',  'created_at', 'updated_at']

    readonly_fields = []

    search_fields = ['id', 'name', 'created_at']
    list_per_page = 10
    list_filter = ['created_at']
