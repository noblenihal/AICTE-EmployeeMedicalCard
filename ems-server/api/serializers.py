from rest_framework.serializers import ModelSerializer
from . import models


class EmployeeSerializer(ModelSerializer):
    class Meta:
        model = models.Employee
        fields = '__all__'


class DependentSerializer(ModelSerializer):
    class Meta:
        model = models.Dependent
        fields = '__all__'
