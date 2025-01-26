from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from .views import SupplierView, CourierView,  SupplierUnpaginateView, CourierUnpaginateView,  DeliveryTypeUnpaginateView, DeliveryTypeView

from rest_framework import routers
route = routers.DefaultRouter()

route.register("supplier", SupplierView,
               basename='supplier_view')
route.register("unpaginate_supplier", SupplierUnpaginateView,
               basename='unpaginate_supplier_view')

route.register("courier", CourierView,
               basename='courier_view')
route.register("unpaginate_courier", CourierUnpaginateView,
               basename='unpaginate_courier_view')

route.register("deliveryType", DeliveryTypeView,
               basename='deliveryType_view')
route.register("unpaginate_deliveryType", DeliveryTypeUnpaginateView,
               basename='unpaginate_deliveryType_view')

urlpatterns = [
    path('settings_api/', include(route.urls)),
]

# +static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
