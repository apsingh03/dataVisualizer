from django.shortcuts import render
# rest framework
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView

from visualizer.models import *

# Create your views here.


class Home_View(APIView):
    def get(self, request):
        return Response({"status": 200, "data": "serializer.data"})
    

class Data_View(APIView):
    
    def get(self, request):

        data = Data.objects.values()

        return Response({"status": 200, "data": data})