import React, { useState } from "react";
import WeatherPreview from "./WeatherPreview.js";
import axios from "axios";
import "./WeatherForecast.css";

export default function WeatherForecast(props) {
  const [loaded, setLoaded] = useState(false);
  const [forecast, setForecast] = useState(null);

  function handleForecastResponse(response) {
    setForecast(response.data);
    setLoaded(true);
  }

  if (loaded) {
    return (
       <span className="WeatherForecast">
                {forecast.data.daily.slice(1, 6).map(function (forecastItem) {
                    return <WeatherDay data={forecastItem} key={forecastItem.dt}/>
                })}
            </span>
    );
  } else {
    let apiKey = "4007b2458c5f1847227a709637cbc50d";
    let units = "metric";
    let excludeInfo = 'current,minutely,hourly,alerts';
    let apiForecastURL = `https://api.openweathermap.org/data/2.5/onecall?lat=${props.latitude}&lon=${props.longitude}&exclude=${excludeInfo}&appid=${apiKey}&units=${units}`
    axios.get(apiForecastURL).then(handleForecastResponse);

    return null;
  }
}