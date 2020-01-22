import React from 'react';
import { NavLink } from 'react-router-dom';

function SelectProfile() {
    return (
        <>
            <NavLink to='/senior' className='select-profile-link'>
                <img
                    src={require('../img/senior.png')}
                    alt='senior icon'
                    className='select-profile-img'
                />
            </NavLink>
            <NavLink to='/volunteer' className='select-profile-link'>
                <img
                    src={require('../img/volunteer.png')}
                    alt='volunteer icon'
                    className='select-profile-img'
                />
            </NavLink>
        </>
    );
}

export default SelectProfile;