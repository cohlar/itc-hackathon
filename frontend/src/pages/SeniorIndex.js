import React, { useState, useEffect } from 'react';
import RoundIcon from '../components/RoundIcon';
import { helpCategories } from '../config/demoConstants';
import { addRequest } from '../lib/api';

function SeniorIndex() {
    const [selected, setSelected] = useState(false);
    const [matchedVolunteer, setMatchedVolunteer] = useState(null);

    useEffect(() => {
        let interval;
        if (selected && !matchedVolunteer) {
            interval = setInterval(() => {
                setMatchedVolunteer(!matchedVolunteer)
            }, 1000)
        }
        if (matchedVolunteer) {
            clearInterval(interval);
        }
        console.log(1)
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [selected, matchedVolunteer])

    return (
        <div className='flex-row container'>
            {!selected &&
                <>
                    <h1>I want help with...</h1>
                    {helpCategories.map(cat =>
                        <RoundIcon
                            key={cat}
                            src={require('../img/help-categories/' + cat + '.png')}
                            alt={cat}
                            onClick={() => {
                                addRequest(3, cat, 32.054063, 34.769525);
                                setSelected(true);
                            }}
                        />
                    )}
                </>
            }

            {selected && !matchedVolunteer &&
                <div style={{textAlign: "center"}}>
                    <img
                        src={require('../img/loader.gif')}
                        alt='Loading...'
                    />
                    <h3>We are looking for a volunteer...</h3>
                </div>
            }

            {selected && matchedVolunteer &&
                <div>
                    Show volunteer details
                </div>
            }
        </div>
    );
}

export default SeniorIndex;