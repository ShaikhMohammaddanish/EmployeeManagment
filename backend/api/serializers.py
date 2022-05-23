
from rest_framework import serializers
from django.contrib.auth import get_user_model 
from .models import EmployeeRecord
UserModel = get_user_model()

# for register user wiht api
class UserSerializer(serializers.ModelSerializer):

    password = serializers.CharField(write_only=True)

    def create(self, validated_data):

        user = UserModel.objects.create_user(
            username=validated_data['username'],
            password=validated_data['password'],
            email=validated_data['email'],
        )

        return user

    class Meta:
        model = UserModel
        fields = ( "id", "username", "password",'email' )


# Document serializer
class EmployeeSerializer(serializers.ModelSerializer):

    class Meta:
        model = EmployeeRecord
        fields = '__all__'