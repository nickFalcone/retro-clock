const HourMinute = (props) => {
  return (
    <span className="time">
      {/* Remove AM/PM from the time string - it is displayed above */}
      {props.twentyFourHour
        ? props.time
            .toLocaleTimeString("en-US", { hour12: !props.twentyFourHour })
            .slice(0, -3)
        : props.time
            .toLocaleTimeString("en-US", { hour12: !props.twentyFourHour })
            .slice(0, -6)}
      <span className="seconds">
        {props.time.getSeconds().toLocaleString("en-US", {
          minimumIntegerDigits: 2,
          useGrouping: false,
        })}
      </span>
    </span>
  );
};

export default HourMinute;
