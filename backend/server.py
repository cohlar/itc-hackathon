import json

from flask import Flask
from flask_cors import CORS
from utils.MYDBUtils import DBConnector
from utils.mysql_con import sql
from utils.server import filter_server_log_messages


def create_app():
    app = Flask(__name__)
    CORS(app)
    return app


app = create_app()
filter_server_log_messages()


@app.route('/api/add_request/<senior_id>/<mission_name>/<lat>/<lon>', methods=['GET'])
def add_request(senior_id, mission_name, lat, lon):
    my_connector = DBConnector(sql["host"], sql["user"], sql["passwd"], sql["db"])
    my_connector.insert("requests", "senior_id, mission_name, status, latitude, longitude",
                        [[senior_id, mission_name, 0, lat, lon]])
    return "ok"


@app.route('/api/handle_request/<request_id>', methods=['GET'])
def handle_request(request_id):
    my_connector = DBConnector(sql["host"], sql["user"], sql["passwd"], sql["db"])
    my_connector.update("requests", "status", "1", "id=" + str(request_id))
    return "ok"


@app.route('/api/get_requests/<lat>/<lon>/<up_to>', methods=['GET'])
def get_requests(lat, lon, up_to):
    """Get requests near volunteer"""
    my_connector = DBConnector(sql["host"], sql["user"], sql["passwd"], sql["db"])
    keys = ['request_id', 'name', 'tel', 'age', 'mis_name', 'lat', 'lon']

    # distance is in m
    distance = f'(6371000 * acos(cos(radians({lat})) * cos(radians(latitude)) * cos(radians(longitude) - radians({lon}))' \
               f' + sin(radians({lat}))* sin(radians(latitude))))'
    data_list = my_connector.select(
        "requests.id, seniors.name, seniors.tel, YEAR(CURDATE()) - seniors.birth_year, requests.mission_name, "
        "requests.latitude, requests.longitude", "requests, seniors",
        f'{distance} < {up_to} and requests.senior_id = seniors.id and status = 0')
    data_dicts = [dict(zip(keys, item)) for item in data_list]
    return json.dumps(data_dicts)


if __name__ == '__main__':
    app.run(debug=True, use_reloader=True, host='0.0.0.0')
