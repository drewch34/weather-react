// import Search from "./Search";
import "./Forecast.css";
import React, { useState } from "react";
import axios from "axios";
import Loader from 'react-loader-spinner';
import ForecastComp from "./ForecastComp";


export default function Forecast(props) {
  let key = `f42932205cbcb577e1d9c675e3aae5ef`;

  const [weatherInfo, setWeatherInfo] = useState({ready: false});

  function getInfo(response) {
    setWeatherInfo({
      ready: true,

    })
  }

  if (weatherInfo.ready) {
    return (
    <div className="col future">
      <ForecastComp />
    </div>
    );

  } else {
    let url = `https://api.openweathermap.org/data/2.5/onecall?${props.place}&exclude=minutely&exclude=hourly&exclude=current&units=metric&appid=${key}`;

    axios.get(url).then(getInfo);

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
