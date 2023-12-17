

from django.contrib import admin
from django.urls import path
from visualizer.views import *

urlpatterns = [
  
     path('', Home_View.as_view() , name="Home_View"   ),
     path('data/', Data_View.as_view() , name="Data_View"   ),
]
