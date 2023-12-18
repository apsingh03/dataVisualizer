from django.db import models

# Create your models here.


class Data(models.Model):
    Day = models.DateTimeField()
    Age = models.CharField(max_length=200)
    Gender = models.CharField(max_length=200)
    A = models.IntegerField()
    B = models.IntegerField()
    C = models.IntegerField()
    D = models.IntegerField()
    E = models.IntegerField()
    F = models.IntegerField()
