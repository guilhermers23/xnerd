from rest_framework import serializers
from .models import User, Post

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
            'creation_at', 'likes_count', 'comments_count'
        ]

    def get_likes_count(self, obj):
        return obj.likes.count()

    def get_comments_count(self, obj):
        return obj.comments.count()
    


class UserProfileSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['name', 'profile_image', 'cover', 'birth_date', 'password']
        extra_kwargs = {
            'password': {'write_only': True, 'required': False},
            'name': {'required': False},
            'profile_image': {'required': False},
            'cover': {'required': False},
            'birth_date': {'required': False},
        }

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        if password:
            instance.set_password(password) # Criptografa a nova senha
        return super().update(instance, validated_data)
    