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
    # Validamos o email para ser obrigatório e único
    email = serializers.EmailField(required=True)

    class Meta:
        model = User
        fields = ['id', 'username', 'name', 'email', 'password', 'profile_image', 'cover', 'birth_date']
        extra_kwargs = {
            'username': {'required': True},
            'password': {'write_only': True}
        }

    def validate_email(self, value):
        """Verifica se o e-mail já está cadastrado."""
        if User.objects.filter(email__iexact=value).exists():
            raise serializers.ValidationError("Este e-mail já está em uso.")
        return value

    def create(self, validated_data):
        """Cria o usuário usando o método correto do Manager."""
        # O create_user cuida da criptografia da senha automaticamente
        user = User.objects.create_user(**validated_data)
        return user

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)
        if password:
            instance.set_password(password) # Criptografa a nova senha
        return super().update(instance, validated_data)

    def create(self, validated_data):
        # O create_user do AbstractUser precisa do username explicitamente
        # ou descompactado do dicionário validated_data
        user = User.objects.create_user(**validated_data)
        return user
