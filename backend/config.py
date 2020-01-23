tables = {
    "seniors": "CREATE TABLE seniors"
               "(id INT AUTO_INCREMENT PRIMARY KEY, "
               "tel VARCHAR(255), "
               "name VARCHAR(255), "
               "birth_year INT(4))",

    "requests": "CREATE TABLE requests"
                "(id INT AUTO_INCREMENT PRIMARY KEY,"
                "senior_id INT,"
                "mission_name VARCHAR(255),"
                "status INT,"
                "request_time TIME,"
                "mission_start TIME,"
                "mission_end TIME,"
                "longitude DOUBLE,"
                "latitude DOUBLE)"

}
