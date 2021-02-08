import React, { useState } from "react";
import axios from "axios";
import Weather from "./Weather.css";


export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function showTemperature(response) {
    setWeatherData({
    ready:true,
      temperature: response.data.main.temp,
      description: response.data.weather[0].description,
      wind: response.data.wind.speed,
      humidity: response.data.main.humidity,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      city: response.data.name,
      country: response.data.sys.country,
      imgUrl: `https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`,
      time: new Date(response.data.id * 1000),
      date: new Date(response.data.dt * 1000),
    });
}

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search () {
    const apiKey = "4007b2458c5f1847227a709637cbc50d";
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(showTemperature);
  }
  
if (weatherData.ready) {
  return (
    <div className="Weather">
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-5">
            <input
              type="search"
              placeholder="...type to search"
              autoFocus="on"
              autoComplete="off"
              class="form-control shadow-sm"
              onChange={handleCityChange}
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="🔍"
              className="form-control btn btn-outline-info shadow-sm"
            />
          </div>
          <div className="col-2">
            <input
              type="submit"
              value="📍"
              className="form-control btn btn-outline-info shadow-sm"
            />
          </div>
          <div className="col-3">
            <ul>
              <li>{weatherData.date}</li>
              <li>{weatherData.time}</li>
            </ul>
          </div>
        </div>
      </form>
      <h1>
        {weatherData.city}, {weatherData.country}
      </h1>
      <h6>{weatherData.description}</h6>
      <div className="row">
        <div className="col-4">
          <div className="clearfix">
            <img
              src={weatherData.imgUrl}
              alt="weather icon"
              className="weather-icon float-left"
            />
          </div>
        </div>

        <div className="col-4">
          <div className="float-left temperature">
            <strong>{weatherData.temperature}</strong>
            <span className="units">
              <a href="/">°C</a> | <a href="/">°F</a>
            </span>
          </div>
        </div>

        <div className="col-4">
          <ul>
            <li>
              <strong>Wind: </strong>
              {weatherData.wind} km/h
            </li>
            <li>
              <strong>Humidity:</strong> {weatherData.humidity}%
            </li>
            <li>
              <strong>Sunrise:</strong> {weatherData.sunrise} am
            </li>
            <li>
              <strong>Sunset:</strong> {weatherData.sunset}pm
            </li>
          </ul>
        </div>
      </div>
      <div className="row weather-forecast"></div>
    </div>
  );
} else {
search ();
   return "Thinking...";
  }
}
