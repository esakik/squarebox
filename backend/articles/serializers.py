from rest_framework import serializers

from .models import Article


class ArticleSerializer(serializers.ModelSerializer):
    user = serializers.ReadOnlyField(source='user.username')

    class Meta:
        model = Article
        fields = ('id', 'user', 'title', 'body', 'links', 'created_at', 'updated_at',)
