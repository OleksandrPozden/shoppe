# Generated by Django 4.2 on 2023-04-13 17:35
from django.db import migrations
from django.db import models


class Migration(migrations.Migration):
    dependencies = [
        ("user", "0004_alter_user_username"),
    ]

    operations = [
        migrations.AlterModelManagers(
            name="user",
            managers=[],
        ),
        migrations.AlterField(
            model_name="user",
            name="username",
            field=models.CharField(max_length=150, unique=True),
        ),
    ]
