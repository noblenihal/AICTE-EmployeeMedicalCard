from django.urls import path
from . import views
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path("", views.getRoutes, name="routes"),
    path("employees/", views.employeesData, name="allEmployees"),
    path("employee/<int:pk>/", views.employeeWithId, name="employee")
]

urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
