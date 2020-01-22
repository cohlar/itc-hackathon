import React from 'react';

function RoundIcon(props) {
    const { src, alt } = props;

    return (
        <img
            src={src}
            alt={alt}
            className='help-category-img'
        />
    );
}

export default RoundIcon;