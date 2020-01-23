import axios from 'axios';

// amos http://192.168.0.20:5000/
const baseUrl = 'http://127.0.0.1:5000/'

export async function getRequests(lat, lon, up_to) {
    const apiPath = '/api/get_requests'
    try {
        const response = await axios.get(
                                    baseUrl
                                    + apiPath + '/'
                                    + lat + '/'
                                    + lon + '/'
                                    + up_to);
        console.log(response.data);
    }
    catch(error) {
        console.log(error);
    }
}