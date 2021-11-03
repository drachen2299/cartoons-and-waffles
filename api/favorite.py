from peewee import *

from db import DATABASE
from cartoon import Cartoon
from user import User

class Favorite(Model):
    cartoon = ForeignKeyField(Cartoon, backref='favorites')
    user = ForeignKeyField(User, backref='favorites')

    class Meta:
        database = DATABASE
