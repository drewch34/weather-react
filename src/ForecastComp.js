import React from "react";
import "./ForecastComp.css"

export default function ForecastComp(props) {
  console.log(props.daily);

  let high = Math.round(props.daily.temp.max);
  let low = Math.round(props.daily.temp.min);

  return (
    <div className="IndividualForecastComp">
      <span>
        <p>{props.daily.weather[0].icon}</p>
        <p>{props.daily.dt}</p>
        <p>High: {high}°C</p>
        <p>Low: {low}°C</p>
      </span>
    </div>
  )


}