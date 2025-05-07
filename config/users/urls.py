from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import register_user, login_user  # Import your views for register and login

urlpatterns = [
    # JWT Token routes
    path('token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # Custom routes for register and login
    path('register/', register_user, name='register'),
    path('login/', login_user, name='login'),
]
