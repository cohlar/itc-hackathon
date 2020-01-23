import axios from 'axios';

// localhost http://127.0.0.1:5000/
// amos http://192.168.0.20:5000/
const baseUrl = 'http://192.168.0.20:5000/';

export async function addRequest(senior_id, mission_name, lat, lon) {
    const apiPath = 'api/add_request'
    try {
        const response = await axios.get(
                                    baseUrl
                                    + apiPath + '/'
                                    + senior_id + '/'
                                    + mission_name + '/'
                                    + lat + '/'
                                    + lon);
        console.log(response.data);
    }
    catch(error) {
        console.log(error);
    }
}

export async function getRequests(lat, lon, up_to) {
    const apiPath = 'api/get_requests'
    try {
        const response = await axios.get(
                                    baseUrl
                                    + apiPath + '/'
                                    + lat + '/'
                                    + lon + '/'
                                    + up_to);
        return response.data;
    }
    catch(error) {
        console.log(error);
    }
}