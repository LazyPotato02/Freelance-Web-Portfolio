# Generated by Django 4.1.7 on 2023-02-26 13:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='description',
            field=models.TextField(max_length=256),
        ),
    ]
