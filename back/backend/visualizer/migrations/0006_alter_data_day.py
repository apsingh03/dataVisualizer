# Generated by Django 4.2.8 on 2023-12-17 07:02

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('visualizer', '0005_alter_data_day'),
    ]

    operations = [
        migrations.AlterField(
            model_name='data',
            name='Day',
            field=models.DateTimeField(),
        ),
    ]