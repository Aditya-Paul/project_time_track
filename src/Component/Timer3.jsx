import axios from 'axios';
import React, { useState, useRef, useEffect, useContext } from 'react';
import { Authcontext } from '../Provider/Authprovider';
import UseProjects from '../Hook/UseProjects';

const Stopwatch = ({ sec, min, hour, projectID, refetchfunc }) => {
    //console.log(projectID)
    const { child, setchild,isRunning,setIsRunning,elapsedTime,setElapsedTime } = useContext(Authcontext)

    const intervalRef = useRef(null);

    function formatTime(seconds) {
        if (isNaN(seconds) || seconds < 0) {
            return "Invalid input";
        }

        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const remainingSeconds = Math.floor(seconds % 60);

        const formattedTime = `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;

        const updatetime = {
            newsecond: remainingSeconds,
            newminute: minutes,
            newhour: hours
        }
        axios.patch(`http://localhost:3000/projects/${projectID}`, updatetime)
            .then(res => {
                refetchfunc()
            })

        // setnewmin(minutes)
        // setnewhour(hours)
        // setnewsec(remainingSeconds)
        //console.log(hours, minutes, remainingSeconds)
        return formattedTime;
    }
    const startStopwatch = (id) => {
        console.log(id)
        console.log(child.length)

        setIsRunning(true);

        const d = child.find(item=>item.id === id)
        console.log(d.second)
        let value = d.isstarted
        value =true
        console.log(value)
        setElapsedTime(d.second)
        // intervalRef.current = setInterval(() => {
        //     setElapsedTime(seconds => (seconds + 1));
        //     refetchfunc()
        // }, 1000);
    };

    const stopStopwatch = () => {
        setIsRunning(false);

        //  console.log(updatetime)
        formatTime(elapsedTime)
        // console.log(newhour, newmin, newsec)
        // const updatetime = {
        //     newsecond: newsec,
        //     newminute: newmin,
        //     newhour: newhour
        // }
        // try {
        // axios.patch(`http://localhost:3000/projects/${projectID}`, updatetime)
        //     .then(res => {
        //         refetchfunc()
        //     })
        // console.log(projectID, res.data);
        // } catch (error) {
        //     console.error('Frontend Error:', error.message);
        // }
        clearInterval(intervalRef.current);


    };

    const resetStopwatch = () => {
        setIsRunning(false);
        setElapsedTime(0);
        clearInterval(intervalRef.current);
    };

    return (
        <div>
            <h1>Stopwatch</h1>
            <p>Elapsed Time: {elapsedTime} </p>
            {/* <button onClick={isRunning ? stopStopwatch : startStopwatch}>
                {isRunning ? 'Stop' : 'Start'}
            </button> */}
            
            {
                isRunning ?
                    <button onClick={()=>stopStopwatch(projectID)}>
                       Stop
                    </button>
                    :
                    <button onClick={()=>startStopwatch(projectID)}>
                        Start
                    </button>
            }
            <button onClick={resetStopwatch}>Reset</button>
            <h1>time: {hour}: {min} :{sec}</h1>
        </div>
    );
};

export default Stopwatch;
