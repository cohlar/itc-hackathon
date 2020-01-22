import logging

import mysql.connector
from flask import Flask, jsonify
from flask_cors import CORS
import utils.server
from utils.server import filter_server_log_messages
from utils.mysql_con import con_dict


def create_app():
    app = Flask(__name__)
    CORS(app)
    return app


app = create_app()
filter_server_log_messages()


@app.route('/api/users/<int:id>', methods=['GET'])
def get_user(id):
    user = {}
    mydb = mysql.connector.connect(host=con_dict['host'],
                                   user=con_dict['user'],
                                   password=con_dict['password'],
                                   database=con_dict['database'])

    mycursor = mydb.cursor()
    mycursor.execute("SELECT * FROM USER")
    mycursor.fetchall()

    return jsonify(user)


if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)