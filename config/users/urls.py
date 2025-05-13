from django.urls import path
from .views import ( RegisterUserView, LoginUserView, ViewProfileView, UpdateProfileView, DeleteProfileView, ResetPasswordView )
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

urlpatterns = [
    path('user/register/', RegisterUserView.as_view(), name='register'),
    path('user/login/', LoginUserView.as_view(), name='login-user'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('profile/<int:pk>/', ViewProfileView.as_view(), name='view-profile'),
    path('profile/update/<int:pk>/', UpdateProfileView.as_view(), name='update-profile'),
    path('profile/delete/<int:pk>/', DeleteProfileView.as_view(), name='delete-profile'),
    path('profile/reset-password/<int:pk>/', ResetPasswordView.as_view(), name='reset-password'),    
]

