from .views import PostList
from django.urls import include, path


app_name = 'post'

urlpatterns = [
    path('api/', PostList.as_view(), name='listpost'),
]
