from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response

from .models import Article
from .serializers import ArticleSerializer


class ArticleViewSet(viewsets.ModelViewSet):
    queryset = Article.objects.all()
    serializer_class = ArticleSerializer
    permission_classes = (permissions.IsAdminUser,)

    @action(methods=['GET'], detail=False, permission_classes=(permissions.IsAuthenticatedOrReadOnly,))
    def my_list(self, request):
        return Response(
            [
                {
                    'id': article.id,
                    'title': article.title,
                    'body': article.body,
                    'links': [link.id for link in article.links.all()],
                    'created_at': article.created_at,
                    'updated_at': article.updated_at
                } for article in self.get_queryset() if article.user == self.request.user
            ]
        )

    @action(methods=['GET'], detail=True, permission_classes=(permissions.IsAuthenticatedOrReadOnly,))
    def details(self, request, pk=None):
        return Response(
            [
                {
                    'id': article.id,
                    'title': article.title,
                    'body': article.body,
                    'links': [link.id for link in article.links.all()],
                    'created_at': article.created_at,
                    'updated_at': article.updated_at
                } for article in self.get_queryset() if article.user == self.request.user and pk == str(article.id)
            ]
        )
