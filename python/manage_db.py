

import sqlite3
"""
These functions are used to query and modify the merch_sales database
using sqlite3.
"""

MERCH_SALES = 'merch_sales.db'

def open_close_connection(func):
    """
    A decorator to pull the opening and closing of connections outside of each function.
    """
    def decorated_function(*args):
        try:
            db = sqlite3.connect(MERCH_SALES)
            db.row_factory = sqlite3.Row # Allows access to column names in query results

            cur = db.cursor()
            cur.execute('PRAGMA foreign_keys = ON')

            returnable = func(db, cur, *args)

            db.commit()

            if returnable: # Returns query results if decorated function is a query
                return returnable

        except sqlite3.Error:
            raise sqlite3.Error
        finally:
            db.close()
    return decorated_function

@open_close_connection
def create_concert_table(db, cur):
    """
    Creates concert table.
    """
    with db:
        cur.execute('CREATE TABLE IF NOT EXISTS concerts ('
                    'venue   TEXT   NOT NULL,'
                    'city    TEXT   NOT NULL,'
                    'state   TEXT   NOT NULL,'
                    'date    DATE   NOT NULL'
                    ');')

@open_close_connection
def create_merchandise_table(db, cur):
    """
    Creates merchandise table.
    """
    with db:
        cur.execute('CREATE TABLE IF NOT EXISTS merchandise ('
                    'item    TEXT    NOT NULL,'
                    'price   REAL    NOT NULL,'
                    'tax     REAL    NOT NULL,'
                    'size    TEXT    NOT NULL,'
                    'stock   INTEGER NOT NULL'
                    ');')

@open_close_connection
def create_sales_table(db, cur):
    """
    Creates sales table.
    """
    with db:
        cur.execute('CREATE TABLE IF NOT EXISTS sales ('
                    'concerts_id     INTEGER   NOT NULL  UNIQUE,'
                    'merchandise_id  INTEGER   NOT NULL  UNIQUE,'
                    'amount_sold     INTEGER   NOT NULL,'
                    'FOREIGN KEY(concerts_id) REFERENCES concerts(rowid),'
                    'FOREIGN KEY(merchandise_id)  REFERENCES merchandise(rowid)'
                    ');')

@open_close_connection
def insert_row_concerts(db, cur, values):
    """
    Inserts a new row into the concerts table.
    """
    with db:
        cur.execute('INSERT INTO concerts'
                    '  (venue, city, state, date)'
                    'VALUES'
                    '  (?, ?, ?, ?)',
                    (values['venue'], values['city'], values['state'], values['date']))

@open_close_connection
def insert_row_merchandise(db, cur, values):
    """
    Inserts a new row into merchandise table.
    """
    with db:
        cur.execute('INSERT INTO merchandise'
                    '  (item, price, tax, size, stock)'
                    'VALUES'
                    '  (?, ?, ?, ?, ?)',
        (values['item'], values['price'], values['tax'],
         values['size'], values['stock']))

@open_close_connection
def add_sales(db, cur, values):
    """
    Adds a new row to sales if it doesn't yet exist, otherwise updates the row.
    """
    with db:
        cur.execute('SELECT rowid '
                    'FROM concerts '
                    'WHERE concerts.date = (?)',
                    [values['date']])
        r1 = cur.fetchone()
        concerts_row_id = r1['rowid']

        cur.execute('SELECT rowid '
                    'FROM merchandise '
                    'WHERE merchandise.item = (?)',
                    [values['item']])
        r2 = cur.fetchone()
        merchandise_row_id = r2['rowid']


        if select_sales_item_concert(values):
            cur.execute('UPDATE sales '
                        'SET amount_sold = amount_sold + (?) '
                        'WHERE concerts_id = (?)'
                        '  AND merchandise_id = (?)',
                        (values['amount_sold'], concerts_row_id, merchandise_row_id))
        else:
            cur.execute('INSERT INTO sales '
                        '  (concerts_id, merchandise_id, amount_sold) '
                        'VALUES '
                        '(?, ?, ?)',
                        (concerts_row_id, merchandise_row_id, values['amount_sold']))


@open_close_connection
def select_sales_item_concert(db, cur, values):
    """
    Selects amount_sold from specific item on specific concert day.
    """
    with db:
        cur.execute('SELECT amount_sold '
                    'FROM sales'
                    '  INNER JOIN concerts'
                    '    ON sales.concerts_id = concerts.rowid'
                    '  INNER JOIN merchandise'
                    '    ON sales.merchandise_id = merchandise.rowid '
                    'WHERE concerts.date = (?)'
                    '  AND merchandise.item = (?);',
                    (values['date'], values['item']))
        row = cur.fetchone()

    if row:
        return row['amount_sold']
    else:
        return None
