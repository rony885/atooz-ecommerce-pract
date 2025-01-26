from django.contrib import admin
from .models import Order, OrderDetail


@admin.register(Order)
class OrderAdmin(admin.ModelAdmin):
    list_display = ['id', 'order_no', 'invoice_no',
                    'courier', 'customer', 'delivery_type',
                    'order_date_time', 'order_date', 'delivery_status', 'payment_method', 'note',
                    'total_item', 'total_amount',  'discount', 'payable_amount', 'paid_amount',
                    'due_amount', 'delivery_charge', 'grand_total_amount',
                    'created_at', 'updated_at']
    readonly_fields = []
    search_fields = ['id', 'order_no', 'order_date', 'created_at']
    list_per_page = 10
    list_filter = ['created_at']


@admin.register(OrderDetail)
class OrderDetailAdmin(admin.ModelAdmin):
    list_display = ['id', 'order', 'product',
                    'bdtRate', 'quantity', 'linePrice', 'size', 'color',
                    'created_at', 'updated_at']
    readonly_fields = []
    search_fields = ['id', 'created_at']
    list_per_page = 10
    list_filter = ['created_at']
