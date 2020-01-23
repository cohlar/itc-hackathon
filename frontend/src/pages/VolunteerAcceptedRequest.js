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
                dest={{lat: 32.056531, lng: 34.767743}}
            />
            <Request request={appContext.selectedRequest} />
        </>
    );
}

export default VolunteerAcceptedRequest;