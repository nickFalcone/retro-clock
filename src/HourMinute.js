const HourMinute = (props) => {
  return (
    <time className="time">
      {props.twentyFourHour
        ? props.time.toLocaleTimeString("en-US", {
            hourCycle: "h23",
            hour: "2-digit",
            minute: "2-digit",
          })
        : props.time
            .toLocaleTimeString("en-US", { hour12: !props.twentyFourHour })
            .slice(0, -6)}
      {/* Remove AM/PM from the time string - it is displayed above */}
      <span className="seconds">
        {props.time.getSeconds().toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </span>
    </time>
  );
};

export default HourMinute;
