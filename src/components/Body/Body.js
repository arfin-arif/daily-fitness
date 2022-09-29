import React, { useEffect, useState } from 'react';
import Workouts from '../Workouts/Workouts';
import './Body.css'
const Body = () => {

    const [workouts, setWorkouts] = useState([]);

    useEffect(() => {
        fetch('workout.json')
            .then(res => res.json())
            .then(data => setWorkouts(data))
    }, [])

    return (
        <div className='main-container'>
            <div className="workout-container">

                {
                    workouts.map(workout => <Workouts workout={workout}
                        key={workout.id}      ></Workouts>)
                }

            </div>
            <div className="profile-container">
                <h1>Your Profile Here</h1>
                <p>Arfin Arif </p>
            </div>
        </div>
    );
};

export default Body;