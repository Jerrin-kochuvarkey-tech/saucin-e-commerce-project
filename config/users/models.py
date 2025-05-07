from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    email = models.EmailField(unique=True)
    role = models.CharField(max_length=20, choices=[('admin', 'Admin'), ('customer', 'Customer'), ('manager', 'Manager')])

    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['username']

# from django.contrib.auth.models import AbstractUser
# from django.db import models

# class User(AbstractUser):
#     ROLE_CHOICES = (
#         ('admin', 'Admin'),
#         ('manager', 'Manager'),
#         ('customer', 'Customer'),
#     )
#     role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='customer')
    
    