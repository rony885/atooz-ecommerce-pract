# Generated by Django 4.2.7 on 2024-09-26 09:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Product', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='product',
            name='colors',
            field=models.JSONField(blank=True, default=list, null=True),
        ),
        migrations.AlterField(
            model_name='product',
            name='sizes',
            field=models.JSONField(blank=True, default=list, null=True),
        ),
    ]
