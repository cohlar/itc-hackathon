import React from 'react';
import { NavLink } from 'react-router-dom';
import LargeIcon from '../components/LargeIcon';

function SelectProfile() {
    return (
        <div className='flex-col container'>
            <NavLink to='/senior' className='select-profile-link'>
                <LargeIcon
                    src={require('../img/senior.jpg')}
                    alt='senior icon'
                    title='Senior'
                />
            </NavLink>
            <NavLink to='/volunteer' className='select-profile-link'>
                <LargeIcon
                    src={require('../img/volunteer.jpg')}
                    alt='volunteer icon'
                    title='Volunteer'
                />
            </NavLink>
        </div>
    );
}

export default SelectProfile;