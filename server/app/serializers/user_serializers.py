from rest_framework import serializers
from app.models import User


class UserRegisterSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(required=True)

    class Meta:
        model = User
        fields = [
            'id',
            'username',
            'name',
            'email',
            'password',
            'profile_image',
            'cover',
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

        return super().update(instance, validated_data)


class UserProfileSerializer(serializers.ModelSerializer):
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
            'profile_image',
            'cover',
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
    