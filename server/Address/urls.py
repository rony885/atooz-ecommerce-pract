from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static

from .views import DistrictsView, UpazilasView

from rest_framework import routers
route = routers.DefaultRouter()

route.register("districts", DistrictsView, basename='districts_view')
route.register("upazilas", UpazilasView, basename='upazilas_view')


urlpatterns = [
    path('address_api/', include(route.urls)),
]

# +static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
