import React from "react";
import "./ForecastComp.css"
import WeatherIcon from "./Icon.js";
import FutureDay from "./FutureDay.js";

export default function ForecastComp(props) {

  let high = Math.round(props.daily.temp.max);
  let low = Math.round(props.daily.temp.min);

  return (
    <div className="IndividualForecastComp">
      <span>
        <WeatherIcon icon={props.daily.weather[0].icon}/> &nbsp;&nbsp;
        <FutureDay day={props.daily.dt * 1000} num={props.num}/> &nbsp;&nbsp;
        High: {high}°C &nbsp;&nbsp;
        Low: {low}°C
      </span>
    </div>
  )


}