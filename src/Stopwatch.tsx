import { useState, useEffect, useRef } from "react";

interface Props {
  onStartStop: () => void;
  onReset: () => void;
  isRunning: boolean;
  elapsedTime: number;
}

function Stopwatch({ elapsedTime }: Props) {
  const formatTime = (ms: number) => {
    const totalSeconds = Math.floor(ms / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const centiseconds = Math.floor((ms % 1000) / 10);

    const mm = minutes.toString().padStart(2, "0");
    const ss = seconds.toString().padStart(2, "0");
    const cs = centiseconds.toString().padStart(2, "0");

    return { mm, ss, cs };
  };

  const { mm, ss, cs } = formatTime(elapsedTime);

  return (
    <div className="stopwatch">
      <div className="stopwatch-label">
        <span className="st-indicator">ST</span>
      </div>
      <time className="time stopwatch-time">
        <span className="stopwatch-minssecs">
          {mm}:{ss}
        </span>
        <span className="seconds">{cs}</span>
      </time>
    </div>
  );
}

// Custom hook for stopwatch logic
export function useStopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const startTimeRef = useRef(0);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isRunning) {
      startTimeRef.current = Date.now() - elapsedTime;
      intervalRef.current = window.setInterval(() => {
        setElapsedTime(Date.now() - startTimeRef.current);
      }, 10);
    } else if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isRunning]);

  const startStop = () => {
    setIsRunning(!isRunning);
  };

  const reset = () => {
    if (!isRunning) {
      setElapsedTime(0);
    }
  };

  return { isRunning, elapsedTime, startStop, reset };
}

export default Stopwatch;
