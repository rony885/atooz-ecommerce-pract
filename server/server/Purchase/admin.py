from django.contrib import admin
from .models import Purchase, PurchaseDetail


# purchase
@admin.register(Purchase)
class PurchaseAdmin(admin.ModelAdmin):
    list_display = ['id', 'purchase_no', 'invoice_no', 'purchase_date_time', 'purchase_date',
                    'supplier', 'total_item', 'total_amount', 'discount', 'grand_total_amount', 'created_at', 'updated_at']

    readonly_fields = []

    search_fields = ['id', 'purchase_no', 'purchase_date', 'created_at']
    list_per_page = 10
    list_filter = ['created_at']


@admin.register(PurchaseDetail)
class PurchaseDetailAdmin(admin.ModelAdmin):
    list_display = ['id', 'purchase', 'product',
                    'bdtRate', 'quantity', 'linePrice',
                    'created_at', 'updated_at']

    readonly_fields = []

    search_fields = ['id', 'created_at']
    list_per_page = 10
    list_filter = ['created_at']
