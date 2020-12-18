import React from "react";

export default function CurrentDay(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let date = new Date(props.current);
  // console.log(props.current);
  // console.log(date);
  let day = days[date.getDay()];
  let month = months[date.getMonth()];
  let dateDay = date.getDate();

  return (
    <div>
      <p>{day}, {month} {dateDay}</p>
    </div>
  )
}