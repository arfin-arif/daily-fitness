
import React from 'react';
import './Workout.css'

const Workouts = (props) => {
    const { workout } = props;
    const { id, title, time, age, picture } = workout
    return (
        <div className='workout'>
            <img className='img' src={picture} alt="" />
            <div className='workout-info'>
                <p className='workout-name'>{title}</p>
                <p>For Age: {age} </p>
                <p>Time required: {time} min</p>

            </div>

            <button className='btn-add'>
                <p className='btn-text'>Add To List</p>

            </button>

        </div>
    );
};

export default Workouts;