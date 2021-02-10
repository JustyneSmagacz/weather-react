import React from "react";
import WeatherIcon from "./WeatherIcon.js"
import ConvertTemperature from "./ConvertTemperature";


export default function WeatherDay(props){
    return (
    <div>
            <h1>
                {props.data.city}, {props.data.country}
            </h1>
            <h6>{props.data.description}</h6>
            <div className="row">
                <div className="col-4">
                <div className="clearfix">
                    <div className="float-left">
                    <WeatherIcon code={props.data.icon} />
                    </div>
                  
                </div>
                </div>

                <div className="col-4">
                <div className="float-left temperature">
                   <ConvertTemperature temp={props.data.temp} />
                </div>
                </div>

                <div className="col-4">
                <ul>
                    <li>
                    <strong>Wind: </strong>{props.data.wind} km/h
                    </li>
                    <li>
                    <strong>Humidity:</strong> {props.data.humidity}%
                    </li>
                    <li>
                    <strong>Sunrise:</strong> {props.data.sunrise} am
                    </li>
                    <li>
                    <strong>Sunset:</strong> {props.data.sunset}pm
                    </li>
                </ul>
                </div>
            </div>
            <div className="row weather-forecast"></div>
    </div>
    );

}
