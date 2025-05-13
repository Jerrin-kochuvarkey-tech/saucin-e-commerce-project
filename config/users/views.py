from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth import authenticate, get_user_model
from .serializers import RegisterSerializer
from rest_framework_simplejwt.tokens import RefreshToken
from rest_framework.permissions import IsAuthenticated
from rest_framework_simplejwt.authentication import JWTAuthentication

User = get_user_model()

# Register View
class RegisterUserView(APIView):
    def post(self, request):
        serializer = RegisterSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User registered successfully'}, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Login View
class LoginUserView(APIView):
    def post(self, request):
        email = request.data.get('email')
        password = request.data.get('password')

        try:
            user_obj = User.objects.get(email=email)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

        user = authenticate(request, username=user_obj.username, password=password)
        if user is not None:
            refresh = RefreshToken.for_user(user)
            return Response({
                'message': 'Login successful',
                'refresh': str(refresh),
                'access': str(refresh.access_token),
            })
        return Response({'error': 'Invalid credentials'}, status=status.HTTP_401_UNAUTHORIZED)


# View Profile (authenticated user)
class ViewProfileView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def get(self, request, pk):
        user = request.user
        try:
            profile_user = User.objects.get(pk=pk)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

        if user.id != profile_user.id:
            return Response({'error': 'Permission denied'}, status=status.HTTP_403_FORBIDDEN)

        serializer = RegisterSerializer(profile_user)
        return Response(serializer.data, status=status.HTTP_200_OK)


# Update Profile View
class UpdateProfileView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        user = request.user
        try:
            profile_user = User.objects.get(pk=pk)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

        if user.id != profile_user.id:
            return Response({'error': 'Permission denied'}, status=status.HTTP_403_FORBIDDEN)

        serializer = RegisterSerializer(profile_user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response({'message': 'User updated successfully'}, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


# Delete Profile View
class DeleteProfileView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def delete(self, request, pk):
        user = request.user
        try:
            profile_user = User.objects.get(pk=pk)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

        if user.id != profile_user.id:
            return Response({'error': 'Permission denied'}, status=status.HTTP_403_FORBIDDEN)

        profile_user.delete()
        return Response({'message': 'User deleted successfully'}, status=status.HTTP_204_NO_CONTENT)


# Reset Password View
class ResetPasswordView(APIView):
    authentication_classes = [JWTAuthentication]
    permission_classes = [IsAuthenticated]

    def put(self, request, pk):
        user = request.user
        try:
            profile_user = User.objects.get(pk=pk)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

        if user.id != profile_user.id:
            return Response({'error': 'Permission denied'}, status=status.HTTP_403_FORBIDDEN)

        password = request.data.get('password')
        if not password:
            return Response({'error': 'Password is required'}, status=status.HTTP_400_BAD_REQUEST)

        profile_user.set_password(password)
        profile_user.save()
        return Response({'message': 'Password updated successfully'}, status=status.HTTP_200_OK)
