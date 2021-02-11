import React from "react";

export default function FormattedTime(props) {
    let formattedTime = new Date(props.time * 1000);

    let hours = formattedTime.getHours();
    if (hours < 10) {
    hours = `0${hours}`;
    }
    let minutes= formattedTime.getMinutes();
    if (minutes < 10) {
    minutes = `0${minutes} `;
    } 
    return (
    <div className="FormattedTime">
        {hours}:{minutes}
    </div>
    );
} 
