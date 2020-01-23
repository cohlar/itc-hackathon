import React from 'react';

function LargeIcon(props) {
    const { src, alt } = props;

    return (
        <img
            src={src}
            alt={alt}
            className='select-profile-img'
        />
    );
}

export default LargeIcon;