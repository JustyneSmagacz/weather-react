import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherPreview(props) {
  function day() {
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let day = days[props.date.getDay()];
    return `${day}`;
  }

  function temperature() {
    let temperature = Math.round(props.data.main.temp);
    return `${temperature}°C`;
  }

  return (
    <div className="WeatherPreview col">
      {day()}
      <WeatherIcon code={props.data.weather[0].icon} />
      {temperature()}
    </div>
  );
}