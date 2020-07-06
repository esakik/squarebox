from django.contrib import admin

from .models import Article


class ArticleAdmin(admin.ModelAdmin):
    filter_horizontal = ('links',)


admin.site.register(Article, ArticleAdmin)
