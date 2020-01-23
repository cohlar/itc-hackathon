import React, { useState, useContext, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import MapView from '../components/MapView';
import Request from '../components/Request';
import AppContext from '../context/AppContext';
import { getRequests, handleRequest } from '../lib/api';
import { defaultLocation } from '../config/demoConstants';

function VolunteerIndex() {
    const appContext = useContext(AppContext);
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        async function fetchRequests() {
            const response = await getRequests(defaultLocation.lat, defaultLocation.lng, 1000);
            setRequests(response);
        }
        fetchRequests();
    }, [])

    return (
        <>
            <MapView
                initialLocation={appContext.currentLocation}
                requests={requests}
            />
            {/* <div style={{ background: 'red', height: '70%', width: '100%' }}>
            </div> */}
            {appContext.selectedRequest &&
                <>
                    <Request request={appContext.selectedRequest} />
                    <NavLink
                        to='volunteer/accepted-request'
                        className='validate-container'
                        onClick={() => handleRequest(appContext.selectedRequest.request_id)}
                    >
                        <img
                            src={require('../img/validate.gif')}
                            alt='Validate'
                            className='validate-img'
                        />
                    </NavLink>
                </>
            }
        </>
    );
}

export default VolunteerIndex;