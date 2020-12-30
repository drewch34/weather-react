import React from "react";
import "./FutureDay.css";

export default function FutureDay(props) {

  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let date = new Date(props.day);
  let day = days[(date.getDay()) % 7];

  return (
    <div className="day">
      <p>{day}</p>
    </div>
  )
}