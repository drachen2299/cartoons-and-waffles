from peewee import PostgresqlDatabase

DATABASE = PostgresqlDatabase('cartoons_and_waffles_db')

def initialize(tables):
    DATABASE.connect()
    DATABASE.create_tables(tables, safe=True)
    print("Tables created successfully!")
    DATABASE.close()