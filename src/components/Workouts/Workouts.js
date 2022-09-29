
import React from 'react';
import './Workout.css'

const Workouts = (props) => {
    const { workout, handelAddToCart: handelAddToList } = props;
    const { id, title, time, info, age, picture } = workout
    return (
        <div className='workout'>
            <img className='img' src={picture} alt="" />
            <div className='workout-info'>
                <p className='workout-name'>{title}</p>
                <p>{info} </p>
                <p>For Age: <span className='span-text'> {age}</span> </p>
                <p>Time required: <span className='span-text'>  {time}</span> min</p>

            </div>

            <button className='btn-add' onClick={() => handelAddToList(time)}>
                <p className='btn-text'>Add To List</p>

            </button>

        </div>
    );
};

export default Workouts;