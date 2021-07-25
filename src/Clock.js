import { useState, useEffect } from "react";
import DayDate from "./DayDate";
import LightButton from "./LightButton";
import HourMinute from "./HourMinute";

const Clock = (props) => {
  const [time, setTime] = useState(new Date());
  const [twentyFourHour, setTwentyFourHours] = useState(false);

  useEffect(() => {
    const updateTime = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(updateTime);
  });
  return (
    <div id="outerFace">
      <div className="make-model">
        <h1>{props.brand}</h1> <span className="model">{props.model}</span>
      </div>
      <LightButton />
      <span className="feature">ALARM CHRONOGRAPH</span>
      {/* Day of week should be two characters. Weekday: "short" gives us three. */}
      <div id="lcdFace">
        <div class="black-border">
          <DayDate time={time} twentyFourHour={twentyFourHour} />
          <HourMinute time={time} twentyFourHour={twentyFourHour} />
        </div>
      </div>
      <p>
        MODE
        <button onClick={() => setTwentyFourHours(!twentyFourHour)}>
          ALARM ON&sdot;OFF / 24HR
        </button>
      </p>
      <p className="water-resist">
        WATER <span className="wr">WR</span> RESIST
      </p>
    </div>
  );
};

export default Clock;
