from rest_framework import serializers
from .models import User, Hall, Booking

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'email', 'password']

class HallSerializer(serializers.ModelSerializer):
    class Meta:
        model = Hall
        fields = ['id', 'name', 'description', 'capacity', 'price', 'availability']

class BookingSerializer(serializers.ModelSerializer):
    class Meta:
        model = Booking
        fields = ['id', 'hall', 'user', 'payment_method', 'date', 'booking_date', 'number_of_attendees']
