from django.shortcuts import render

# Create your views here.
from rest_framework import generics, permissions, status
from rest_framework.response import Response
from rest_framework.views import APIView
from django.contrib.auth import get_user_model
from django.db.models import Q
from django.shortcuts import get_object_or_404
from app.models import Post
from app.serializers import UserProfileSerializer, UserRegisterSerializer, PostSerializer

User = get_user_model()

# --- AUTENTICAÇÃO E REGISTRO ---
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = [permissions.AllowAny] # Permite que qualquer um se cadastre
    serializer_class = UserRegisterSerializer # Usaremos o serializer de perfil para criar
    
    
# --- PERFIL (REQUISITO: ALTERAR FOTO, NOME E SENHA) ---
class MeView(generics.RetrieveUpdateAPIView):
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_object(self):
        return self.request.user # Retorna o usuário logado para edição
        
        
# --- SERGUIR USUÁRIOS ---
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

# --- LISTAR USUÁRIOS ---
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
    