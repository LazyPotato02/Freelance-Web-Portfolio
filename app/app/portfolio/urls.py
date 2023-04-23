from django.urls import path

from app.portfolio.views import Index

urlpatterns = [
    path('', Index.as_view(), name='index'),
    # path('contact/', Contacts.as_view(), name='contact'),

]
