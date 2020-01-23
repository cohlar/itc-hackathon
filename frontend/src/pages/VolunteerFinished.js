import React from 'react';
import { NavLink } from 'react-router-dom';

function VolunteerFinished() {
    return (
        <>
            <h1>
                Thank you very much for your help!
            </h1>
            <img />

            <NavLink to='/volunteer'>
                Click here to help more seniors
            </NavLink>
        </>
    );
}

export default VolunteerFinished;