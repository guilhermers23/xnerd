from django.shortcuts import render

# Create your views here.
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import get_user_model
from django.db.models import Q
from django.shortcuts import get_object_or_404
from .models import Post
from .serializers import PostSerializer, UserProfileSerializer, AuthorSerializer

User = get_user_model()

# --- AUTENTICAÇÃO E REGISTRO ---
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny] # Permite que qualquer um se cadastre
    serializer_class = UserProfileSerializer # Usaremos o serializer de perfil para criar

# --- PERFIL (REQUISITO: ALTERAR FOTO, NOME E SENHA) ---
class MeView(generics.RetrieveUpdateAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user # Retorna o usuário logado para edição

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

class FollowUserView(APIView):
    permission_classes = [permissions.IsAuthenticated]

    def post(self, request, pk):
        # get_object_or_404 evita que o servidor caia se o ID for inválido
        user_to_follow = get_object_or_404(User, pk=pk)
        
        if user_to_follow == request.user:
            return Response({"error": "Você não pode seguir a si mesmo"}, status=status.HTTP_400_BAD_REQUEST)
        
        # Otimização: .exists() é mais rápido que carregar todos com .all()
        if request.user.following.filter(pk=pk).exists():
            request.user.following.remove(user_to_follow)
            return Response({"detail": "Deixou de seguir", "is_following": False}, status=status.HTTP_200_OK)
        
        request.user.following.add(user_to_follow)
        return Response({"detail": "Seguindo com sucesso", "is_following": True}, status=status.HTTP_201_CREATED)

class UserListView(generics.ListAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        # Retorna todos os usuários, exceto o que está fazendo a requisição
        return User.objects.exclude(id=self.request.user.id).order_by('-date_joined')
    
    def get_serializer_context(self):
        context = super().get_serializer_context()
        context.update({"request": self.request})
        return context
    