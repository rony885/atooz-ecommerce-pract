from django.db import models
from django.utils.html import mark_safe
from django.template.defaultfilters import truncatechars


def generate_product_id():
    prefix = "PROD-"
    next_product_id = '00001'

    # Get Last Product Start With PROD-00001
    last_product_id = Product.objects.filter(
        product_id__startswith=prefix).order_by('product_id').last()

    if last_product_id:
        # Cut 5 digit from the Right and converted to int (PROD-:xxxxx)
        last_product_id_four_digit = int(last_product_id.product_id[-5:])

        # Increment one with last five digit
        next_product_id = '{0:05d}'.format(last_product_id_four_digit + 1)

    # Return custom product id number
    return prefix + next_product_id


class Category(models.Model):
    status = models.BooleanField(default=True)
    name = models.CharField(max_length=255)
    image = models.ImageField(
        upload_to='uploads/images/category', blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'category'

    def __str__(self):
        return f"{self.name}"

    def Image(self):
        if self.image:
            return mark_safe(
                '<img src="%s" alt="No Image" width="45" height="45" style="border-radius:10px" "/>' % self.image.url)
        return 'No Image'
    Image.short_description = 'Category Image'


class SubCategory(models.Model):
    status = models.BooleanField(default=True)
    name = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.DO_NOTHING)
    image = models.ImageField(
        upload_to='uploads/images/subcategory/product', blank=True, null=True)

    creator = models.CharField(max_length=25, default="Admin")
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'sub_category'

    def __str__(self):
        return f"{self.name}"

    def Image(self):
        if self.image:
            return mark_safe(
                '<img src="%s" alt="No Image" width="45" height="45" style="border-radius:10px" "/>' % self.image.url)
        return 'No Image'
    Image.short_description = 'Sub Category Image'


class Brand(models.Model):
    status = models.BooleanField(default=True)
    name = models.CharField(max_length=255)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'brand'

    def __str__(self):
        return f"{self.name}"


class Unit(models.Model):
    status = models.BooleanField(default=True)
    name = models.CharField(max_length=255)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'unit'

    def __str__(self):
        return f"{self.name}"


class Product(models.Model):
    product_id = models.CharField(
        max_length=25, unique=True, default=generate_product_id)
    status = models.BooleanField(default=True)
    product_type = models.CharField(max_length=25)
    name = models.CharField(max_length=255)
    product_code = models.CharField(max_length=25, unique=True)

    category = models.ForeignKey(
        Category, on_delete=models.DO_NOTHING, blank=True, null=True)
    sub_category = models.ForeignKey(
        SubCategory, on_delete=models.DO_NOTHING, blank=True, null=True)
    brand = models.ForeignKey(
        Brand, on_delete=models.DO_NOTHING, blank=True, null=True)
    unit_type = models.ForeignKey(
        Unit, on_delete=models.DO_NOTHING, blank=True, null=True)
    unit_quantity = models.CharField(max_length=25, blank=True, null=True)

    isFeatureProducts = models.BooleanField(default=False)
    isTopSellingProducts = models.BooleanField(default=False)
    isNewArrivalProducts = models.BooleanField(default=False)

    purchase_stock = models.IntegerField(default=0)
    purchase_price = models.DecimalField(
        max_digits=10, decimal_places=2, default=0)
    initial_stock = models.IntegerField(default=0)
    regularPrice = models.DecimalField(
        max_digits=10, decimal_places=2, default=0)
    discount = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    specialPrice = models.DecimalField(
        max_digits=10, decimal_places=2, default=0)

    sizes = models.JSONField(blank=True, null=True, default=list)
    colors = models.JSONField(blank=True, null=True, default=list)

    mainImage = models.ImageField(
        upload_to='uploads/images/product', blank=True, null=True)
    sliderImage1 = models.ImageField(
        upload_to='uploads/images/product', blank=True, null=True)
    sliderImage2 = models.ImageField(
        upload_to='uploads/images/product', blank=True, null=True)
    sliderImage3 = models.ImageField(
        upload_to='uploads/images/product', blank=True, null=True)
    sliderImage4 = models.ImageField(
        upload_to='uploads/images/product', blank=True, null=True)
    sliderImage5 = models.ImageField(
        upload_to='uploads/images/product', blank=True, null=True)

    details = models.TextField(blank=True, null=True)
    specification = models.TextField(blank=True, null=True)
    qa = models.TextField(blank=True, null=True)
    review = models.TextField(blank=True, null=True)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        db_table = 'product'

    def __str__(self):
        return f"{self.name}"

    def Details(self):
        return truncatechars(self.details, 50)

    def Specification(self):
        return truncatechars(self.specification, 50)

    def Qa(self):
        return truncatechars(self.qa, 50)

    def Review(self):
        return truncatechars(self.review, 50)

    def MainImage(self):
        if self.mainImage:
            return mark_safe(
                '<img src="%s" alt="No Image" width="45" height="45" style="border-radius:10px" "/>' % self.mainImage.url)
        return 'No Image'
    MainImage.short_description = 'Main Image'

    def Slider_Image1(self):
        if self.sliderImage1:
            return mark_safe(
                '<img src="%s" alt="No Image" width="45" height="45" style="border-radius:10px" "/>' % self.sliderImage1.url)
        return 'No Image'
    Slider_Image1.short_description = 'Slider Image 1'

    def Slider_Image2(self):
        if self.sliderImage2:
            return mark_safe(
                '<img src="%s" alt="No Image" width="45" height="45" style="border-radius:10px" "/>' % self.sliderImage2.url)
        return 'No Image'
    Slider_Image2.short_description = 'Slider Image 2'

    def Slider_Image3(self):
        if self.sliderImage3:
            return mark_safe(
                '<img src="%s" alt="No Image" width="45" height="45" style="border-radius:10px" "/>' % self.sliderImage3.url)
        return 'No Image'
    Slider_Image3.short_description = 'Slider Image 3'

    def Slider_Image4(self):
        if self.sliderImage4:
            return mark_safe(
                '<img src="%s" alt="No Image" width="45" height="45" style="border-radius:10px" "/>' % self.sliderImage4.url)
        return 'No Image'
    Slider_Image4.short_description = 'Slider Image 4'

    def Slider_Image5(self):
        if self.sliderImage5:
            return mark_safe(
                '<img src="%s" alt="No Image" width="45" height="45" style="border-radius:10px" "/>' % self.sliderImage5.url)
        return 'No Image'
    Slider_Image5.short_description = 'Slider Image 5'

    def save(self, *args, **kwargs):
        if self.pk:
            old_product = Product.objects.get(pk=self.pk)

            get_initial_stock = self.initial_stock

            if get_initial_stock > 0:
                self.purchase_stock = old_product.purchase_stock - get_initial_stock

            if get_initial_stock > 0:
                self.initial_stock = old_product.initial_stock + get_initial_stock

        super().save(*args, **kwargs)
