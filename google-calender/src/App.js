import logo from "./logo.svg";
import "./App.css";

// https://velog.io/@eunbeann/React-FullCalendar-%EA%B5%AC%EA%B8%80-%EC%97%B0%EB%8F%99-%EB%A6%AC%EC%95%A1%ED%8A%B8-%ED%92%80%EC%BA%98%EB%A6%B0%EB%8D%94-%EA%B5%AC%EA%B8%80-%EC%97%B0%EB%8F%99

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
