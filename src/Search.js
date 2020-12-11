import React, { useState } from "react";
import CurrentWeather from "./CurrentWeather";
import Forecast from "./Forecast";

export default function Search() {
  const [searched, setValue] = useState("");
  const [city, setCity] = useState("");

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
  }

    return (
    <div className="Search">
      <nav className="navbar navbar-light bg-light">
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
          >
            F°
          </button>
          <button id="c-button" type="button" className="btn btn-secondary celcius">
            C°
          </button>
        </div>
      </nav>
      <div class="weather-section">
        <div class="row">
          <CurrentWeather searchVal={city}/>
          <Forecast />
        </div>
      </div>
    </div>
  );
}

