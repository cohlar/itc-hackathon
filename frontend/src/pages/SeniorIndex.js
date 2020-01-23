import React, { useState } from 'react';
import RoundIcon from '../components/RoundIcon';
import { helpCategories } from '../config/demoConstants';
import { addRequest } from '../lib/api';

function SeniorIndex() {
    const [selected, setSelected] = useState(false);

    return (
        <div className='flex-row container'>
            {!selected &&
                helpCategories.map(cat =>
                    <RoundIcon
                        key={cat}
                        src={require('../img/help-categories/' + cat + '.jpg')}
                        alt={cat}
                        onClick={() => {
                            addRequest(3, cat, 32.052127, 34.770891);

                        }}
                    />
                )
            }
        </div>
    );
}

export default SeniorIndex;