import React, { useState, useEffect } from 'react';

const Timer4 = () => {
  const [isRunning, setIsRunning] = useState(false);
//   const [startTime, setStartTime] = useState(0);
//   const [elapsedTime, setElapsedTime] = useState(0);
console.log("fir",performance.now())
  useEffect(() => {
    let interval;
    if (isRunning) {
        console.log(performance.now())
    //   setStartTime(performance.now() - elapsedTime);

    //   interval = setInterval(() => {
    //     setElapsedTime(performance.now() - startTime);
    //   }, 1000);
    } else {
    //   clearInterval(interval);
    }

    // return () => {
    //   clearInterval(interval);
    // };
  }, [isRunning, elapsedTime, startTime]);
  console.log(performance.now())
  const handleStartStop = () => {
    setIsRunning(!isRunning);
  };

  const handleReset = () => {
    setIsRunning(false);
    setElapsedTime(0);
  };

  const formatTime = (time) => {
    const seconds = Math.floor(time / 1000);
    const milliseconds = Math.floor(time % 1000);

    return `${seconds}.${milliseconds}`;
  };

  return (
    <div>
      <h1>{formatTime(elapsedTime)}</h1>
      <button onClick={handleStartStop}>{isRunning ? 'Stop' : 'Start'}</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Timer4;
