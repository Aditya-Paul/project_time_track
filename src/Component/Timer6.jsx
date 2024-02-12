import React, { useState, useRef } from 'react';

const Timer6 = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalRef = useRef(null);

  const startStopwatch = () => {
    setIsRunning(true);
    intervalRef.current = setInterval(() => {
      setElapsedTime(prevTime => prevTime + 1);
    }, 1000);
  };

  const stopStopwatch = () => {
    setIsRunning(false);
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
      <p>Elapsed Time: {elapsedTime} seconds</p>
      <button onClick={isRunning ? stopStopwatch : startStopwatch}>
        {isRunning ? 'Stop' : 'Start'}
      </button>
      <button onClick={resetStopwatch}>Reset</button>
    </div>
  );
};

export default Timer6;
