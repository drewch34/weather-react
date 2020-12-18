import React from "react";

export default function FutureDay(props) {
  // console.log(props.day);

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
  // console.log(date);
  let day = days[(date.getDay()) % 7];
  // console.log(day);

  return (
    <div>
      <p>{day}</p>
    </div>
  )
}