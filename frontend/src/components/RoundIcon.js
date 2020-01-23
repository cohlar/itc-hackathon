import React from 'react';

function RoundIcon(props) {
    const { src, alt, onClick } = props;

    return (
        <>
            <img
                src={src}
                alt={alt}
                className='help-category-img'
                onClick={onClick}
            />
            {/* <h3>
                {alt}
            </h3> */}
        </>
    );
}

export default RoundIcon;