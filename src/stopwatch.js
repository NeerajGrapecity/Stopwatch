import { useState } from "react";
import LapElementShow from "./lapElementShow";
import Moment from "./moment";

function Stopwatch() {
  let [hours, setHours] = useState(0);
  let [minutes, setMinutes] = useState(0);
  let [seconds, setSeconds] = useState(0);
  let [mSeconds, setMseconds] = useState(0);
  const [lapElements, setLapElement] = useState([])
  let [clear, setClear] = useState()

  const onStart = () => {
     let x = setInterval(() => {
      setMseconds((cv) => cv + 1);
      if (mSeconds === 99) {
        setMseconds(0);
        setSeconds((seconds) => seconds + 1);
      }
    },10);
    setClear(x)
    
    
  };

  if (mSeconds === 99){
    setMseconds(0)
    setSeconds((cv)=> cv + 1)
  }

  if (seconds === 59){
    setSeconds(0)
    setMinutes((cv) => cv + 1)
  }

  if (minutes === 59){
    setMinutes(0)
    setHours((cv) => cv + 1)
  }


  const onLap = () => {
    lapElements.unshift(hours + ":" + minutes + ":" + seconds + ":" + mSeconds)
    setLapElement(lapElements)
    // console.log(lapElements)

  };

  const onReset = () => {
    console.log(clear)
    clearInterval(clear);
    setLapElement([])
    setMseconds(0);
    setSeconds(0);
    setMinutes(0);
    setHours(0);
  };

  const onStop = () => {
    clearInterval(clear)
  }

  const renderedLapElement = lapElements.map((element)=> {
    return <LapElementShow value = {element}/>

  })


  return (
    <div className="stopwatchContainer">
      <p>STOPWATCH</p>
      {/* <Moment /> */}
      <h1>
        {hours} : {minutes} : {seconds} : {mSeconds}
      </h1>
      <button className="startBtn" onClick={onStart}>Start</button>
      <button className="lapBtn"  onClick={onLap}>Lap</button>
      <button className="stopBtn" onClick={onStop}>Stop</button>
      <button className="resetBtn" onClick={onReset}>Reset</button>
      <ol className="lapElementContainer">{renderedLapElement}</ol>
    </div>
  );
}

export default Stopwatch;
