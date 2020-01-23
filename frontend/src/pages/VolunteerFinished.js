import React from 'react';
import { NavLink } from 'react-router-dom';

function VolunteerFinished() {
    return (
        <div className='flex-col container' style={{textAlign: 'center'}}>
            <h1>
                Thank you very much for your help!
            </h1>
            <img
                src={require('../img/success.jpg')}
                alt='Thank you!'
                className='success-img'
            />
            <NavLink to='/volunteer'>
                Click here to help more seniors
            </NavLink>
        </div>
    );
}

export default VolunteerFinished;