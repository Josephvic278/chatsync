from django.urls import reverse_lazy
from django.views.generic import CreateView
from .forms import SignUpForm
from .models import Users
# Create your views here.

class SignUpView(CreateView):
    model = Users
    form_class = SignUpForm
    template_name = "signup.html"
    
    def form_valid(self, form):
        user_instance = form.save(commit=False)
       
        user_instance.user_chats = {"chats":[]}
        user_instance.user_friends = {"friends":[]}
        user_instance.save()
        
        return super().form_valid(form)
        
    success_url = reverse_lazy("login")