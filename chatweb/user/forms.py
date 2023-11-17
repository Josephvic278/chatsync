from django.contrib.auth.forms import UserCreationForm, UserChangeForm
from .models import Users

class SignUpForm(UserCreationForm):
    
    class Meta(UserCreationForm.Meta):
        model = Users
        fields = UserCreationForm.Meta.fields + ("first_name", "last_name", "email")

class SignUpChangeForm(UserChangeForm):
    
    class Meta(UserChangeForm.Meta):
        model = Users
        fields = UserChangeForm.Meta.fields