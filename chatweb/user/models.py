from django.db import models
from django.contrib.auth.models import AbstractUser
# Create your models here.
class Users(AbstractUser):
    first_name = models.CharField(blank=False, null = False, max_length=50)
    last_name = models.CharField(blank=False, null = False, max_length=50)
    email = models.EmailField()
    user_chats = models.JSONField(null = True)
    user_friends = models.JSONField(null = True)
    user_photo = models.CharField(null = True, max_length = 1000000000000000000000)