# Generated by Django 3.0.8 on 2020-07-05 05:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('articles', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='article',
            name='body',
            field=models.TextField(blank=True),
        ),
    ]
