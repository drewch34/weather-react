import "./CurrentWeather.css";
import React, { useState } from "react";
import axios from "axios";
import Loader from 'react-loader-spinner'

export default function CurrentWeather(props) {

  // console.log(props.searchVal);
  const [weatherData, setWeatherData] = useState( {ready: false});

  // const [ready, setReady] = useState(false);
  // const [temp, setTemp] = useState(null);
  // // console.log(temp);
  // const [desc, setDesc] = useState(null);
  // // const [humid, setHumid] = useState(null);
  // const [wind, setWind] = useState(null); //response.data.wind.speed
  // const [icon, setIcon] = useState(null); //response.data.weather[0].icon
  // const [city, setCity] = useState(null); //response.data.name
  // const [feelsLike, setFeelsLike] = useState(null); //response.data.main.feels_like

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
      // humid: response.data.main.humidity
    })

  }

  let key = `f42932205cbcb577e1d9c675e3aae5ef`;

  if (props.searchVal && ready) {
    let imgURL = `http://openweathermap.org/img/wn/${weatherData.icon}@2x.png`;

    return (
      <div className="col current border-right CurrentCity">
        <div id="curr-city" className="row city justify-content-center">
          {weatherData.city}
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
    );

  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${props.searchVal}&appid=${key}&units=metric`;
    axios.get(url).then(displayInfo);

    return (
      <div className="loader">
        <Loader
         type="Puff"
         color="black"
         height={100}
         width={100}
         timeout={5000} //3 secs
        />
      </div>
    )
  }

  // if (ready) {
  //   let imgURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;
  //   return (
  //     <div className="col current border-right CurrentCity">
  //       <div id="curr-city" className="row city justify-content-center">
  //         {weatherData.city}
  //       </div>
  //       {/* <div id="curr-date" className="row current-date justify-content-center">
  //         Saturday, November 21
  //       </div>
  //       <div
  //         id="curr-state-country"
  //         className="row state-country justify-content-center"
  //       >
  //         USA
  //       </div> */}
  //       <div className="row current-emoji justify-content-center">
  //         <img src={imgURL} alt="Pic of weather"></img>
  //       </div>
  //       <div className="row current-temp justify-content-center">
  //         <p id="curr-temp" className="temp">
  //           The temperature is currently {weatherData.temp}°C
  //         </p>
  //       </div>
  //       <div
  //         id="current-des"
  //         className="row current-descript justify-content-center"
  //       >
  //         Description: {weatherData.desc}
  //       </div>
  //       <div
  //         id="current-windspeed"
  //         className="row current-windspeed justify-content-center"
  //       >
  //         Wind speed: {weatherData.wind}km/hr
  //       </div>
  //       <div className="row current-feels justify-content-center">
  //         <p id="curr-feels-like-temp" className="temp">
  //           It feels like {weatherData.feelsLike}°C
  //         </p>
  //       </div>
  //       {/* <div className="row sunrise justify-content-center">
  //         <p id="curr-sunrise">The sunrise in your time is 07:30</p>
  //       </div>
  //       <div className="row sunset justify-content-center">
  //         <p id="curr-sunset">The sunset in your time is 17:29</p> */}
  //       {/* </div> */}
  //     </div>
  //   )
  // } else {
  //   function getPosition(position) {
  //     let lat = position.coords.latitude;
  //     let lon = position.coords.longitude;
  //     let place = `lat=${lat}&lon=${lon}`;
  //     let url = `https://api.openweathermap.org/data/2.5/weather?${place}&units=metric&appid=${key}`;

  //     axios.get(url).then(displayInfo);
  //   }
  //   navigator.geolocation.getCurrentPosition(getPosition);

  //   return (
  //     <div className="loader">
  //       <Loader
  //        type="Puff"
  //        color="black"
  //        height={100}
  //        width={100}
  //        timeout={5000} //3 secs
  //       />
  //     </div>
  //   )
  // }


}

