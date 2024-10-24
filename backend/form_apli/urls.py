from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .api import form_apliViewSet

router = DefaultRouter()
router.register(r'recibos', form_apliViewSet, basename='recibos')

urlpatterns = [
    path('', include(router.urls)),
]
