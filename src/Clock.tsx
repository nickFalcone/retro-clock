import { useState, useEffect, useRef } from "react";
import DayDate from "./DayDate";
import LightButton from "./LightButton";
import HourMinute from "./HourMinute";
import Casio from "./Casio";
import Stopwatch, { useStopwatch } from "./Stopwatch";

type Mode = "timekeeping" | "stopwatch";

interface Props {
  brand: string;
  model: string;
}

function Clock(props: Props) {
  const [time, setTime] = useState(new Date());
  const [twentyFourHour, setTwentyFourHour] = useState(false);
  const [mode, setMode] = useState<Mode>("timekeeping");
  const [showCasio, setShowCasio] = useState(false);
  const holdTimerRef = useRef<number | undefined>(undefined);

  const { isRunning, elapsedTime, startStop, reset } = useStopwatch();

  useEffect(() => {
    const updateTime = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(updateTime);
  }, [time]);

  const handleModePress = () => {
    if (mode === "timekeeping") {
      setMode("stopwatch");
    } else {
      setMode("timekeeping");
    }
  };

  const handleBottomRightMouseDown = () => {
    if (mode === "timekeeping") {
      // Start timer to show CASIO easter egg after 3 seconds
      holdTimerRef.current = window.setTimeout(() => {
        setShowCasio(true);
        setTimeout(() => setShowCasio(false), 3000);
      }, 3000);
    }
  };

  const handleBottomRightMouseUp = () => {
    if (holdTimerRef.current) {
      clearTimeout(holdTimerRef.current);
    }
  };

  const handleBottomRightClick = () => {
    if (mode === "timekeeping") {
      setTwentyFourHour(!twentyFourHour);
    } else if (mode === "stopwatch") {
      startStop();
    }
  };

  const handleLightButtonClick = () => {
    // In stopwatch mode, light button resets (when stopped)
    if (mode === "stopwatch" && !isRunning) {
      reset();
    }
  };

  const getBottomRightLabel = () => {
    if (mode === "stopwatch") {
      return isRunning ? "STOP" : elapsedTime > 0 ? "START" : "START";
    }
    return "ALARM ON·OFF / 24HR";
  };

  return (
    <div id="outerFace">
      <div className="make-model">
        <h1>{props.brand}</h1> <span className="model">{props.model}</span>
      </div>
      <LightButton onExtraAction={handleLightButtonClick} />
      <span className="feature">ALARM CHRONOGRAPH</span>
      <div id="lcdFace">
        <div className="black-border">
          {showCasio ? (
            <Casio />
          ) : mode === "timekeeping" ? (
            <>
              <DayDate time={time} twentyFourHour={twentyFourHour} />
              <HourMinute time={time} twentyFourHour={twentyFourHour} />
            </>
          ) : (
            <Stopwatch
              onStartStop={startStop}
              onReset={reset}
              isRunning={isRunning}
              elapsedTime={elapsedTime}
            />
          )}
        </div>
      </div>
      <p className="button-row">
        <button className="mode-btn" onClick={handleModePress}>
          MODE
        </button>
        <button
          onClick={handleBottomRightClick}
          onMouseDown={handleBottomRightMouseDown}
          onMouseUp={handleBottomRightMouseUp}
          onMouseLeave={handleBottomRightMouseUp}
        >
          {getBottomRightLabel()}
        </button>
      </p>
      <p className="water-resist">
        WATER <span className="wr">WR</span> RESIST
      </p>
    </div>
  );
}

export default Clock;
