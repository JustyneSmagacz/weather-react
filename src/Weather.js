import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";
import FormattedDate from "./FormattedDate.js"
import FormattedTime from "./FormattedTime.js"
import WeatherDetails from "./WeatherDetails.js"
import WeatherForecast from "./WeatherForecast.js"


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
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
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
              placeholder="...type a city"
              autoFocus="on"
              autoComplete="off"
              className="form-control shadow-sm"
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
            <li>
                  <FormattedDate date={weatherData.date} /> 
            </li>
            <li>
                  <FormattedTime date={weatherData.time} /> 
            </li>
            </ul>
          </div>
        </div>
      </form>
    
    <WeatherDetails data={weatherData}/>
    <WeatherForecast city={weatherData.city}/>

      </div>   
  );
} else {
  search();
   return "Thinking...";
  }
}
