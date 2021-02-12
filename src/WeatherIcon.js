import React from "react";

export default function WeatherIcon(props) {
  const codeMapping = {
        "01d": 'https://ssl.gstatic.com/onebox/weather/48/sunny.png',
        "01n": 'https://ssl.gstatic.com/onebox/weather/48/sunny.png',
        "02d": 'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png',
        "02n": 'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png',
        "03d": 'https://ssl.gstatic.com/onebox/weather/48/cloudy.png',
        "03n": 'https://ssl.gstatic.com/onebox/weather/48/cloudy.png',
        "04d": 'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png',
        "04n": 'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png',
        "09d": 'https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png',
        "09n": 'https://ssl.gstatic.com/onebox/weather/48/rain_s_cloudy.png',
        "10d": 'https://ssl.gstatic.com/onebox/weather/48/rain_light.png',
        "10n": 'https://ssl.gstatic.com/onebox/weather/48/rain_light.png',
        "11d": 'https://ssl.gstatic.com/onebox/weather/48/thunderstorms.png',
        "11n": 'https://ssl.gstatic.com/onebox/weather/48/thunderstorms.png',
        "13d": 'https://ssl.gstatic.com/onebox/weather/48/snow.png',
        "13n": 'https://ssl.gstatic.com/onebox/weather/48/snow.png',
        "50d": 'https://ssl.gstatic.com/onebox/weather/48/fog.png',
        "50n": 'https://ssl.gstatic.com/onebox/weather/48/fog.png'
  };
    let forecastIcon = codeMapping[props.code];
  
    return(
            <img src={forecastIcon} id="forecast-icon" alt="Forecast icon"/>
    );
    
}