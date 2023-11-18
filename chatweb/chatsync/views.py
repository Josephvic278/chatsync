from django.shortcuts import render
from django.views import generic
from .models import Chats
from user.models import Users
# Create your views here.

class HomePageView(generic.ListView):
    model = Chats
    fields = ["chat_field"]
    template_name = "home.html"        
    context_object_name = "chats"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["userdb"] = Users.objects.all()
        
        return context