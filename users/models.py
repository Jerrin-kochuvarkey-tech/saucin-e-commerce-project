

# from django.contrib.auth.models import AbstractUser
# from django.db import models

# class User(AbstractUser):
#     pass  # You can add custom fields here later
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('manager', 'Manager'),
        ('customer', 'Customer'),
    )
    role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='customer')


# from django.contrib.auth.models import AbstractUser
# from django.db import models

# class User(AbstractUser):
#     ROLE_CHOICES = (
#         ('admin', 'Admin'),
#         ('manager', 'Manager'),
#         ('customer', 'Customer'),
#     )
#     role = models.CharField(max_length=20, choices=ROLE_CHOICES, default='customer')
    
    