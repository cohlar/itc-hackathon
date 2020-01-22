import React from 'react';
import RoundIcon from '../components/RoundIcon';

const helpCategories = [
    'bag-carrying',
    'company',
    'housekeeping',
    'pet-care',
    'technology',
    'walking'
]

function SeniorIndex() {
    return (
        <div className='flex-row container'>
            {helpCategories.map(cat =>
                <RoundIcon
                    src={require('../img/help-categories/' + cat + '.jpg')}
                    alt={cat}
                />
            )}
        </div>
    );
}

export default SeniorIndex;