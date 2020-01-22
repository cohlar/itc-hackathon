import axios from 'axios';

export async function get_requests(lat, lon, up_to) {
    try {
        const response = await axios.get('http://192.168.0.20:5000/api/get_requests/'
                                    + lat + '/'
                                    + lon + '/'
                                    + up_to);
        console.log(response.data);
    }
    catch(error) {
        console.log(error);
    }
}