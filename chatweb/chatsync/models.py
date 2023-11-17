from django.db import models
import json

# Create your models here.
class Chats(models.Model):
    chat_field = models.JSONField()