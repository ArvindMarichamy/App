from django.db import models

class User(models.Model):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)

    def __str__(self):
        return self.email

class Hall(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()
    capacity = models.IntegerField()
    price = models.DecimalField(max_digits=10, decimal_places=2)
    availability = models.BooleanField(default=True)
    location = models.CharField(max_length=255)
    image = models.URLField(max_length=500, blank=True, default='')

    def __str__(self):
        return self.name

class Booking(models.Model):
    hall = models.ForeignKey(Hall, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    payment_method = models.CharField(max_length=50, blank=True, null=True)
    date = models.DateField()
    time = models.TimeField(default='00:00')
    booking_date = models.DateTimeField(auto_now_add=True)
    number_of_attendees = models.IntegerField(blank=True, null=True)
    name = models.CharField(max_length=255, default='default_name')

    def __str__(self):
        return f"Booking for {self.hall.name} by {self.user.email or 'unknown user'}"
