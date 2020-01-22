import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { apiKey } from '../config/googleApi';

const mapStyles = {
    width: '100%',
    height: '100%',
};

function MapView(props) {
    const { google, initialLocation } = props;

    return (
        <Map
            google={google}
            zoom={15}
            style={mapStyles}
            initialCenter={{
                lat: initialLocation.lat,
                lng: initialLocation.lng
            }}
        />
    );
}

export default GoogleApiWrapper({
    apiKey: apiKey
})(MapView);