import React, { useState, useEffect } from "react";

export default function Pomodoro() {
  const [seconds, setSeconds] = useState(25 * 60);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => setSeconds((prev) => prev - 1), 1000);
    }
    return () => clearInterval(timer);
  }, [isRunning]);

  const formatTime = () => {
    const min = Math.floor(seconds / 60);
    const sec = seconds % 60;
    return `${min}:${sec < 10 ? "0" : ""}${sec}`;
  };

  return (
    <div className="widget">
      <h2>⏳ Pomodoro</h2>
      <h3>{formatTime()}</h3>
      <button onClick={() => setIsRunning(!isRunning)}>
        {isRunning ? "Pause" : "Start"}
      </button>
      <button onClick={() => setSeconds(25 * 60)}>Reset</button>
    </div>
  );
}
