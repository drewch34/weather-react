import React from "react";
import "./ForecastComp.css"
import WeatherIcon from "./Icon.js";

export default function ForecastComp(props) {
  console.log(props.daily);

  let high = Math.round(props.daily.temp.max);
  let low = Math.round(props.daily.temp.min);

  return (
    <div className="IndividualForecastComp">
      <span>
        <WeatherIcon icon={props.daily.weather[0].icon}/>
        {props.daily.dt}
        High: {high}°C
        Low: {low}°C
      </span>
    </div>
  )


}