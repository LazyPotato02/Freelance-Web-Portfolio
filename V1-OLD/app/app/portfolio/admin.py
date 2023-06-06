from django.contrib import admin

from app.portfolio.models import Contact


# Register your models here.
@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ("topic", "budget", "email", "description")
