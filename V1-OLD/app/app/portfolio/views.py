from django.contrib.messages.views import SuccessMessageMixin
from django.shortcuts import render
from django.template import RequestContext
from django.urls import reverse_lazy
from django.views import generic as views

from app.portfolio.models import Contact


# Create your views here.

class Index(SuccessMessageMixin, views.CreateView):
    template_name = 'home/index.html'
    model = Contact
    fields = '__all__'
    success_message = 'The message was send'
    success_url = reverse_lazy('index')


def custom_page_not_found_view(request, exception):
    return render(request, 'home/notfound.html')
