import React, { useEffect, useState } from 'react';
import Profile from '../Profile/Profile';
import Workouts from '../Workouts/Workouts';
import './Body.css'

import logo from '../../logo.png';
import QandA from '../QandA/QandA';
const Body = () => {

    const [workouts, setWorkouts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('workout.json')
            .then(res => res.json())
            .then(data => setWorkouts(data))
    }, [])

    const handelAddToList = (time) => {
        const newCart = [...cart, time]
        setCart(newCart)

    }




    return (
        <div>

            <div className='header'>
                <img className='logo' src={logo} alt="" />
                <h1>Daily Fitness</h1>
            </div>
            <h2 className='title'>
                Chose Your Workout
            </h2>
            <div className='main-container'>

                <div className="workout-container">

                    {
                        workouts.map(workout => <Workouts workout={workout}
                            key={workout.id}
                            handelAddToCart={handelAddToList}  ></Workouts>)
                    }

                </div>
                <div className="profile-container">
                    <Profile cart={cart} ></Profile>
                </div>
                <QandA></QandA>
            </div>

        </div>
    );
};

export default Body;