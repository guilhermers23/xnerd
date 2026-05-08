from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from app.views import (
    RegisterView, 
    MeView, 
    PostListCreateView,
    UserPostsView,
    PostDetailView, 
    LikePostView, 
    FollowUserView, 
    NewsFeedView, 
    UserListView, 
    CommentListView
)

urlpatterns = [
    # Autenticação (Requisito: Cadastro e Login)
    path('auth/register/', RegisterView.as_view(), name='register'),
    path('auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),

    # Perfil (Requisito: Alterar foto, nome, etc.)
    path('me/', MeView.as_view(), name='my_profile'),
    # Social e Feed (Requisito: Seguir e ver apenas seguidos)
    path('feed/', NewsFeedView.as_view(), name='news_feed'),
    path('posts/user/<str:username>/', UserPostsView.as_view(), name='user-posts'),
    
    path('users/', UserListView.as_view(), name='user-list'),
    path('users/<int:pk>/follow/', FollowUserView.as_view(), name='user_follow'),

    # Posts e Interações (Requisito: Curtidas e Comentários)
    path('posts/', PostListCreateView.as_view(), name='posts_list'),
    path('posts/<int:pk>/', PostDetailView.as_view(), name='post_detail'),
    path('posts/<int:pk>/like/', LikePostView.as_view(), name='post_like'),
    # Rota para criar um comentário ou listar comentários de um post
    path('posts/<int:pk>/comments/', CommentListView.as_view(), name='post-comments'),
]
