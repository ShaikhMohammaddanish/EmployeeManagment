
from django import urls
from django.urls import path, include

from rest_framework.authtoken import views
from rest_framework import routers

from .views import CreateUserView,EmployeeViewSet

router = routers.DefaultRouter()
router.register(r'employee', EmployeeViewSet)
urlpatterns = router.urls


urlpatterns = [
    path('login/', views.obtain_auth_token),
    path('register/', CreateUserView.as_view()),
    path('api/', include(router.urls))
]


