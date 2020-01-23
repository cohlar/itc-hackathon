import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import Request from '../components/Request';
import MapNavigation from '../components/MapNavigation';
import AppContext from '../context/AppContext';
import { closeRequest } from '../lib/api';
import { defaultLocation } from '../config/demoConstants';

function VolunteerAcceptedRequest() {
    const appContext = useContext(AppContext);

    return (
        <>
            <MapNavigation
                orig={defaultLocation}
                dest={{ lat: appContext.selectedRequest.lat, lng: appContext.selectedRequest.lon }}
            />
            <Request request={appContext.selectedRequest} />
            <NavLink
                to='/volunteer/finished'
                className='validate-container'
                onClick={() => {
                    closeRequest(appContext.selectedRequest.request_id);
                    appContext.setSelectedRequest(null);
                }}
            >
                <img
                    src={require('../img/finish.png')}
                    alt='Finish'
                    className='validate-img'
                />
            </NavLink>
        </>
    );
}

export default VolunteerAcceptedRequest;