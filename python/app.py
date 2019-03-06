from flask import Flask, g, jsonify, request

app = Flask(__name__)



@app.route('/', methods=['GET'])
def handle_request():
    return 'index.html'
