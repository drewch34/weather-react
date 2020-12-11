import "./CurrentWeather.css";
import React, { useState } from "react";
import axios from "axios";

export default function CurrentWeather(props) {

  // console.log(props.searchVal);
  const [temp, setTemp] = useState(null);
  // console.log(temp);
  const [desc, setDesc] = useState(null);
  // const [humid, setHumid] = useState(null);
  const [wind, setWind] = useState(null); //response.data.wind.speed
  const [icon, setIcon] = useState(null); //response.data.weather[0].icon
  const [city, setCity] = useState(null); //response.data.name
  const [feelsLike, setFeelsLike] = useState(null); //response.data.main.feels_like

  function displayInfo(response) {
    console.log(response);
    setTemp(Math.round(response.data.main.temp));
    setDesc(response.data.weather[0].description);
    // setHumid(response.data.main.humidity);
    setWind(Math.round(response.data.wind.speed));
    setIcon(response.data.weather[0].icon);
    setCity(response.data.name);
    setFeelsLike(Math.round(response.data.main.feels_like));
  }

  if (props.searchVal) {
    let key = `f42932205cbcb577e1d9c675e3aae5ef`;
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.searchVal}&appid=${key}&units=metric`;
    axios.get(url).then(displayInfo);

    let imgURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    return (
      <div className="col current border-right CurrentCity">
        <div id="curr-city" className="row city justify-content-center">
          {city}
        </div>
        {/* <div id="curr-date" className="row current-date justify-content-center">
          Saturday, November 21
        </div>
        <div
          id="curr-state-country"
          className="row state-country justify-content-center"
        >
          USA
        </div> */}
        <div className="row current-emoji justify-content-center">
          <img src={imgURL} alt="Pic of weather"></img>
        </div>
        <div className="row current-temp justify-content-center">
          <p id="curr-temp" className="temp">
            The temperature is currently {temp}°C
          </p>
        </div>
        <div
          id="current-des"
          className="row current-descript justify-content-center"
        >
          Description: {desc}
        </div>
        <div
          id="current-windspeed"
          className="row current-windspeed justify-content-center"
        >
          Wind speed: {wind}km/hr
        </div>
        <div className="row current-feels justify-content-center">
          <p id="curr-feels-like-temp" className="temp">
            It feels like {feelsLike}°C
          </p>
        </div>
        {/* <div className="row sunrise justify-content-center">
          <p id="curr-sunrise">The sunrise in your time is 07:30</p>
        </div>
        <div className="row sunset justify-content-center">
          <p id="curr-sunset">The sunset in your time is 17:29</p> */}
        {/* </div> */}
      </div>
    );
  } else {
    function getPosition(position) {
      let key = `f42932205cbcb577e1d9c675e3aae5ef`;
      let lat = position.coords.latitude;
      let lon = position.coords.longitude;
      let place = `lat=${lat}&lon=${lon}`;
      let url = `https://api.openweathermap.org/data/2.5/weather?${place}&units=metric&appid=${key}`;

      axios.get(url).then(displayInfo);
    }

    navigator.geolocation.getCurrentPosition(getPosition);

    let imgURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    return (
      <div className="col current border-right CurrentCity">
        <div id="curr-city" className="row city justify-content-center">
          {city}
        </div>
        {/* <div id="curr-date" className="row current-date justify-content-center">
          Saturday, November 21
        </div>
        <div
          id="curr-state-country"
          className="row state-country justify-content-center"
        >
          USA
        </div> */}
        <div className="row current-emoji justify-content-center">
          <img src={imgURL} alt="Pic of weather"></img>
        </div>
        <div className="row current-temp justify-content-center">
          <p id="curr-temp" className="temp">
            The temperature is currently {temp}°C
          </p>
        </div>
        <div
          id="current-des"
          className="row current-descript justify-content-center"
        >
          Description: {desc}
        </div>
        <div
          id="current-windspeed"
          className="row current-windspeed justify-content-center"
        >
          Wind speed: {wind}km/hr
        </div>
        <div className="row current-feels justify-content-center">
          <p id="curr-feels-like-temp" className="temp">
            It feels like {feelsLike}°C
          </p>
        </div>
        {/* <div className="row sunrise justify-content-center">
          <p id="curr-sunrise">The sunrise in your time is 07:30</p>
        </div>
        <div className="row sunset justify-content-center">
          <p id="curr-sunset">The sunset in your time is 17:29</p> */}
        {/* </div> */}
      </div>
    )
  }

}
