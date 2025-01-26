from rest_framework import serializers
from .models import Districts, Upazilas


class DistrictsSerializer(serializers.ModelSerializer):

    class Meta:
        model = Districts
        fields = '__all__'


class UpazilasSerializer(serializers.ModelSerializer):

    class Meta:
        model = Upazilas
        fields = '__all__'
