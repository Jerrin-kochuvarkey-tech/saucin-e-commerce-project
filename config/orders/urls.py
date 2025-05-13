from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    CartViewSet, WishlistViewSet, OrderViewSet,
    OrderItemViewSet, ShippingAddressViewSet
)

router = DefaultRouter()
router.register('cart', CartViewSet, basename='cart')
router.register('wishlist', WishlistViewSet, basename='wishlist')
router.register('orders', OrderViewSet, basename='orders')
router.register('order-items', OrderItemViewSet, basename='order-items')
router.register('shipping-addresses', ShippingAddressViewSet, basename='shipping-addresses')

urlpatterns = [
    path('', include(router.urls)),
]
