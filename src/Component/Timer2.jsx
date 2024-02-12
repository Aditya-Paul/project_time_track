import React, { useEffect, useState } from 'react';

const Timer = ({ data }) => {
    // console.log(typeof(data))
    const [seconds, setSeconds] = useState(data);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);

    const convertTime = () => {
        // Convert seconds to minutes and hours
        const convertedMinutes = Math.floor(seconds / 60);
        const convertedHours = Math.floor(convertedMinutes / 60);

        setHours(convertedHours);
        setMinutes(convertedMinutes % 60);
    };

    useEffect(() => {
        const timer = setInterval(() => {
            setSeconds((prevSeconds) => prevSeconds + 1);
            convertTime();
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const handleStartClick = () => {
        // Reset timer
        setSeconds(0);
        setMinutes(0);
        setHours(0);
    };

    return (
        <div className='bg-purple-400 '>
            <div>
                Timer
                <div>
                    <p>{`${hours} hours, ${minutes} minutes, ${seconds} seconds`}</p>
                </div>
            </div>
            <div className='flex items-center justify-center gap-4'>
                <button onClick={handleStartClick}>Start</button>
                <button>Stop</button>
            </div>
        </div>
    );
};

export default Timer;