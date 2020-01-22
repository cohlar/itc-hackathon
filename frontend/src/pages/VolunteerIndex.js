import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import MapView from '../components/MapView';
import Request from '../components/Request';
import AppContext from '../context/AppContext';

function VolunteerIndex() {
    const appContext = useContext(AppContext);

    return (
        <>
            {/* <MapView initialLocation={appContext.currentLocation} /> */}
            <div style={{ background: 'red', height: '70%', width: '100%' }}>
            </div>
            <Request request={appContext.selectedRequest} />
            <NavLink to='volunteer/accepted-request'>
                <button>
                    Validate
                </button>
            </NavLink>
        </>
    );
}

export default VolunteerIndex;