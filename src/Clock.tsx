import { useState, useEffect, FunctionComponent } from "react";
import DayDate from "./DayDate";
import LightButton from "./LightButton";
import HourMinute from "./HourMinute";
import Casio from "./Casio";

interface Props {
  brand: string;
  model: string;
}

const Clock: FunctionComponent<Props> = (props) => {
  const [time, setTime] = useState(new Date());
  const [twentyFourHour, setTwentyFourHours] = useState(false);

  useEffect(() => {
    const updateTime = setTimeout(() => setTime(new Date()), 1000);
    return () => clearTimeout(updateTime);
  }, [time, setTime]);

  let holdTimer: number | undefined;

  const mouseDownHandler = () => {
    const dayDate = document.querySelector(".day-date");
    const time = document.querySelector(".time");
    const casio = document.querySelector(".casio");
    // if button is held for 3 seconds, display CASIO message for 3 seconds.
    holdTimer = setTimeout(() => {
      if (dayDate && time && casio) {
        dayDate.classList.add("hide");
        time.classList.add("hide");
        casio.classList.remove("hide");
      }
      setTimeout(() => {
        if (dayDate && time && casio) {
          dayDate.classList.remove("hide");
          time.classList.remove("hide");
          casio.classList.add("hide");
        }
      }, 3000);
    }, 3000);
  };

  const mouseUpHandler = () => {
    clearTimeout(holdTimer);
  };

  return (
    <div id="outerFace">
      <div className="make-model">
        <h1>{props.brand}</h1> <span className="model">{props.model}</span>
      </div>
      <LightButton />
      <span className="feature">ALARM CHRONOGRAPH</span>
      <div id="lcdFace">
        <div className="black-border">
          <Casio />
          <DayDate time={time} twentyFourHour={twentyFourHour} />
          <HourMinute time={time} twentyFourHour={twentyFourHour} />
        </div>
      </div>
      <p>
        MODE
        <button
          onClick={() => setTwentyFourHours(!twentyFourHour)}
          onMouseDown={mouseDownHandler}
          onMouseUp={mouseUpHandler}
        >
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
