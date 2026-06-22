from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    email = models.EmailField(unique=True) 
    name = models.CharField(max_length=100, blank=True)
    
    # Mantemos os originais (caso queira testar localmente)
    profile_image = models.ImageField(upload_to='profiles/', null=True, blank=True)
    cover = models.ImageField(upload_to='covers/', null=True, blank=True) 
    
    # ADICIONADOS: Novos campos para armazenar os links enviados pelo React
    profile_image_url = models.URLField(max_length=500, null=True, blank=True)
    cover_url = models.URLField(max_length=500, null=True, blank=True)
    
    birth_date = models.DateField(null=True, blank=True) 
    
    following = models.ManyToManyField(
        "self", symmetrical=False, related_name="followers", blank=True
    )

    def __str__(self):
        return self.username

    # Propriedades inteligentes para retornar o link correto ou um placeholder padrão
    @property
    def get_profile_image(self):
        if self.profile_image_url:
            return self.profile_image_url
        if self.profile_image:
            return self.profile_image.url
        return "https://api.dicebear.com/7.x/bottts/svg?seed=" + self.username # Avatar padrão dinâmico

    @property
    def get_cover(self):
        if self.cover_url:
            return self.cover_url
        if self.cover:
            return self.cover.url
        return "https://via.placeholder.com/900x300" # Capa padrão cinza
    