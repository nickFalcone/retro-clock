import { useState, useEffect } from "react";
import DayDate from "./DayDate";
import LightButton from "./LightButton";

const Clock = (props) => {
  const [time, setTime] = useState(new Date());
  const [twentyFourHour, setTwentyFourHours] = useState(false);

  useEffect(() => {
    const updateTime = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(updateTime);
  });
  return (
    <div id="outerFace">
      <LightButton />
      <h1>{props.brand}</h1> <span className="model">{props.model}</span>
      {/* Day of week should be two characters. Weekday: "short" gives us three. */}
      <div id="lcdFace">
        <DayDate time={time} twentyFourHour={twentyFourHour} />
        <span className="time">
          {/* Remove AM/PM from the time string - it is displayed above */}
          {twentyFourHour
            ? time
                .toLocaleTimeString("en-US", { hour12: !twentyFourHour })
                .slice(0, -3)
            : time
                .toLocaleTimeString("en-US", { hour12: !twentyFourHour })
                .slice(0, -6)}
          <span className="seconds">
            {time.getSeconds().toLocaleString("en-US", {
              minimumIntegerDigits: 2,
              useGrouping: false,
            })}
          </span>
        </span>
      </div>
      <p>
        Mode Alarm On.Off
        <button onClick={() => setTwentyFourHours(!twentyFourHour)}>
          24HR
        </button>
      </p>
      <p>
        Water <span>WR</span> Resist
      </p>
    </div>
  );
};

export default Clock;
