from django.shortcuts import render
from django.http import JsonResponse
from rest_framework.serializers import Serializer
from rest_framework.response import Response
from rest_framework.decorators import api_view
from .serializers import EmployeeSerializer, DependentSerializer
from . import models
from api import serializers
import json
# Create your views here.


@api_view(['GET', 'POST'])
def getRoutes(request):
    return Response("Our Data")


@api_view(['POST'])
def employeesData(request):
    data = request.data
    employee = models.Employee.objects.create(

        employeeName=data['employeeName'],
        mobileNumber=data['mobileNumber'],
        dateOfBirth=data['dateOfBirth'],
        address=data['address'],
        designation=data['designation'],
        ward=data['ward'],
        bloodGroup=data['bloodGroup'],
        payMatrix=data['payMatrix'],

    )

    try:
        employee.save()
        Eid = employee.id
    except:
        print("some error mann!!")

    allDependents = data['allDependents']
    print(allDependents)
    print(type(allDependents))
    for item in allDependents:
        dependent = models.Dependent.objects.create(
            eId=employee,
            name=item["name"],
            relation=item['relation'],
            dateOfBirth=item['dateOfBirth'],
        )

        dependent.save()

    return Response({"recentlyAddedId": f"{Eid}"})


@api_view(['GET'])
def employeeWithId(request, pk):
    employee = models.Employee.objects.get(id=pk)

    serializer = EmployeeSerializer(employee, many=False)
    dependents = models.Dependent.objects.filter(eId__pk=pk)
    depSerializer = DependentSerializer(dependents, many=True)

    d = serializer.data
    d["allDependents"] = depSerializer.data

    return Response(d)
