from django.db import models
from django.contrib import admin
from django_json_widget.widgets import JSONEditorWidget
from .models import Districts, Upazilas


@admin.register(Districts)
class DistrictsAdmin(admin.ModelAdmin):
    list_display = ['id',  'name', 'bn_name',
                    'lat', 'lon', 'url', 'created_at', 'updated_at']
    search_fields = ['id', 'name', 'created_at']
    list_per_page = 50
    list_filter = ['created_at']


@admin.register(Upazilas)
class UpazilasAdmin(admin.ModelAdmin):
    list_display = ['id', 'district', 'name',
                    'bn_name', 'url', 'created_at', 'updated_at']
    search_fields = ['id', 'name', 'created_at']
    list_per_page = 50
    list_filter = ['created_at']
