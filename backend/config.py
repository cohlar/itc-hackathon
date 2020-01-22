tables = {
    "seniors": "CREATE TABLE seniors"
               "(id INT AUTO_INCREMENT PRIMARY KEY, "
               "name VARCHAR(255), "
               "birth_year INT(4))",

    "missions": "CREATE TABLE missions"
                "(id INT AUTO_INCREMENT PRIMARY KEY,"
                "name VARCHAR(255))",

    # "seniors_missions": "CREATE TABLE seniors_missions"
    #                     "(id INT AUTO_INCREMENT PRIMARY KEY,"
    #                     "senior_id INT,"
    #                     "mission_id INT,"
    #                     "FOREIGN KEY(senior_id) REFERENCES seniors(id),"
    #                     "FOREIGN KEY(mission_id) REFERENCES missions(id))",

    "requests": "CREATE TABLE requests"
                "(id INT AUTO_INCREMENT PRIMARY KEY,"
                "senior_id INT,"
                "mission_id INT,"
                "status INT,"
                "request_time TIME,"
                "mission_start TIME,"
                "mission_end TIME,"
                "longitude DOUBLE,"
                "latitude DOUBLE,"
                "FOREIGN KEY(senior_id) REFERENCES seniors(id),"
                "FOREIGN KEY(mission_id) REFERENCES missions(id))",

    # "physical_issues": "CREATE TABLE physical_issues"
    #                    "(id INT AUTO_INCREMENT PRIMARY KEY,"
    #                    "name VARCHAR(255))",

    # "physical_issues_seniors": "CREATE TABLE physical_issues_seniors"
    #                            "(id INT AUTO_INCREMENT PRIMARY KEY,"
    #                            "physical_issue_id INT,"
    #                            "senior_id INT)",

}
