# Generated by Django 4.1.7 on 2023-02-26 13:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('portfolio', '0002_alter_contact_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='contact',
            name='budget',
            field=models.PositiveIntegerField(),
        ),
        migrations.AlterField(
            model_name='contact',
            name='description',
            field=models.TextField(max_length=1000),
        ),
    ]
