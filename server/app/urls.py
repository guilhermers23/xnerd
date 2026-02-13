from django.urls import path
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from .views import (
    RegisterView, MeView, PostListCreateView, 
    PostDetailView, LikePostView, FollowUserView, NewsFeedView
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
    path('users/<int:pk>/follow/', FollowUserView.as_view(), name='user_follow'),

    # Posts e Interações (Requisito: Curtidas e Comentários)
    path('posts/', PostListCreateView.as_view(), name='posts_list'),
    path('posts/<int:pk>/', PostDetailView.as_view(), name='post_detail'),
    path('posts/<int:pk>/like/', LikePostView.as_view(), name='post_like'),
]
