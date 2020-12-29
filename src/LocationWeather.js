import "./CurrentWeather.css";
import React, { useState } from "react";
import axios from "axios";
import Loader from 'react-loader-spinner';
import WeatherIcon from "./Icon.js";
import CurrentDay from "./CurrentDay.js";
import LocationForecast from "./LocationForecast.js";


export default function LocationWeather(props) {

  const [weatherData, setWeatherData] = useState( {ready: false});

  function displayInfo(response) {
    // console.log(response);
    setWeatherData ({
      ready: true,
      temp: Math.round(response.data.main.temp),
      desc: response.data.weather[0].description,
      wind: Math.round(response.data.wind.speed),
      icon: response.data.weather[0].icon,
      city: response.data.name,
      feelsLike: Math.round(response.data.main.feels_like),
      time: response.data.dt * 1000,
      // humid: response.data.main.humidity
    })

  }
  let lat;
  let lon;
  let place;
  let key = `f42932205cbcb577e1d9c675e3aae5ef`;

  if (weatherData.ready) {
    if(props.unit === 'c-button') {
      return (
        <div className="row">
          <div className="col current border-right CurrentCity">
            <div id="curr-city" className="row city justify-content-center">
              {weatherData.city}
            </div>
            <div id="curr-date" className="row current-date justify-content-center">
              <CurrentDay current={weatherData.time} />
            </div>
            {/* <div
              id="curr-state-country"
              className="row state-country justify-content-center"
            >
              USA
            </div> */}
            <div className="row current-emoji justify-content-center">
              <WeatherIcon icon={weatherData.icon}/>
            </div>
            <div className="row current-temp justify-content-center">
              <p id="curr-temp" className="temp">
                The temperature is currently {weatherData.temp}°C
              </p>
            </div>
            <div
              id="current-des"
              className="row current-descript justify-content-center"
            >
              Description: {weatherData.desc}
            </div>
            <div
              id="current-windspeed"
              className="row current-windspeed justify-content-center"
            >
              Wind speed: {weatherData.wind}km/hr
            </div>
            <div className="row current-feels justify-content-center">
              <p id="curr-feels-like-temp" className="temp">
                It feels like {weatherData.feelsLike}°C
              </p>
            </div>
            {/* <div className="row sunrise justify-content-center">
              <p id="curr-sunrise">The sunrise in your time is 07:30</p>
            </div>
            <div className="row sunset justify-content-center">
              <p id="curr-sunset">The sunset in your time is 17:29</p> */}
            {/* </div> */}

          </div>
          <div className="col future">
              <LocationForecast place={`lat=${weatherData.lat}&lon=${weatherData.long}`}/>
          </div>
        </div>
      );
    } else if (props.unit === 'f-button') {

      let fCurrent = props.tempMath(weatherData.temp);
      let fFeels = props.tempMath(weatherData.feelsLike);

      return (
        <div className="row">
          <div className="col current border-right CurrentCity">
            <div id="curr-city" className="row city justify-content-center">
              {weatherData.city}
            </div>
            <div id="curr-date" className="row current-date justify-content-center">
              <CurrentDay current={weatherData.time} />
            </div>
            {/* <div
              id="curr-state-country"
              className="row state-country justify-content-center"
            >
              USA
            </div> */}
            <div className="row current-emoji justify-content-center">
              <WeatherIcon icon={weatherData.icon}/>
            </div>
            <div className="row current-temp justify-content-center">
              <p id="curr-temp" className="temp">
                The temperature is currently {fCurrent}°F
              </p>
            </div>
            <div
              id="current-des"
              className="row current-descript justify-content-center"
            >
              Description: {weatherData.desc}
            </div>
            <div
              id="current-windspeed"
              className="row current-windspeed justify-content-center"
            >
              Wind speed: {weatherData.wind}km/hr
            </div>
            <div className="row current-feels justify-content-center">
              <p id="curr-feels-like-temp" className="temp">
                It feels like {fFeels}°F
              </p>
            </div>
            {/* <div className="row sunrise justify-content-center">
              <p id="curr-sunrise">The sunrise in your time is 07:30</p>
            </div>
            <div className="row sunset justify-content-center">
              <p id="curr-sunset">The sunset in your time is 17:29</p> */}
            {/* </div> */}

          </div>
          <div >
              <LocationForecast place={`lat=${weatherData.lat}&lon=${weatherData.long}`} unit={props.unit} tempMath={props.tempMath}/>
          </div>
        </div>
      );
    }
  } else {
    function getPosition(position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      place = `lat=${lat}&lon=${lon}`;
      let url = `https://api.openweathermap.org/data/2.5/weather?${place}&units=metric&appid=${key}`;

      axios.get(url).then(displayInfo);
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
