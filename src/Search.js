import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import LocationWeather from "./LocationWeather";
// import LocationForecast from "./LocationForecast.js";
// import Forecast from "./Forecast";
import "./Search.css";

export default function Search() {
  const [searched, setValue] = useState("");
  const [city, setCity] = useState("");
  const [hasSubmitted, setHasSubmitted] = useState(false);
  const [tempUnits, setTempUnits] = useState('c-button');

  function handleChange(event) {
    event.persist();
    event.preventDefault();
    // console.log(event.target.value);
    setValue(event.target.value);
  }

  function handleSubmit(event) {
    event.persist();
    event.preventDefault();
    setCity(searched);
    setHasSubmitted(true);
  }

  function handleUnits(event) {
    event.persist();
    event.preventDefault();
    let unit = event.target.id;
    setTempUnits(unit);
  }

  function changeUnits(temp) {
    let newTemp = Math.round((temp * 1.8) + 32);
    return newTemp;
  }

  if (hasSubmitted) {
    return (
      <div className="Search">
        <nav className="navbar navbar-light">
          <form id="search-city-form" className="form-inline" onSubmit={handleSubmit}>
            <input
              id="search-city"
              type="text"
              placeholder="Search your city"
              aria-label="Search"
              value={searched}
              onChange={handleChange}
            ></input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              🔎
            </button>
          </form>
          <div className="btn-group" role="group" aria-label="temp">
            <button
              id="f-button"
              type="button"
              className="btn btn-secondary farenheit"
              onClick={handleUnits}
            >
              F°
            </button>
            <button
              id="c-button"
              type="button"
              className="btn btn-secondary celcius"
              onClick={handleUnits}>
              C°
            </button>
          </div>
        </nav>
        <div >
          <CurrentWeather searchVal={city} unit={tempUnits} tempMath={changeUnits}/>
        </div>
      </div>
    );


  } else {
    return (
      <div className="Search">
        <nav className="navbar navbar-light">
          <form id="search-city-form" className="form-inline" onSubmit={handleSubmit}>
            <input
              id="search-city"
              type="text"
              placeholder="Search your city"
              aria-label="Search"
              value={searched}
              onChange={handleChange}
            ></input>
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              🔎
            </button>
          </form>
          <div className="btn-group" role="group" aria-label="temp">
            <button
              id="f-button"
              type="button"
              className="btn btn-secondary farenheit"
              onClick={handleUnits}
            >
              F°
            </button>
            <button id="c-button"
              type="button"
              className="btn btn-secondary celcius"
              onClick={handleUnits}
              >
              C°
            </button>
          </div>
        </nav>
        <div >
            <LocationWeather unit={tempUnits} tempMath={changeUnits}/>
        </div>
      </div>
    );
  }
}

