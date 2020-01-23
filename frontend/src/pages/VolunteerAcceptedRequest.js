import React, { useContext } from 'react';
import Request from '../components/Request';
import AppContext from '../context/AppContext';

function VolunteerAcceptedRequest() {
    const appContext = useContext(AppContext);

    return (
        <>
            <div style={{ background: 'red', height: '70%', width: '100%' }}>
            </div>
            <Request request={appContext.selectedRequest} />
        </>
    );
}

export default VolunteerAcceptedRequest;