import React, { useContext } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { apiKey } from '../config/googleApi';
import AppContext from '../context/AppContext';

const mapStyles = {
    width: '100%',
    height: '100%',
};

function MapView(props) {
    const { google, initialLocation, requests = [], volunteer = null } = props;
    const appContext = useContext(AppContext);

    return (
        <Map
            google={google}
            zoom={15}
            style={mapStyles}
            initialCenter={{
                lat: initialLocation.lat,
                lng: initialLocation.lng
            }}
        >

            {requests &&
                requests.map(request =>
                    <Marker
                        onClick={() => appContext.setSelectedRequest(request)}
                        position={{ lat: request.lat, lng: request.lon }}
                        key={request.request_id}
                    />
                )
            }

            {volunteer &&
                <Marker
                    position={{ lat: volunteer.lat, lng: volunteer.lng }}
                />
            }

        </Map>
    );
}

export default GoogleApiWrapper({
    apiKey: apiKey
})(MapView);