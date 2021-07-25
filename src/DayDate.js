const DayDate = (props) => {
  return (
    <div className="day-date">
      <div className="twenty-four-am-pm">
        <span className="twenty-four">{props.twentyFourHour ? "24H" : ""}</span>
        <span className="am-pm">
          {props.twentyFourHour
            ? ""
            : props.time.getHours() >= 12
            ? "PM"
            : "AM"}
        </span>
      </div>
      <span className="day">
        {props.time
          .toLocaleString("en-us", { weekday: "short" })
          .slice(0, 2)
          .toUpperCase()}
      </span>
      &nbsp;
      <span className="date">{props.time.getDate()}</span> <br />
    </div>
  );
};

export default DayDate;
