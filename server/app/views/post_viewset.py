from django.shortcuts import render

# Create your views here.
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import get_user_model
from django.db.models import Q
from django.shortcuts import get_object_or_404
from app.models import Post
from app.serializers import PostSerializer

User = get_user_model()

# --- FEED DE NOTÍCIAS (REQUISITO: APENAS PESSOAS SEGUIDAS) ---
class NewsFeedView(generics.ListAPIView):
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        user = self.request.user
        # Filtra posts de quem o usuário segue OU posts do próprio usuário
        return Post.objects.filter(
            Q(user__in=user.following.all()) | Q(user=user)
        ).distinct().order_by('-creation_at')

# --- POSTS GLOBAIS E CRIAÇÃO ---
class PostListCreateView(generics.ListCreateAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

class PostDetailView(generics.RetrieveDestroyAPIView):
    queryset = Post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]


class CommentListView(generics.ListCreateAPIView):
    serializer_class = PostSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # Filtra apenas os "posts" cujo pai é o ID da URL
        return Post.objects.filter(parent_id=self.kwargs['pk']).order_by('-creation_at')

    def perform_create(self, serializer):
        # Pega o ID da URL e salva automaticamente como 'parent'
        parent_post = get_object_or_404(Post, pk=self.kwargs['pk'])
        serializer.save(user=self.request.user, parent=parent_post)
        

# --- INTERAÇÕES (REQUISITO: CURTIDAS E SEGUIR) ---
class LikePostView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, pk):
        try:
            post = Post.objects.get(pk=pk)
        except Post.DoesNotExist:
            return Response(status=status.HTTP_404_NOT_FOUND)
        
        if request.user in post.likes.all():
            post.likes.remove(request.user)
            return Response({"detail": "Like removido"}, status=status.HTTP_200_OK)
        
        post.likes.add(request.user)
        return Response({"detail": "Like adicionado"}, status=status.HTTP_201_CREATED)
