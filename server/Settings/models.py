from django.db import models
from django.utils.html import mark_safe
from django.template.defaultfilters import truncatechars


def generate_supplier_id():
    prefix = "SUP-"
    next_supplier_id = '00001'

    # Get Last Supplier Start With SUP-00001
    last_supplier_id = Supplier.objects.filter(
        supplier_id__startswith=prefix).order_by('supplier_id').last()

    if last_supplier_id:
        # Cut 5 digit from the Right and converted to int (SUP-:xxxxx)
        last_supplier_id_four_digit = int(last_supplier_id.supplier_id[-5:])

        # Increment one with last five digit
        next_supplier_id = '{0:05d}'.format(last_supplier_id_four_digit + 1)

    # Return custom supplier id number
    return prefix + next_supplier_id


def generate_courier_id():
    prefix = "COU-"
    next_courier_id = '00001'

    # Get Last Courier Start With SUP-00001
    last_courier_id = Courier.objects.filter(
        courier_id__startswith=prefix).order_by('courier_id').last()

    if last_courier_id:
        # Cut 5 digit from the Right and converted to int (COU-:xxxxx)
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


class Client(models.Model):
    status = models.BooleanField(default=True)
    name = models.CharField(max_length=255)
    phone = models.CharField(max_length=25)
    image = models.ImageField(
        upload_to='uploads/images/client', blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'client'

    def __str__(self):
        return f"{self.name}"

    def Image(self):
        if self.image:
            return mark_safe(
                '<img src="%s" alt="No Image" width="45" height="45" style="border-radius:10px" "/>' % self.image.url)
        return 'No Image'
    Image.short_description = 'Client Logo'


class GeneralSettings(models.Model):
    status = models.BooleanField(default=True)
    company_name = models.CharField(max_length=255, blank=True, null=True)
    company_phone = models.CharField(max_length=25, blank=True, null=True)
    company_email = models.CharField(max_length=55, blank=True, null=True)
    company_address = models.TextField(blank=True, null=True)
    map_url = models.TextField(blank=True, null=True)
    facebook_url = models.TextField(blank=True, null=True)
    instagram_url = models.TextField(blank=True, null=True)
    twitter_url = models.TextField(blank=True, null=True)
    linkedin_url = models.TextField(blank=True, null=True)
    company_logo = models.ImageField(
        upload_to='uploads/images/general_settings', blank=True, null=True)

    receipt_header = models.TextField(blank=True, null=True)
    receipt_footer = models.TextField(blank=True, null=True)
    theme = models.CharField(max_length=25, blank=True, null=True)

    homeBannerImage1 = models.ImageField(
        upload_to='uploads/images/general_settings', blank=True, null=True)
    homeBannerImage2 = models.ImageField(
        upload_to='uploads/images/general_settings', blank=True, null=True)
    homeBannerImage3 = models.ImageField(
        upload_to='uploads/images/general_settings', blank=True, null=True)
    homeBannerCoverImage = models.ImageField(
        upload_to='uploads/images/general_settings', blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'general_settings'

    def __str__(self):
        return f"{self.company_name}"

    def MapUrl(self):
        return truncatechars(self.map_url, 50)

    def FBUrl(self):
        return truncatechars(self.facebook_url, 50)

    def InstaUrl(self):
        return truncatechars(self.instagram_url, 50)

    def TwitterUrl(self):
        return truncatechars(self.twitter_url, 50)

    def LinkedinUrl(self):
        return truncatechars(self.linkedin_url, 50)

    def RHeaderUrl(self):
        return truncatechars(self.receipt_header, 50)

    def RFooterUrl(self):
        return truncatechars(self.receipt_footer, 50)

    def Logo(self):
        if self.company_logo:
            return mark_safe(
                '<img src="%s" alt="No Image" width="45" height="45" style="border-radius:10px" "/>' % self.company_logo.url)
        return 'No Image'
    Logo.short_description = 'Client Logo'

    def HomeBannerImage1(self):
        if self.homeBannerImage1:
            return mark_safe(
                '<img src="%s" alt="No Image" width="45" height="45" style="border-radius:10px" "/>' % self.homeBannerImage1.url)
        return 'No Image'
    HomeBannerImage1.short_description = 'Client Logo'

    def HomeBannerImage2(self):
        if self.homeBannerImage2:
            return mark_safe(
                '<img src="%s" alt="No Image" width="45" height="45" style="border-radius:10px" "/>' % self.homeBannerImage2.url)
        return 'No Image'
    HomeBannerImage2.short_description = 'Client Logo'

    def HomeBannerImage3(self):
        if self.homeBannerImage3:
            return mark_safe(
                '<img src="%s" alt="No Image" width="45" height="45" style="border-radius:10px" "/>' % self.homeBannerImage3.url)
        return 'No Image'
    HomeBannerImage3.short_description = 'Client Logo'

    def HomeBannerCoverImage(self):
        if self.homeBannerCoverImage:
            return mark_safe(
                '<img src="%s" alt="No Image" width="45" height="45" style="border-radius:10px" "/>' % self.homeBannerCoverImage.url)
        return 'No Image'
    HomeBannerCoverImage.short_description = 'Client Logo'


class StaticDataType(models.Model):
    status = models.BooleanField(default=True)
    name = models.CharField(max_length=255, unique=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'static_data_type'

    def __str__(self):
        return f"{self.name}"


class StaticData(models.Model):
    status = models.BooleanField(default=True)
    type = models.ForeignKey(StaticDataType, on_delete=models.CASCADE)
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=255, blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'static_data'

    def __str__(self):
        return f"{self.name}"
