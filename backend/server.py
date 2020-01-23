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
    my_connector = DBConnector(sql["host"], sql["user"], sql["passwd"], sql["db"])
    keys = ['tel', 'age', 'mis_id', 'lat', 'lon']

    # distance is in m
    distance = f'(6371000 * acos(cos(radians({lat})) * cos(radians(latitude)) * cos(radians(longitude) - radians({lon}))' \
               f' + sin(radians({lat}))* sin(radians(latitude))))'
    data_list = my_connector.select("seniors.tel, YEAR(CURDATE()) - seniors.birth_year, requests.mission_id, "
                                    "requests.latitude, requests.longitude", "requests, seniors",
                                    f'{distance} < {up_to} and requests.senior_id = seniors.id')
    data_dicts = [dict(zip(keys, item)) for item in data_list]
    return json.dumps(data_dicts)


if __name__ == '__main__':
    app.run(debug=True, use_reloader=True)