import React from "react";
import WeatherIcon from "./WeatherIcon";
import ConvertTemperature from "./ConvertTemperature";
import SunTime from "./SunTime.js";

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
                    <WeatherIcon code={props.data.icon} size={150} />
                    </div>
                  
                </div>
                </div>

                <div className="col-3">
                <div className="float-left temperature">
                   <ConvertTemperature temp={props.data.temp} />
                </div>
                </div>

                <div className="col-5">
                <ul>
                    <li>
                    <strong>Wind: </strong>{props.data.wind} km/h
                    </li>
                    <li>
                    <strong>Humidity:</strong> {props.data.humidity}%
                    </li>
                    <li>
                    <SunTime time={props.data.sunrise}/>
                    </li>
                    <li>
                    <SunTime time={props.data.sunset}/>
                    </li>
                </ul>
                </div>
            </div>
            <div className="row weather-forecast"></div>
    </div>
    );

}
