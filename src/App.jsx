
import { useEffect, useRef, useState } from 'react';
import './App.css';
//import { Timer } from './components/Timer';

function App() {
  //const [show, setShow] = useState(true);


  const ref = useRef(null);

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    startTimer();
  }, []);
  
  const startTimer = () => {
        ref.current = setInterval(() => {
        setCounter((prev) => prev + 1)
      },1000)
  }

  return (
    <div className="App">
      {/* {show ? <Timer /> : <div>Click Again To Reset to Initial Value!</div>}
      <button onClick={() => {
        setShow(show ? false : true);
        //setShow(!show)
      }}>{show? "stop":"start" }</button> */}
      <h1>conter: {counter}</h1>
      <button onClick={() => {
        clearInterval(ref.current);
      }}>stop</button>
      <button onClick={startTimer}>start</button>
      <button onClick={() => {
        clearInterval(ref.current);
        setCounter(0)
      }}>reset</button>
    </div>
  );
}

export default App;
