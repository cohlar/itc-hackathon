import React from 'react';

function LargeIcon(props) {
    const { src, alt, title } = props;

    return (
       <>
            <img
                src={src}
                alt={alt}
                className='select-profile-img'
            />
            <h1>
                {title}
            </h1>
        </>
    );
}

export default LargeIcon;