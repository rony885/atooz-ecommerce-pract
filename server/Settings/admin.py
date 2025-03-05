from django.db import models
from django.contrib import admin
from django_json_widget.widgets import JSONEditorWidget
from .models import Supplier, Courier, DeliveryType, Client, GeneralSettings, StaticDataType, StaticData


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


@admin.register(Client)
class ClientAdmin(admin.ModelAdmin):
    list_display = ['id', 'status', 'name', 'phone',
                    'Image',  'created_at', 'updated_at']

    readonly_fields = []

    search_fields = ['id', 'name', 'created_at']
    list_per_page = 10
    list_filter = ['created_at']


@admin.register(GeneralSettings)
class GeneralSettingsAdmin(admin.ModelAdmin):
    list_display = ['id', 'status', 'company_name', 'company_phone', 'company_email', 'company_address',
                    'MapUrl', 'FBUrl', 'InstaUrl', 'TwitterUrl', 'LinkedinUrl', 'Logo',
                    'RHeaderUrl', 'RFooterUrl', 'theme', 'HomeBannerImage1', 'HomeBannerImage2', 'HomeBannerImage3',
                    'HomeBannerCoverImage',  'created_at', 'updated_at']

    readonly_fields = []

    search_fields = ['id', 'company_name', 'created_at']
    list_per_page = 10
    list_filter = ['created_at']


@admin.register(StaticDataType)
class StaticDataTypeAdmin(admin.ModelAdmin):
    list_display = ['id', 'status', 'name',  'created_at', 'updated_at']

    readonly_fields = []

    search_fields = ['id', 'name', 'created_at']
    list_per_page = 30
    list_filter = ['created_at']


@admin.register(StaticData)
class StaticDataAdmin(admin.ModelAdmin):
    list_display = ['id', 'status', 'type', 'name', 'description',
                    'created_at', 'updated_at']

    readonly_fields = []

    search_fields = ['id', 'name', 'created_at']
    list_per_page = 30
    list_filter = ['type', 'created_at']
