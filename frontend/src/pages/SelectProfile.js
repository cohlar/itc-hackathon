import React from 'react';
import { NavLink } from 'react-router-dom';
import LargeIcon from '../components/LargeIcon';

function SelectProfile() {
    return (
        <div className='flex-col container'>
            <h1>I am a...</h1>
            <NavLink to='/senior' className='select-profile-link'>
                <LargeIcon
                    src={require('../img/senior.png')}
                    alt='senior icon'
                />
            </NavLink>
            <NavLink to='/volunteer' className='select-profile-link'>
                <LargeIcon
                    src={require('../img/volunteer.png')}
                    alt='volunteer icon'
                />
            </NavLink>
        </div>
    );
}

export default SelectProfile;