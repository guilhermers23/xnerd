from django.db import models

# Create your models here.
from django.contrib.auth.models import AbstractUser
from django.db import models

class User(AbstractUser):
    email = models.EmailField(unique=True) 
    name = models.CharField(max_length=100, blank=True)
    profile_image = models.ImageField(upload_to='profiles/', null=True, blank=True)
    cover = models.ImageField(upload_to='covers/', null=True, blank=True) # Campo de Capa
    birth_date = models.DateField(null=True, blank=True) # Data de Aniversário
    
    following = models.ManyToManyField(
        "self", symmetrical=False, related_name="followers", blank=True
    )

    def __str__(self):
        return self.username


class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="posts")
    midia = models.FileField(upload_to='posts/', null=True, blank=True)
    content = models.TextField(max_length=280)
    creation_at = models.DateTimeField(auto_now_add=True)
    likes = models.ManyToManyField(User, related_name="liked_posts", blank=True)
    
    # Comentários: Usaremos a autorreferência (um post pai de outro)
    parent = models.ForeignKey("self", null=True, blank=True, on_delete=models.CASCADE, related_name="comments")
    