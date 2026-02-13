from django.shortcuts import render

# Create your views here.
from rest_framework import generics
from .models import Post
from .serializers import PostSerializer

class NewsFeedView(generics.ListAPIView):
    serializer_class = PostSerializer

    def get_queryset(self):
        user = self.request.user
        # Retorna posts de quem o usuário segue + seus próprios posts
        return Post.objects.filter(
            models.Q(user__in=user.following.all()) | models.Q(user=user)
        ).distinct().order_by('-creation_at')
    