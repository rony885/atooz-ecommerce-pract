from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


from .views import purchase_list_create_view, purchase_detail_view

urlpatterns = [
    path('purchase/', purchase_list_create_view, name='purchase-list-create'),
    path('purchase/<int:pk>/', purchase_detail_view, name='purchase-detail'),
]

# +static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)

if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
    urlpatterns += static(settings.MEDIA_URL,
                          document_root=settings.MEDIA_ROOT)
