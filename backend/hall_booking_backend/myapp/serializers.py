from rest_framework import serializers
from django.contrib.auth.hashers import make_password
from .models import User, Hall, Booking

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'password']
        extra_kwargs = {
            'password': {'write_only': True}
        }

    def create(self, validated_data):
        password = validated_data.pop('password', None)
        if password:
            validated_data['password'] = make_password(password)
        return super().create(validated_data)

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        instance = super().update(instance, validated_data)
        if password:
            instance.password = make_password(password)
            instance.save()
        return instance

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        representation.pop('password', None)
        return representation

class HallSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hall
        fields = ['id', 'name', 'description', 'capacity', 'price', 'availability', 'location', 'image']

class BookingSerializer(serializers.ModelSerializer):
    hall_name = serializers.ReadOnlyField(source='hall.name')
    user_email = serializers.ReadOnlyField(source='user.email')

    class Meta:
        model = Booking
        fields = [
            'id', 'hall', 'hall_name', 'user', 'user_email', 
            'payment_method', 'date', 'time', 'booking_date', 
            'number_of_attendees', 'name'
        ]
        extra_kwargs = {
            'payment_method': {'required': False, 'allow_null': True},
            'number_of_attendees': {'required': False, 'allow_null': True}
        }
