from peewee import *

from db import DATABASE

class Cartoon(Model):
    name = CharField()
    genre = CharField()
    main_character = CharField()

    class Meta:
        database = DATABASE

        