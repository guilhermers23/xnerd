from django.db import models
from django.contrib.auth.models import AbstractUser
from app.models import User

class Post(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name="posts")
    
    # Mantemos o FileField (caso queira usar local)
    midia = models.FileField(upload_to='posts/', null=True, blank=True)
    
    # ADICIONADO: Novo campo para armazenar o link direto da imagem/mídia
    midia_url = models.URLField(max_length=500, null=True, blank=True)
    
    content = models.TextField(max_length=280)
    creation_at = models.DateTimeField(auto_now_add=True)
    likes = models.ManyToManyField(User, related_name="liked_posts", blank=True)
    
    # Comentários: Usaremos a autorreferência (um post pai de outro)
    parent = models.ForeignKey("self", null=True, blank=True, on_delete=models.CASCADE, related_name="comments")

    @property
    def get_midia(self):
        if self.midia_url:
            return self.midia_url
        if self.midia:
            return self.midia.url
        return None
    