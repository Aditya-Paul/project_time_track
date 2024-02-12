import React, { useEffect, useState } from 'react';
import Timer from './Timer';
import Stopwatch from './Timer3';

const Convert = ({sec,min,hour,projectID,refetchfunc}) => {
    //console.log(sec   )
    const [seconds, SetSeconds] = useState(14654);
    const [minutes, Setminutes] = useState(0);
    useEffect(() => {
        const convertedMinutes = Math.floor(seconds / 60);
        //console.log(convertedMinutes)
        const remainingSeconds = seconds % 60;

        SetSeconds(remainingSeconds);
        Setminutes(convertedMinutes);
    },[])
    return (
        <div>
            {/* <Timer min={minutes} sec={seconds}></Timer> */}
            <Stopwatch sec={sec} min={min} hour={hour} projectID={projectID} refetchfunc={refetchfunc}></Stopwatch>
        </div>
    );
};

export default Convert;