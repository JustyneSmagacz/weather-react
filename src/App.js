import './App.css';
import Weather from "./Weather.js";

function App() {
  return (
    <div className="App">
      <header className="App-header">

        <h1>
          Hello World from React!
        </h1>
      <Weather city="Madrid" country="Spain"/>
      </header>
    </div>
  );
}

export default App;
