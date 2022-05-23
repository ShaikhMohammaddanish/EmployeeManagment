from ast import mod
from django.db import models

# Create your models here.
class EmployeeRecord(models.Model):
    name = models.CharField(max_length=50)
    email = models.CharField(max_length=50)
    department = models.CharField(max_length=50)
    designation = models.CharField(max_length=50)
    age = models.IntegerField()
    salary = models.IntegerField() 

    def __str__(self):
        return self.name