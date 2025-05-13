from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = [
        ('manager', 'Manager'),
        ('user', 'User'),
    ]
    phone = models.CharField(max_length=15, null=False, default='N/A')
    address = models.TextField(default="No Address Provided") 
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='user')
    pincode = models.CharField(max_length=10)

