from django.shortcuts import render
from rest_framework.pagination import PageNumberPagination
# Create your views here.
from .serializers import PostSerializer
from .models import Post
from rest_framework.generics import ListCreateAPIView


class PostList(ListCreateAPIView):
    serializer_class = PostSerializer
    queryset = Post.objects.all()
    pagination_class = PageNumberPagination
