from flask import request

def validate_json(form):

    values = {
        'header': form['header'],
        'venue': form['venue[value]'],
        'city': form['city[value]'],
        'state': form['state[value]'],
        'date': form['date[value]']
    }
