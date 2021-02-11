import React from "react";
import SearchEngine from "./SearchEngine";
import './App.css';


export default function App() {
  return (
  <div className="App"> 
    <div className="Container">

      <SearchEngine defaultCity="Madrid"/>
     
      
      <footer>Open Source on <a href="https://github.com/JustyneSmagacz/weather-react" target="_blank" rel="noreferrer" className="link">Github</a> | Coded by <a href="https://www.linkedin.com/in/justyne-smagacz-aa6b4a31/" target="_blank" rel="noreferrer" className="link">Justyne Smagacz</a></footer>
    </div>
  </div>);
}