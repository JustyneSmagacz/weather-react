import React from "react";
import axios from "axios";

export default function Weather(props) {
    function handleResponse(response) {
        alert(`The weather in ${response.data.name} is ${Math.round(response.data.main.temp)}°C`);
    }
    let apiKey = "4007b2458c5f1847227a709637";
    let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.city},${props.country}&appid=${apiKey}cbc50d&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    return (<h2>Shit the bed Jezzy </h2>) ;
    
}
