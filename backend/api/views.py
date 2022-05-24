from django.contrib.auth import get_user_model # If used custom user model

from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework import viewsets
from rest_framework.generics import CreateAPIView
from rest_framework import permissions
from rest_framework.pagination import PageNumberPagination
from rest_framework.authtoken.views import ObtainAuthToken
from rest_framework.authtoken.models import Token
from rest_framework.response import Response


from .models import EmployeeRecord
from .serializers import UserSerializer, EmployeeSerializer



# register api 
class CreateUserView(CreateAPIView):

    model = get_user_model()
    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]
    serializer_class = UserSerializer






class CustomAuthToken(ObtainAuthToken):

    def post(self, request, *args, **kwargs):
        serializer = self.serializer_class(data=request.data,
                                       context={'request': request})
        serializer.is_valid(raise_exception=True)
        user = serializer.validated_data['user']
        token, created = Token.objects.get_or_create(user=user)
        return Response({
            'token': token.key,
            'email': user.email
        })




class EmployeeViewSet(viewsets.ModelViewSet):

    class SetPagination(PageNumberPagination):
        page_size = 2
        page_size_query_param = 'page_size'
        max_page_size = 100

 
    pagination_class = SetPagination
    queryset = EmployeeRecord.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
