import React from "react";

export default function FormattedDate (props){
    let days =["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"]
    let months =["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
    let date = props.date.getDate();
    let day = days[props.date.getDay()];
    let month = months[props.date.getMonth()];

    return (
    <div>
        {day},{date} {month} 
        <br />
    </div>
    );
}