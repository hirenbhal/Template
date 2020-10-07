import React,{ useState,useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function Timer() {
    const [counter,setCounter] = useState(60);

    function startTimer(){
        
    }

    useEffect(() => {
        const newCounter = counter > 0 && setInterval(()=>setCounter(counter-1),1000);
        return()=>clearInterval(newCounter);
    }, [counter])
    
    return (
        <div className="container">
            <h1>{counter}</h1>
            <button className="btn btn-success" onClick={startTimer}>Start</button>
        </div>
    )
}

export default Timer;
