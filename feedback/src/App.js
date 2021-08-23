import React from "react";
import Feedback from "./Components/buttons/Feedback";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>Please leave feedback</p>
      </header>
      <div className="Buttons">
        <Feedback />
      </div>
    </div>
  );
}

export default App;
