import React from "react";
import SearchEngine from "./SearchEngine";
import './App.css';
import WeatherIcon from "./WeatherIcon"


export default function App() {
  return (
  <div className="App"> 
    <div className="Container">

      <SearchEngine defaultCity="Madrid"/>
      <WeatherIcon code={props.data.weather[0].icon} />
      
      <footer>Open Source on <a href="https://github.com/JustyneSmagacz/weather-react" target="_blank" rel="noreferrer">Github</a> | Coded by <a href="https://www.linkedin.com/in/justyne-smagacz-aa6b4a31/" target="_blank" rel="noreferrer">Justyne Smagacz</a></footer>
    </div>
  </div>);
}