import React,{useState} from "react";
import './App.css';
const App = () => {
  const [time, setTime] = useState(0);
  const getTime = () => {
    setTime(new Date().toLocaleTimeString('en-IT', { hour12: false }));
  }
  setInterval(getTime,1000);

  return (
    <div class="wrapper">
      <div class="shadow">
        <div class="shadow__box" id="dual-shadow">
          <div class="shadow__title">DIGITAL CLOCK</div>
          <div class="shadow__sub">{time}</div>
        </div>
      </div>
    </div>
  );
}

export default App;