import React from 'react';
import logo from './logo.svg';
import './App.css';
import FetchAPI from './components/FetchAPI';

function App() {
  return (
    <div className="App">
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      <body>
        <FetchAPI></FetchAPI>
      </body>
    </div>
  );
}

export default App;
