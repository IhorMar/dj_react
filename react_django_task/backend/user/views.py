from django.shortcuts import render
from rest_framework import viewsets
from .serializers import UserSerializer, GroupSerializer
from .models import User, Group


# Create your views here.

class UserView(viewsets.ModelViewSet):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class GroupView(viewsets.ModelViewSet):
    serializer_class = GroupSerializer
    queryset = Group.objects.all()
