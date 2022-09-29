import React from 'react';
import SetBreak from '../SetBreak/SetBreak';
import './Breaktime.css'

const Breaktime = (props) => {
    const times = [1, 2, 3, 4, 5]
    const { breakTime, setBreakTime } = props
    return (
        <div>
            <div >

                <div className="break-time">
                    {
                        times.map((time) => <SetBreak
                            time={time}
                            key={time}
                            breakTime={breakTime}
                            setBreakTime={setBreakTime}></SetBreak>)
                    }
                </div>

            </div>
        </div >
    );
};

export default Breaktime;