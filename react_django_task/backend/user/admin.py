from django.contrib import admin
from .models import User, Group


# Register your models here.


class UserAdmin(admin.ModelAdmin):
    list_display = ('username', 'created', 'group')


class GroupAdmin(admin.ModelAdmin):
    list_display = ('id', 'name', 'description')


admin.site.register(User, UserAdmin)
admin.site.register(Group, GroupAdmin)
