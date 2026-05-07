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
    
    likes_count = serializers.SerializerMethodField()
    comments_count = serializers.SerializerMethodField()

    class Meta:
        model = Post
        fields = [
            'id', 'user', 'content', 'midia', 
            'creation_at', 'likes_count', 'parent', 'comments_count'
        ]

    def get_likes_count(self, obj):
        return obj.likes.count()

    def get_comments_count(self, obj):
        return obj.comments.count()
    