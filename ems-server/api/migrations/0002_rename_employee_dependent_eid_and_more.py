# Generated by Django 4.0 on 2021-12-10 08:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='dependent',
            old_name='employee',
            new_name='eId',
        ),
        migrations.AlterField(
            model_name='employee',
            name='dateOfBirth',
            field=models.DateField(),
        ),
    ]