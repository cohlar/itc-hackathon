import React, { useContext } from 'react';
import Request from '../components/Request';
import MapNavigation from '../components/MapNavigation';
import AppContext from '../context/AppContext';
import { defaultLocation } from '../config/demoConstants';

function VolunteerAcceptedRequest() {
    const appContext = useContext(AppContext);

    return (
        <>
            <MapNavigation
                orig={defaultLocation}
                dest={{lat: appContext.selectedRequest.lat, lng: appContext.selectedRequest.lon}}
            />
            <Request request={appContext.selectedRequest} />
        </>
    );
}

export default VolunteerAcceptedRequest;