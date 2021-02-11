import react from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherPreview(props) {
    console.log(props);
function getDay() {
    let unixTimestamp = props.data.dt;
    let timezoneoOffset = props.timezone;
    let localUnixTimestamp = unixTimestamp + timezoneoOffset;
    let date = new Date(localUnixTimestamp * 1000);
    let days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
    let day = days[date.getDate()];
    return `${day}`;
}

function temperature() {
    let temperature = Math.round(props.data.temp.day);
    return `${temperature}°C`;
}

return (
    <div className="WeatherPreview col">
        <p className="text-center">{getDay()}</p>
        <WeatherIcon code={props.data.weather[0].icon} />
        <p className="text-center">{temperature()}</p>
    </div>
);
}