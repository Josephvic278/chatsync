from django.shortcuts import render
from django.views import generic
from .models import Chats
# Create your views here.

class HomePageView(generic.ListView):
    model = Chats
    fields = ["chat_field"]
    template_name = "home.html"        
    context_object_name = "chats"