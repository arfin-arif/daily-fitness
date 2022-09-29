import React from 'react';
import './Profile.css'

const Profile = (props) => {
    return (
        <div className='profile'>
            <div className='user'>
                <img src="https://i.pinimg.com/280x280_RS/f1/c7/a1/f1c7a19517f47936caa5f41276bca722.jpg" alt="" />
                <h4>Arfin Arif</h4>
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
                <div className="break-time">
                    <h3 className="time">10</h3>
                    <h3 className="time">20</h3>
                    <h3 className="time">30</h3>
                    <h3 className="time">40</h3>
                    <h3 className="time">50</h3>
                </div>
            </div>

            <div className="workout-details">
                <h2>Exercise Details</h2>
            </div>


        </div>
    );
};

export default Profile;