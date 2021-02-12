import React from "react";

export default function SunTime(props) {
  let sunTime = new Date(props.time * 1000);

  let minutes = sunTime.getMinutes();
  let hours = sunTime.getHours();

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }
  
 return (
    <div className="sunTime">
      <strong>Sunrise:</strong> {hours}:{minutes} am
    </div>);
 }

//} else {
   // return (
    //<div className="sunTime">
     // <strong>SunSet:</strong> {hours}:{minutes} pm
    //</div>
    //  );
//}