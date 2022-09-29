
import React, { useEffect, useState } from 'react';
import Breaktime from '../BreakTime/Breaktime';
import Toast from '../Toast/Toast';
import './Profile.css'

const Profile = (props) => {


    const { cart } = props

    const totalTime = cart.reduce((partialSum, a) => partialSum + a, 0);


    const [breakTime, setBreakTime] = useState(0);


    useEffect(() => {
        const previousData = localStorage.getItem('breakT');
        if (previousData) {
            setBreakTime(parseInt(previousData));
        }
    }, [])
    return (
        <div className='profile'>
            <div className='user'>
                <img src="https://i.pinimg.com/280x280_RS/f1/c7/a1/f1c7a19517f47936caa5f41276bca722.jpg" alt="" />
                <div>
                    <h4>Arfin Arif</h4>
                    <p >Dhaka,BD</p>
                </div>
            </div>
            <div className='about'>
                <div className="details">
                    <h3>75 <small>kg</small></h3>
                    <p>Weight</p>
                </div>
                <div className="details">
                    <h3>5.5 <small>ft</small></h3>
                    <p>Height</p>
                </div>
                <div className="details">
                    <h3>23 <small>years</small></h3>
                    <p>Age</p>
                </div>
            </div>

            <div className='break'>
                <h2>Add A Break</h2>
                <div >

                    <Breaktime
                        breakTime={breakTime}
                        setBreakTime={setBreakTime}
                    ></Breaktime>

                </div>

            </div>

            <div className="workout-details">
                <h2>Workout Details</h2>

                <div className='w-time'>
                    <h3>Workout time</h3>
                    <p>{totalTime} min</p>
                </div>
                <div className='b-time'>

                    <h3>Break time</h3>
                    <p>{breakTime} Min</p>
                </div>

            </div>

            <Toast></Toast>
            {/* <p className='btn-text'>Activity Completed</p> */}

        </div>
    );
};

export default Profile;