from django.urls import path
from .views import *

urlpatterns = [
    path('admin/category/create/', CategoryCreateView.as_view()),
    path('admin/category/update/<int:id>/', CategoryUpdateView.as_view()),
    path('admin/category/delete/<int:id>/', CategoryDeleteView.as_view()),
    path('users/categorylist/', CategoryListView.as_view()),




    path('admin/product/create/', ProductCreateView.as_view()),
    path('admin/product/update/<int:id>/', ProductUpdateView.as_view()),
    path('admin/product/delete/<int:id>/', ProductDeleteView.as_view()),
    path('users/productalllist/', ProductListView.as_view()),
    path('users/productlist/<int:id>/', ProductDetailView.as_view()),

    path('products/search/', ProductSearchView.as_view()),
    path('products/filter/', ProductFilterView.as_view()),
    path('products/paginated/', ProductPaginatedListView.as_view()),

    # Alias path for extra admin product add if needed
    path('admin/addnewproduct/', ProductCreateView.as_view()),
]
