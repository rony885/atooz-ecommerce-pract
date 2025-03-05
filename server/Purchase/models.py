from django.db import models
from django.utils.html import mark_safe
from django.template.defaultfilters import truncatechars

from Settings.models import Supplier
from Product.models import Product
import datetime
from django.utils import timezone


def get_current_date_and_time(): return timezone.now()
def get_current_date(): return timezone.now().date()


def generate_purchase_no():
    today_date = datetime.date.today()

    # GET Current Year
    current_year = today_date.strftime('%y')
    current_month = today_date.strftime('%m')
    prefix = "P-" + current_year + current_month

    # For the very first time purchase_no is P-20240200001
    next_purchase_no = '00001'

    # Get Last Item Start With P-
    last_purchase_no = Purchase.objects.filter(
        purchase_no__startswith=prefix).order_by('purchase_no').last()

    if last_purchase_no:
        # Cut 5 digit from the Right and converted to int (P-:xxxxx)
        last_purchase_no_four_digit = int(last_purchase_no.purchase_no[-5:])

        # Increment one with last five digit
        next_purchase_no = '{0:05d}'.format(last_purchase_no_four_digit + 1)

    # Return custom purchase_no
    return prefix + next_purchase_no


def generate_invoice_no():
    today_date = datetime.date.today()

    # GET Current Year
    current_year = today_date.strftime('%y')
    current_month = today_date.strftime('%m')
    prefix = "PI-" + current_year + current_month

    # For the very first time invoice_no is PI-20240200001
    next_invoice_no = '00001'

    # Get Last Item Start With PI-
    last_invoice_no = Purchase.objects.filter(
        invoice_no__startswith=prefix).order_by('invoice_no').last()

    if last_invoice_no:
        # Cut 5 digit from the Right and converted to int (PI-:xxxxx)
        last_invoice_no_four_digit = int(last_invoice_no.invoice_no[-5:])

        # Increment one with last five digit
        next_invoice_no = '{0:05d}'.format(last_invoice_no_four_digit + 1)

    # Return custom invoice_no
    return prefix + next_invoice_no


class Purchase(models.Model):
    purchase_no = models.CharField(max_length=50, default=generate_purchase_no)
    invoice_no = models.CharField(max_length=50, default=generate_invoice_no)

    purchase_date_time = models.DateTimeField(
        default=get_current_date_and_time)
    purchase_date = models.DateField(default=get_current_date)
    supplier = models.ForeignKey(Supplier, on_delete=models.DO_NOTHING)

    total_item = models.IntegerField()
    total_amount = models.DecimalField(max_digits=10, decimal_places=2)
    discount = models.DecimalField(max_digits=10, decimal_places=2)
    grand_total_amount = models.DecimalField(max_digits=10, decimal_places=2)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'purchase'

    def __str__(self):
        return self.purchase_no


class PurchaseDetail(models.Model):
    purchase = models.ForeignKey(
        Purchase, related_name='purchase_details', on_delete=models.DO_NOTHING)
    product = models.ForeignKey(Product, on_delete=models.DO_NOTHING)
    bdtRate = models.DecimalField(max_digits=10, decimal_places=2)
    quantity = models.IntegerField()
    linePrice = models.DecimalField(max_digits=10, decimal_places=2)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'purchase_details'

    def __str__(self):
        return f"{self.purchase.purchase_no} - {self.product.name}"
