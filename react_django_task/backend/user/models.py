from django.db import models


# Create your models here.
class User(models.Model):
    username = models.CharField(max_length=60)
    created = models.DateField(auto_created=True)
    group = models.ForeignKey('Group', on_delete=models.CASCADE)

    def __str__(self):
        return self.username


class Group(models.Model):
    id = models.AutoField(primary_key=True)
    name = models.CharField(max_length=60)
    description = models.CharField(max_length=500)

    def __str__(self):
        return self.name
