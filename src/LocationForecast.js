import "./Forecast.css";
import React, { useState } from "react";
import axios from "axios";
import Loader from 'react-loader-spinner';
import ForecastComp from "./ForecastComp.js";

export default function LocationForecast(props) {
  let key = `f42932205cbcb577e1d9c675e3aae5ef`;

  const [weatherInfo, setWeatherInfo] = useState({ready: false});

  function getInfo(response) {

    setWeatherInfo({
      ready: true,
      eachDay: response.data.daily
    })
  }

  if (weatherInfo.ready) {
    return (
      <div className="col future">
        <ForecastComp daily={weatherInfo.eachDay[1]} unit={props.unit} tempMath={props.tempMath}/>
        <ForecastComp daily={weatherInfo.eachDay[2]} unit={props.unit} tempMath={props.tempMath}/>
        <ForecastComp daily={weatherInfo.eachDay[3]} unit={props.unit} tempMath={props.tempMath}/>
        <ForecastComp daily={weatherInfo.eachDay[4]} unit={props.unit} tempMath={props.tempMath}/>
        <ForecastComp daily={weatherInfo.eachDay[5]} unit={props.unit} tempMath={props.tempMath}/>
      </div>
    );

  } else {
    function getPosition(position) {
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let place = `lat=${lat}&lon=${lon}`;
      let url = `https://api.openweathermap.org/data/2.5/onecall?${place}&exclude=minutely&exclude=hourly&exclude=current&units=metric&appid=${key}`;

      axios.get(url).then(getInfo);
    }

    navigator.geolocation.getCurrentPosition(getPosition);

    return (
      <div className="loader">
        <Loader
         type="Puff"
         color="black"
         height={100}
         width={100}
         timeout={5000}
        />
      </div>
    )
  }
}