from rest_framework import serializers
from app.models import User, Post

# Serializer auxiliar para o autor
class AuthorSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'name', 'profile_image']

class PostSerializer(serializers.ModelSerializer):
    # Aqui a mágica acontece: o campo 'user' deixa de ser um ID 
    # e vira o objeto do AuthorSerializer
    user = AuthorSerializer(read_only=True)
    midia_url = serializers.ReadOnlyField(source='get_midia')
    is_liked = serializers.SerializerMethodField()
    likes_count = serializers.SerializerMethodField()
    comments_count = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = [
            'id', 'user', 'content', 'media_url', 
            'creation_at', 'likes_count', 'parent', 'comments_count', 'is_liked'
        ]

    def get_likes_count(self, obj):
        return obj.likes.count()

    def get_comments_count(self, obj):
        return obj.comments.count()

    def get_is_liked(self, obj):
        # Pega o usuário logado a partir do contexto da requisição (Token JWT)
        request = self.context.get('request')
        if request and request.user.is_authenticated:
            # Verifica se o usuário logado está na lista de likes deste post específico
            return obj.likes.filter(pk=request.user.pk).exists()
        return False    
    