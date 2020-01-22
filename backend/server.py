import logging
from flask import Flask, jsonify
from flask_cors import CORS
from utils.server import filter_server_log_messages


def create_app():
    app = Flask(__name__)
    CORS(app)
    return app


app = create_app()
filter_server_log_messages()


@app.route('/api/users/<int:id>', methods=['GET'])
def get_user(id):
    user = {}
    #TODO: get user from DB
    return jsonify(user)


if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)