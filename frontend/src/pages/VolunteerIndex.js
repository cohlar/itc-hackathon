import React from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react';
import { apiKey } from '../config/googleApi';

function VolunteerIndex(props) {
    const mapStyles = {
        width: '100%',
        height: '100%',
    };

    return (
        <Map
            google={props.google}
            zoom={15}
            style={mapStyles}
            initialCenter={{ lat: 32.053093, lng: 34.772189 }}
        />
    );
}

export default GoogleApiWrapper({
    apiKey: apiKey
})(VolunteerIndex);