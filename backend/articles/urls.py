from rest_framework.routers import SimpleRouter

from .views import ArticleViewSet

router = SimpleRouter()
router.register('', ArticleViewSet, basename='article')

urlpatterns = router.urls
