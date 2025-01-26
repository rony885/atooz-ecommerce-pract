from django.contrib.auth.models import AbstractBaseUser, BaseUserManager, PermissionsMixin
from django.db import models
from django.utils.html import mark_safe


class CustomUserManager(BaseUserManager):
    def create_user(self, email=None, name=None, district=None, upazila=None, address=None, image=None, password=None, is_staff=False, is_superuser=False):
        if not email:
            raise ValueError('Users must have an email address')
        user = self.model(
            email=self.normalize_email(email),
            name=name,
            district=district,
            upazila=upazila,
            address=address,
            image=image,
            is_staff=is_staff,
            is_superuser=is_superuser,
        )
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email=None, name=None, district=None, upazila=None, address=None, image=None, password=None):
        user = self.create_user(
            email=email,
            password=password,
            name=name,
            district=district,
            upazila=upazila,
            address=address,
            image=image,
        )
        user.is_staff = True
        user.is_superuser = True
        user.save(using=self._db)
        return user


class CustomUser(AbstractBaseUser, PermissionsMixin):
    email = models.CharField(max_length=255, unique=True)
    name = models.CharField(max_length=255)
    district = models.CharField(max_length=100)
    upazila = models.CharField(max_length=100)
    address = models.TextField()
    image = models.ImageField(
        upload_to='uploads/images/customUser', blank=True, null=True)

    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    objects = CustomUserManager()

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['name', 'district', 'upazila', 'address']

    def __str__(self):
        return f"{self.email}"

    def Image(self):
        if self.image:
            return mark_safe(
                '<img src="%s" alt="No Image" width="45" height="45" style="border-radius:10px" "/>' % self.image.url)
        return 'No Image'
    Image.short_description = 'Image'
