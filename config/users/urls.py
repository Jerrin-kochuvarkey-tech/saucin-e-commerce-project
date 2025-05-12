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

# from django.urls import path
# from .views import ( RegisterUserView, LoginUserView, UpdateProfileView, DeleteProfileView, ResetPasswordView )

# urlpatterns = [
#     path('user/register/', RegisterUserView.as_view(), name='register-user'),
#     path('user/login/', LoginUserView.as_view(), name='login-user'),
#     path('user/update-profile/<int:pk>/', UpdateProfileView.as_view(), name='update-user-by-id'),
#     path('user/delete-profile/<int:pk>/', DeleteProfileView.as_view(), name='delete-profile'),
#     path('reset-password/<int:pk>/', ResetPasswordView.as_view(), name='reset-password'),

# ]

# from django.urls import path
# from .views import (
#     RegisterUserView, LoginUserView, ViewProfileView,
#     UpdateProfileView, DeleteProfileView, ResetPasswordView
# )

# urlpatterns = [
#     path('register/', RegisterUserView.as_view(), name='register'),
#     path('login/', LoginUserView.as_view(), name='login'),
#     path('profile/<int:pk>/', ViewProfileView.as_view(), name='view-profile'),
#     path('profile/update/<int:pk>/', UpdateProfileView.as_view(), name='update-profile'),
#     path('profile/delete/<int:pk>/', DeleteProfileView.as_view(), name='delete-profile'),
#     path('profile/reset-password/<int:pk>/', ResetPasswordView.as_view(), name='reset-password'),
# ]

# from django.urls import path
# from .views import register_user, login_user
# from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView

# urlpatterns = [
#     path('user/register/', register_user, name='register'),
#     path('user/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
#     path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    
# ]
