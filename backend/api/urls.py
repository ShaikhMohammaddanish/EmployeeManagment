
from django import urls
from django.urls import path, include

# from rest_framework.authtoken import views
from rest_framework import routers

from .views import CreateUserView,EmployeeViewSet,CustomAuthToken

router = routers.DefaultRouter()
router.register(r'employee', EmployeeViewSet)
urlpatterns = router.urls


urlpatterns = [
    path('login/', CustomAuthToken.as_view()),
    path('register/', CreateUserView.as_view()),
    path('api/', include(router.urls))
]


