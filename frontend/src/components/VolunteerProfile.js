import React from 'react';

function VolunteerProfile(props) {
    const { volunteer } = props;

    return (
        <div className='request-card container'>
            <img
                src={require('../img/profile-pictures/' + volunteer.name + '.jpg')}
                alt={'Profile picture ' + volunteer.name}
                className='avatar'
            />
            <div className='request-details container'>
                <b>
                    {volunteer.name}
                </b>
                <span>
                    {volunteer.age} years old
                </span>
                <span>
                    Phone number: {volunteer.tel}
                </span>
            </div>
        </div>
    );
}

export default VolunteerProfile;