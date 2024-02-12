import React, { useEffect, useState } from 'react';

const Timer5 = () => {
    const [startTime, setStartTime] = useState(0);
    const [endTime, setEndTime] = useState(0);
    const [elapsedTime, setElapsedTime] = useState(0);
    useEffect(() => {       
            setStartTime(performance.now());
        return () => {
            setEndTime(performance.now());
            
            calculateElapsedTime();
        };
    }, []);
    const calculateElapsedTime = () => {
        const elapsedSeconds = (endTime - startTime) / 1000; 
        setElapsedTime(elapsedSeconds.toFixed(2));
    }
    console.log(elapsedTime)
    return (
        <div>
            this is time {elapsedTime}
        </div>
    );
};

export default Timer5;