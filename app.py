from flask import Flask, g, jsonify, request, send_from_directory, send_file

app = Flask(__name__)


@app.route('/', methods=['GET'])
def serve_index():
    return send_from_directory(directory='static', filename='index.html')

@app.route('/js/<file>', methods=['GET'])
def serve_js(file):
    return send_from_directory('js', file)

@app.route('/assets/<file>', methods=['GET'])
def serve_css(file):
    return send_from_directory('assets', file)

@app.route('/submit', methods=['POST'])
def serve_json():
    return None
