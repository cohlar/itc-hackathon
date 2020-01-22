import React from 'react';
import RoundIcon from '../components/RoundIcon';
import { helpCategories } from '../config/demoConstants';

function SeniorIndex() {
    return (
        <div className='flex-row container'>
            {helpCategories.map(cat =>
                <RoundIcon
                    key={cat}
                    src={require('../img/help-categories/' + cat + '.jpg')}
                    alt={cat}
                />
            )}
        </div>
    );
}

export default SeniorIndex;