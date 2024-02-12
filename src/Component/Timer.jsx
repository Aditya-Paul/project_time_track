import React, { useEffect, useState } from 'react';

const Timer = ({min,sec}) => {
    console.log(min,sec)
    const [seconds,SetSeconds] = useState(sec);
    const [minutes,Setminutes] = useState(min);

    
    useEffect(()=>{
        
        let timer = setInterval(() => {
            SetSeconds(prevSeconds => {
                if (prevSeconds >= 59) {
                    Setminutes(prevMinutes => prevMinutes + 1);
                    return 0;
                } else {
                    return prevSeconds + 1;
                }
            });
        }, 1000);

        return ()=>clearInterval(timer)
    },[seconds,minutes])
    return (
        <div className='bg-purple-400 '>
            <div>
                Timer
                <div>
                    <p>{seconds}</p>
                    <p>{min}:{sec}</p>
                </div>
            </div>
            <div className='flex items-center justify-center gap-4'>
                <button>Start</button>
                <button>Stop</button>
            </div>
        </div>
    );
};

export default Timer;