import logging


def filter_server_log_messages():
    log = logging.getLogger('werkzeug')
    log.setLevel(logging.ERROR)