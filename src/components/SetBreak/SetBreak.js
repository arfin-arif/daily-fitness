import React from 'react';
import './SetBreak.css'
const SetBreak = ({ time, setBreakTime }) => {
    const storeToLocalStorage = time => {
        localStorage.setItem('breakT', time);
    }
    console.log(time)
    return (



        <button className='brk-btn' onClick={() => { setBreakTime(time); storeToLocalStorage(time) }}>
            <p>{time} Min</p>
        </button>

    );
};

export default SetBreak;