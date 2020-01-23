import React from 'react';

function Request(props) {
    const { request } = props;

    return (
        <div className='request-card container'>
            <img
                src={require('../img/profile-pictures/' + request.name + '.jpg')}
                alt={'Profile picture ' + request.name}
                className='avatar'
            />
            <div className='request-details container'>
                <b>
                    {request.name}
                </b>
                <span>
                    {request.age} years old
                </span>
                <span>
                    Needs your help with {request.mis_name}
                </span>
                <span>
                    Estimated duration: 7 min
                </span>
                <span>
                    Phone number: {request.tel}
                </span>
            </div>
        </div>
    );
}

export default Request;