from django.shortcuts import render
from rest_framework import viewsets

from .models import Districts, Upazilas
from .serializers import DistrictsSerializer, UpazilasSerializer


class DistrictsView(viewsets.ModelViewSet):
    queryset = Districts.objects.all()
    serializer_class = DistrictsSerializer


class UpazilasView(viewsets.ModelViewSet):
    queryset = Upazilas.objects.all()
    serializer_class = UpazilasSerializer