sql = {
    'host': 'localhost',
    'user': 'root',
    'password': 'password',
    'database': 'Limited_Helper'
}

from config import tables
from utils.MYDBUtils import DBConnector, DBCreator

DBCreator.start_db(sql["host"], sql["user"], sql["password"], sql["database"], tables)