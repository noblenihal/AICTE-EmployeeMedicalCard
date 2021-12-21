from django.db import models

# Create your models here.


class Employee(models.Model):
    employeeName = models.CharField(max_length=50, null=False, blank=False)
    mobileNumber = models.CharField(max_length=15, null=False)
    dateCreated = models.DateTimeField(auto_now_add=True, null=False)
    dateOfBirth = models.DateField(null=False)
    address = models.TextField(max_length=250, null=False)
    designation = models.CharField(max_length=15, null=False)
    ward = models.CharField(max_length=15, null=False)
    bloodGroup = models.CharField(max_length=5, null=False)
    payMatrix = models.CharField(max_length=35, null=False)
    image = models.ImageField(null=False, blank=False, default="default.png")

    def __str__(self):
        return self.employeeName


class Dependent(models.Model):
    eId = models.ForeignKey(
        Employee, null=False, on_delete=models.CASCADE)
    name = models.CharField(max_length=50, null=False, blank=False)
    relation = models.CharField(max_length=30, null=False, blank=False)
    dateOfBirth = models.DateField(null=False)
    image = models.ImageField(null=False, blank=False, default="default.png")

    def __str__(self):
        return self.name
