from django.db import models


# Create your models here.
class Contact(models.Model):
    topic = models.CharField(
        max_length=256,
        null=False,
        blank=False,
    )
    budget = models.PositiveIntegerField(blank=True,null=True,verbose_name='Budget lv.')
    email = models.EmailField(
        null=False,
        blank=False,
    )
    description = models.TextField(
        max_length=1000,
        null=False,
        blank=False,
    )

