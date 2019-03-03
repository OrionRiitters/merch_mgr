import sqlite3

class Manage_DB():
"""
The methods of this class are used to query and modify the merch_sales database
using sqlite3.
"""

    MERCH_SALES = 'merch_sales'

    def open_close_connection(func):
    """
    A decorator to reduce redundant opening and closing of connections.
    """
        def new_function(*args):
            try:
                db = sqlite3.connect(MERCH_SALES)
                cur = db.cursor()

                func(*args)
            except sqlite3.Error:
                raise sqlite.Error
            finally:
                db.close()

    @open_close_connection
    def create_concert_table():
    """
    Creates concert table.
    """
            with db:
                cur.execute('CREATE TABLE IF NOT EXISTS concerts (venue text, city text, state text, date date)')

Manage_DB.create_concert_table
