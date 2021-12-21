from rest_framework.serializers import ModelSerializer
from . import models


class EmployeeSerializer(ModelSerializer):
    class Meta:
        model = models.Employee
        fields = ('employeeName',
                  'mobileNumber',
                  'dateOfBirth',
                  'address',
                  'designation',
                  'ward',
                  'bloodGroup',
                  'payMatrix',
                  )


class DependentSerializer(ModelSerializer):
    class Meta:
        model = models.Dependent
        fields = '__all__'
