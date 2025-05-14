from rest_framework import generics, status, filters
from rest_framework.response import Response
from rest_framework.permissions import IsAdminUser, AllowAny, IsAuthenticated, BasePermission
from rest_framework.decorators import api_view, permission_classes
from django.db.models import Q

from .models import Product, Category
from .serializers import (
    ProductSerializer,
    CategorySerializer,
    ProductUserSerializer,
    ProductAdminManagerSerializer
)

# Custom permission
class IsAdminOrManager(BasePermission):
    def has_permission(self, request, view):
        return request.user.is_authenticated and request.user.role in ['admin', 'manager']


# --------------------- CATEGORY VIEWS ---------------------

@api_view(['POST'])
@permission_classes([IsAuthenticated, IsAdminOrManager])
def add_category(request):
    serializer = CategorySerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Category added successfully'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

@api_view(['GET'])
@permission_classes([IsAuthenticated])
def list_categories(request):
    if request.user.role in ['admin', 'manager']:
        categories = Category.objects.all()
        serializer = CategorySerializer(categories, many=True)
        return Response(serializer.data)
    return Response({'detail': 'You do not have permission to view categories.'}, status=403)


class CategoryCreateView(generics.CreateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAdminUser]

class CategoryUpdateView(generics.UpdateAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAdminUser]
    lookup_field = 'id'

class CategoryDeleteView(generics.DestroyAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [IsAdminUser]
    lookup_field = 'id'

class CategoryListView(generics.ListAPIView):
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    permission_classes = [AllowAny]


# --------------------- PRODUCT VIEWS ---------------------

@api_view(['POST'])
@permission_classes([IsAuthenticated])
def add_product(request):
    if request.user.role != 'manager':
        return Response({'error': 'Only managers can add products.'}, status=status.HTTP_403_FORBIDDEN)

    serializer = ProductSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Product added successfully'}, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['PUT'])
@permission_classes([IsAuthenticated])
def edit_product(request, pk):
    if request.user.role not in ['admin', 'manager']:
        return Response({'error': 'Permission denied'}, status=status.HTTP_403_FORBIDDEN)

    try:
        product = Product.objects.get(pk=pk)
    except Product.DoesNotExist:
        return Response({'error': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)

    serializer = ProductAdminManagerSerializer(product, data=request.data, partial=True)
    if serializer.is_valid():
        serializer.save()
        return Response({'message': 'Product updated successfully', 'product': serializer.data})
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['DELETE'])
@permission_classes([IsAuthenticated, IsAdminOrManager])
def delete_product(request, pk):
    try:
        product = Product.objects.get(pk=pk)
        product.delete()
        return Response({'message': 'Product deleted successfully'}, status=status.HTTP_204_NO_CONTENT)
    except Product.DoesNotExist:
        return Response({'error': 'Product not found'}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def list_products(request):
    products = Product.objects.all()
    if request.user.role == 'user':
        serializer = ProductUserSerializer(products, many=True)
    elif request.user.role in ['admin', 'manager']:
        serializer = ProductAdminManagerSerializer(products, many=True)
    else:
        return Response({'error': 'Invalid role'}, status=403)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def detail_product(request, pk):
    try:
        product = Product.objects.get(pk=pk)
    except Product.DoesNotExist:
        return Response({'error': 'Product not found'}, status=404)

    if request.user.role == 'user':
        serializer = ProductUserSerializer(product)
    elif request.user.role in ['admin', 'manager']:
        serializer = ProductAdminManagerSerializer(product)
    else:
        return Response({'error': 'Invalid role'}, status=403)
    return Response(serializer.data)


@api_view(['GET'])
def filtered_products(request):
    vehicle_type = request.GET.get('vehicle_type')
    category = request.GET.get('category')
    price_range = request.GET.get('price_range')

    products = Product.objects.all()
    if vehicle_type:
        products = products.filter(vehicle_type__iexact=vehicle_type)
    if category:
        products = products.filter(category__category_name__iexact=category)
    if price_range == 'below_300':
        products = products.filter(price__lt=300)
    elif price_range == 'above_300':
        products = products.filter(price__gte=300)

    serializer = ProductUserSerializer(products, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def search_products(request):
    query = request.GET.get('q', '')
    products = Product.objects.filter(
        Q(name__icontains=query) |
        Q(category__category_name__icontains=query)
    )
    serializer = ProductSerializer(products, many=True)
    return Response(serializer.data)


# Generic-based views (public)

class ProductCreateView(generics.CreateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAdminUser]

class ProductUpdateView(generics.UpdateAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAdminUser]
    lookup_field = 'id'

class ProductDeleteView(generics.DestroyAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [IsAdminUser]
    lookup_field = 'id'

class ProductListView(generics.ListAPIView):
    queryset = Product.objects.filter(is_available=True)
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]

class ProductDetailView(generics.RetrieveAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    permission_classes = [AllowAny]
    lookup_field = 'id'

class ProductSearchView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    filter_backends = [filters.SearchFilter]
    search_fields = ['name', 'category__name']
    permission_classes = [AllowAny]

# You can enable this with django-filter
# from django_filters.rest_framework import DjangoFilterBackend

class ProductFilterView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    # filter_backends = [DjangoFilterBackend]
    filterset_fields = ['category', 'price', 'stock']
    permission_classes = [AllowAny]

class ProductPaginatedListView(generics.ListAPIView):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer
    pagination_class = None  # Add custom pagination if needed
    permission_classes = [AllowAny]
