import React, { useEffect, useState } from 'react';

import './Body.css'
const Body = () => {

    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch('assignment.json')
            .then(res => res.json())
            .then(data => setWorkouts(data))
    }, [])

    return (
        <div className='main-container'>
            <div className="workout-container">

                <h2>Workout Container</h2>

            </div>
            <div className="profile-container">
                <h1>Your Profile Here</h1>
                <p>Arfin Arif </p>
            </div>
        </div>
    );
};

export default Body;