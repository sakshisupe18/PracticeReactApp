import React, { useState, useEffect, useRef } from "react";
const Stopwatch = () => {
  const [time, setTime] = useState(0);           
  const [isRunning, setIsRunning] = useState(false); 
  const timerRef = useRef(null);                 
  useEffect(() => {
    if (isRunning) {
      timerRef.current = setInterval(() => {
        setTime(prevTime => prevTime + 1);
      }, 1000);
    } else if (!isRunning && timerRef.current) {
      clearInterval(timerRef.current);
    }
    return () => clearInterval(timerRef.current);
  }, [isRunning]);
  const handleStart = () => {
    setTime(0);
    setIsRunning(true);
  };
  const handleStop = () => {
    setIsRunning(false);
    setTime(0);
  };
  const handlePause = () => {
    setIsRunning(false);
  };
  const handleResume = () => {
    setIsRunning(true);
  };
  return (
    <div style={{ textAlign: "center" }}>
      <h2>Stopwatch</h2>
      <h1>{time} s</h1>
      <div style={{ marginTop: "20px" }}>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handlePause}>Pause</button>
        <button onClick={handleResume}>Resume</button>
      </div>
    </div>
  );
};
export default Stopwatch;
