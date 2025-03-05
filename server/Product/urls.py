from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from .views import CategoryView, CategoryUnpaginateView, SubCategoryView, SubCategoryUnpaginateView, BrandView, BrandUnpaginateView, UnitView, UnitUnpaginateView, ProductView, ProductUnpaginateView

from rest_framework import routers
route = routers.DefaultRouter()

route.register("category", CategoryView,
               basename='category_view')
route.register("unpaginate_category", CategoryUnpaginateView,
               basename='unpaginate_category_view')

route.register("sub_category", SubCategoryView,
               basename='sub_category_view')
route.register("unpaginate_sub_category", SubCategoryUnpaginateView,
               basename='unpaginate_sub_category_view')

route.register("brand", BrandView,
               basename='brand_view')
route.register("unpaginate_brand", BrandUnpaginateView,
               basename='unpaginate_brand_view')

route.register("unit", UnitView,
               basename='unit_view')
route.register("unpaginate_unit", UnitUnpaginateView,
               basename='unpaginate_unit_view')

route.register("product", ProductView,
               basename='product_view')
route.register("unpaginate_product", ProductUnpaginateView,
               basename='unpaginate_product_view')


urlpatterns = [
    path('product_api/', include(route.urls)),
]

# +static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
