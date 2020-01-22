import React from 'react';

const helpCategories = [
    'carry-bags',
    'company',
    'housekeep',
    'pet-care',
    'technology',
    'walk'
]

function SeniorHelpCategories() {
    return (
        <>
            {helpCategories.map(cat =>
                <img key={cat} src={} alt={cat} className='help-category-img' />
            )}
        </>
    );
}

export default SeniorHelpCategories;