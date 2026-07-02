from rest_framework import serializers
from app.models import User


class UserRegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)
    
    # Sobrescrevemos os campos para lerem os métodos inteligentes (@property) do seu Model
    profile_image = serializers.ReadOnlyField(source='get_profile_image')
    cover = serializers.ReadOnlyField(source='get_cover')

    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'name',
            'email',
            'password',
            'profile_image',       # Retorna a URL final tratada (Apenas Leitura)
            'cover',               # Retorna a URL final tratada (Apenas Leitura)
            'profile_image_url',   # Campo que o React enviará no cadastro/update
            'cover_url',           # Campo que o React enviará no cadastro/update
            'birth_date'
        ]

        extra_kwargs = {
            'username': {'required': True},
            'password': {'write_only': True}
        }

    def validate_email(self, value):
        if User.objects.filter(email__iexact=value).exists():
            raise serializers.ValidationError(
                "Este e-mail já está em uso."
            )
        return value

    def create(self, validated_data):
        return User.objects.create_user(**validated_data)

    def update(self, instance, validated_data):
        password = validated_data.pop('password', None)

        if password:
            instance.set_password(password)
            instance.save()

        return super().update(instance, validated_data)


class UserProfileSerializer(serializers.ModelSerializer):
    # Sobrescrevemos para garantir que o perfil sempre retorne uma URL válida ou fallback
    profile_image = serializers.ReadOnlyField(source='get_profile_image')
    profile_image_url = serializers.URLField(required=True, allow_blank=True)
    cover = serializers.ReadOnlyField(source='get_cover')
    cover_url = serializers.URLField(required=True, allow_blank=True)
    is_following = serializers.SerializerMethodField()
    followers_count = serializers.SerializerMethodField()
    following_count = serializers.SerializerMethodField()

    class Meta:
        model = User

        fields = [
            'id',
            'name',
            'username',
            'email',
            'profile_image',       # URL final pronta para o <img src="..." />
            'cover',               # URL final pronta para a capa
            'profile_image_url',   # Link bruto salvo no banco (Leitura/Escrita)
            'cover_url',           # Link bruto salvo no banco (Leitura/Escrita)
            'is_following',
            'followers_count',
            'following_count'
        ]

    def get_is_following(self, obj):
        request = self.context.get('request')

        if request and request.user.is_authenticated:
            return obj.followers.filter(
                pk=request.user.pk
            ).exists()

        return False

    def get_followers_count(self, obj):
        return obj.followers.count()

    def get_following_count(self, obj):
        return obj.following.count()
    