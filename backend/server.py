import logging
import mysql.connector
from flask import Flask, jsonify
from flask_cors import CORS
from utils.server import filter_server_log_messages
from utils.mysql_con import sql
import json
from utils.MYDBUtils import DBConnector, DBCreator


def create_app():
    app = Flask(__name__)
    CORS(app)
    return app


app = create_app()
filter_server_log_messages()



@app.route('/api/get_requests/<lat>/<lon>/<up_to>', methods=['GET'])
def get_requests(lat, lon, up_to):
    """Get requests near volunteer"""
    my_connector = DBConnector(sql["host"], sql["user"], sql["password"], sql["database"])

    distance = f'(6371000 * acos(cos(radians({lat})) * cos(radians(latitude)) * cos(radians(longitude) - radians({lon}))' \
               f' + sin(radians({lat}))* sin(radians(latitude))))'
    data = my_connector.select("seniors.tel, YEAR(CURDATE()) - seniors.birth_year, requests.mission_id, "
                               "requests.latitude, requests.longitude", "requests, seniors",
                               f'{distance} < {up_to} and requests.senior_id = seniors.id')
    json_string = json.dumps(data)
    return json_string


if __name__ == '__main__':
    app.run(debug=True, use_reloader=True, host='0.0.0.0')