import { useState, useEffect } from "react";

const Clock = (props) => {
  const [time, setTime] = useState(new Date());
  const [twentyFourHour, setTwentyFourHours] = useState(false);

  useEffect(() => {
    const updateTime = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(updateTime);
  });
  return (
    <div id="outerFace">
      <button
        onMouseDown={() => {
          document.getElementById("lcdFace").classList.add("light");
        }}
        onMouseUp={() => {
          document.getElementById("lcdFace").classList.remove("light");
        }}
      >
        Light
      </button>
      <h1>{props.brand}</h1> <span class="model">{props.model}</span>
      {/* Day of week should be two characters. Weekday: "short" gives us three. */}
      <div id="lcdFace">
        <div class="day-date">
          <div class="twenty-four-am-pm">
            <span class="twenty-four">{twentyFourHour ? "24H" : ""}</span>
            <span class="am-pm">
              {twentyFourHour ? "" : time.getHours() >= 12 ? "PM" : "AM"}
            </span>
          </div>
          <span class="day">
            {time
              .toLocaleString("en-us", { weekday: "short" })
              .slice(0, 2)
              .toUpperCase()}
          </span>
          &nbsp;
          <span class="date">{time.getDate()}</span> <br />
        </div>
        <span class="time">
          {/* Remove AM/PM from the time string - it is displayed above */}
          {twentyFourHour
            ? time
                .toLocaleTimeString("en-US", { hour12: !twentyFourHour })
                .slice(0, -3)
            : time
                .toLocaleTimeString("en-US", { hour12: !twentyFourHour })
                .slice(0, -6)}
          <span class="seconds">
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
