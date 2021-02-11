import React, { useState } from "react";
import axios from "axios";
import "./SearchEngine.css";
import FormattedDate from "./FormattedDate.js";
import FormattedTime from "./FormattedTime.js";
import WeatherDay from "./WeatherDay.js";
import WeatherForecast from "./WeatherForecast.js";

export default function SearchEngine(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showWeather(response) {
    let unixTimestamp = response.data.dt;
    let timezoneOffset = response.data.timezone;
    let localUnixTimestamp = unixTimestamp + timezoneOffset;

    setWeatherData({
      ready: true,
      temp: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      city: response.data.name,
      country: response.data.sys.country,
      icon: response.data.weather[0].icon,
      date: new Date(localUnixTimestamp * 1000),
      lat: response.data.coord.lat,
      lon: response.data.coord.lon,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function handleCityChange(event) {
    setCity(event.target.value);
  }
  function search() {
    const apiKey = "4007b2458c5f1847227a709637cbc50d";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(showWeather);
  }
  if (weatherData.ready) {
    return (
      <div className="SearchEngine">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-6">
              <input
                type="search"
                placeholder="...type a city"
                autoFocus="on"
                autoComplete="off"
                className="form-control shadow-sm"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="form-control btn btn-outline-info shadow-sm"
              />
            </div>
            <div className="col-3">
              <ul>
                <li>
                  <FormattedDate date={weatherData.date} />
                </li>
                <li>
                  <FormattedTime date={weatherData.date} />
                </li>
              </ul>
            </div>
          </div>
        </form>
        <WeatherDay data={weatherData} />
        <WeatherForecast 
          city={weatherData.city}
          latitude={weatherData.lat}
          longitude={weatherData.lon} />
      </div>
    );
  } else {
    search();
    return "Thinking...";
  }
}