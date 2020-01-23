import React from 'react';

function Request(props) {
    const { request } = props;

    return (
        <div className='request-card container'>
            <span>
                {/* <img
                    src={require('../img/profile-pictures/' + request.firstName + '.jpg')}
                    alt={'Profile picture ' + request.firstName + ' ' + request.lastName}
                    className='avatar'
                /> */}
                {request.firstName} {request.lastName} ({request.age} years old)
            </span>
            <span>
                Type: {request.type}
            </span>
            <span>
                Distance: {request.distance}
            </span>
            <span>
                Walk time: {request.walkTime}
            </span>
            <span>
                Phone number: {request.phoneNumber}
            </span>
        </div>
    );
}

export default Request;