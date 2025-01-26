from django.db import models
from django.utils.html import mark_safe
from django.template.defaultfilters import truncatechars


def generate_supplier_id():
    prefix = "SUP-"
    next_supplier_id = '00001'

    # Get Last Supplier Start With SUP-
    last_supplier_id = Supplier.objects.filter(
        supplier_id__startswith=prefix).order_by('supplier_id').last()

    if last_supplier_id:
        # Cut 5 digit from the Right and converted to int (SUP-:xxxx)
        last_supplier_id_four_digit = int(last_supplier_id.supplier_id[-5:])

        # Increment one with last five digit
        next_supplier_id = '{0:05d}'.format(last_supplier_id_four_digit + 1)

    # Return custom supplier id number
    return prefix + next_supplier_id


def generate_courier_id():
    prefix = "COU-"
    next_courier_id = '00001'

    # Get Last Courier Start With SUP-
    last_courier_id = Courier.objects.filter(
        courier_id__startswith=prefix).order_by('courier_id').last()

    if last_courier_id:
        # Cut 5 digit from the Right and converted to int (COU-:xxxx)
        last_courier_id_four_digit = int(last_courier_id.courier_id[-5:])

        # Increment one with last five digit
        next_courier_id = '{0:05d}'.format(last_courier_id_four_digit + 1)

    # Return custom courier id number
    return prefix + next_courier_id


class Supplier(models.Model):
    supplier_id = models.CharField(
        max_length=25, unique=True, default=generate_supplier_id)
    status = models.BooleanField(default=True)
    name = models.CharField(max_length=255)
    address = models.TextField()
    phone = models.CharField(max_length=25)
    email = models.EmailField(blank=True, null=True)
    logo = models.ImageField(
        upload_to='uploads/images/supplier', blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'supplier'

    def __str__(self):
        return f"{self.name}"

    def Logo(self):
        if self.logo:
            return mark_safe(
                '<img src="%s" alt="No Image" width="45" height="45" style="border-radius:10px" "/>' % self.logo.url)
        return 'No Image'
    Logo.short_description = 'Supplier Logo'


class Courier(models.Model):
    courier_id = models.CharField(
        max_length=25, unique=True, default=generate_courier_id)
    status = models.BooleanField(default=True)
    name = models.CharField(max_length=255)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'courier'

    def __str__(self):
        return f"{self.name}"


class DeliveryType(models.Model):
    status = models.BooleanField(default=True)
    name = models.CharField(max_length=255)
    amount = models.DecimalField(max_digits=10, decimal_places=2)
    duration = models.CharField(max_length=255, blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'delivery_type'

    def __str__(self):
        return f"{self.name}"
