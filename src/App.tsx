import React from "react";
import "./App.css";
import Clock from "./components/Clock"
import useClock from "./hooks/useClock"

function App() {
const {hours,minutes,seconds}=useClock()

  return (
    <div className="App">
      
      <Clock
      label="Live Clock"
      hours={hours}
      minutes={minutes}
      seconds={seconds}
      />
      {/* List 1  initialValues [1, 2, 3] */}
      {/* List 2  initialValues [4, 5] */}
    </div>
  );
}

export default App;
