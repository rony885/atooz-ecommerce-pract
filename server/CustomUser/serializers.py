# serializers.py
from rest_framework import serializers
from django.contrib.auth import authenticate
from .models import CustomUser


class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'name', 'district',
                  'upazila', 'address', 'image', 'is_active', 'is_staff', 'is_superuser',
                  'created_at', 'updated_at']


class UserRegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(write_only=True)

    class Meta:
        model = CustomUser
        fields = ['id', 'email', 'name', 'district',
                  'upazila', 'address', 'image', 'password', 'is_staff', 'is_superuser',
                  'created_at', 'updated_at']
        read_only_fields = []

    def create(self, validated_data):
        is_staff = False
        is_superuser = False

        if 'is_staff' in validated_data:
            is_staff = validated_data.get('is_staff')
        if 'is_superuser' in validated_data:
            is_superuser = validated_data.get('is_superuser')

        user = CustomUser.objects.create_user(**validated_data)
        user.is_staff = is_staff
        user.is_superuser = is_superuser
        user.save()
        return user


class UserLoginSerializer(serializers.Serializer):
    email = serializers.CharField()
    password = serializers.CharField()

    def validate(self, attrs):
        email = attrs.get('email')
        password = attrs.get('password')

        if email and password:
            user = authenticate(email=email, password=password)
            if not user:
                raise serializers.ValidationError(
                    'Incorrect email or password')
        else:
            raise serializers.ValidationError(
                'Must include "email" and "password"')

        attrs['user'] = user
        return attrs
