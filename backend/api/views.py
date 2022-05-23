from django.contrib.auth import get_user_model # If used custom user model

from rest_framework.permissions import IsAuthenticatedOrReadOnly
from rest_framework import viewsets
from rest_framework.generics import CreateAPIView
from rest_framework import permissions
from rest_framework.pagination import PageNumberPagination



from .models import EmployeeRecord
from .serializers import UserSerializer, EmployeeSerializer



# register api 
class CreateUserView(CreateAPIView):

    model = get_user_model()
    permission_classes = [
        permissions.AllowAny # Or anon users can't register
    ]
    serializer_class = UserSerializer






class EmployeeViewSet(viewsets.ModelViewSet):

    class SetPagination(PageNumberPagination):
        page_size = 2
        page_size_query_param = 'page_size'
        max_page_size = 100

 
    pagination_class = SetPagination
    queryset = EmployeeRecord.objects.all()
    serializer_class = EmployeeSerializer
    permission_classes = [IsAuthenticatedOrReadOnly]
