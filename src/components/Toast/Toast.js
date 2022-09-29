import React from 'react';
import './Toast.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Profile from '../Profile/Profile';

function Toast() {
    const notify = () => toast("You are done with Today!!");

    return (


        <div>
            <button className='btn-complete' onClick={notify}><p>Activity Completed</p></button>
            <ToastContainer />
        </div>
    );
}

export default Toast;