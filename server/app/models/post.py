from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser
from app.models import User
from django.db import models

class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="posts")
    midia = models.FileField(upload_to='posts/', null=True, blank=True)
    content = models.TextField(max_length=280)
    creation_at = models.DateTimeField(auto_now_add=True)
    likes = models.ManyToManyField(User, related_name="liked_posts", blank=True)
    
    # Comentários: Usaremos a autorreferência (um post pai de outro)
    parent = models.ForeignKey("self", null=True, blank=True, on_delete=models.CASCADE, related_name="comments")
    