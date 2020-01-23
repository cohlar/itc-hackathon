import React, { useState, useEffect } from 'react';
import RoundIcon from '../components/RoundIcon';
import VolunteerProfile from '../components/VolunteerProfile';
import { helpCategories } from '../config/demoConstants';
import { addRequest, getStatus } from '../lib/api';

function SeniorIndex() {
    const [requestId, setRequestId] = useState(null);
    const [matchedVolunteer, setMatchedVolunteer] = useState(null);

    useEffect(() => {
        let interval;
        if (requestId && !matchedVolunteer) {
            interval = setInterval(async () => {
                const response = await getStatus(requestId);
                if (response.status > 0) {
                    setMatchedVolunteer(response)
                }
            }, 1000)
        }
        if (matchedVolunteer) {
            clearInterval(interval);
        }
        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    }, [requestId, matchedVolunteer])

    return (
        <div className='flex-row container'>
            {!requestId &&
                <>
                    <h1>I want help with...</h1>
                    {helpCategories.map(cat =>
                        <RoundIcon
                            key={cat}
                            src={require('../img/help-categories/' + cat + '.png')}
                            alt={cat}
                            onClick={async () => {
                                const requestId = await addRequest(3, cat, 32.054063, 34.769525);
                                setRequestId(requestId);
                            }}
                        />
                    )}
                </>
            }

            {requestId && !matchedVolunteer &&
                <div style={{ textAlign: "center" }}>
                    <img
                        src={require('../img/loader.gif')}
                        alt='Loading...'
                    />
                    <h3>We are looking for a volunteer...</h3>
                </div>
            }

            {requestId && matchedVolunteer &&
                <VolunteerProfile
                    volunteer={matchedVolunteer}
                />
            }
        </div>
    );
}

export default SeniorIndex;