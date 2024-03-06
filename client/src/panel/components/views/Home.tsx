import React, { useState } from 'react';
import Button from '@mui/material/Button';


// Define the prop types for the component
interface Props {
    change:(newVal:string) => void;
    setTime:(newTimerLength : number)=>void
}

function Home(props : Props){
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [hours, setHours] = useState(0);
    let func;
    let currVal;
    
    const changeTime = (action: string, type: string) => {
        if(type === "seconds"){
            func = setSeconds
            currVal = seconds
            console.log("seconds")
        } else if ( type === "minutes" ){
            func = setMinutes
            currVal = minutes
            console.log("minutes")
        } else {
            func = setHours
            currVal = hours
            console.log("hours")
        }

        if(action === "increment"){
            func(currVal + 1)
            console.log("action is increment")
        } else{
            func(currVal - 1)
            console.log("action is decrement")
        }
    }

    return(
        <div className='panelContent'>
            <h2>Set Session Time:</h2>
            <div id="sessionTime">
                <div>
                    <p>Hours</p>
                    {hours < 5 ? <button><img src="./assets/increase.svg" alt="up arrow- press to increase minutes" onClick={() => {changeTime("increment", "hours")}} height="20px" width="20px"/></button>: null}
                    <p>{hours}</p>
                    {hours > 0 ? <button><img src="./assets/decrease.svg" alt="down arrow- press to decrease minutes" onClick={() => {changeTime("decrement", "hours")}} height="20px" width="20px"/></button>: null}
                </div>
                <div>
                    <p>Minutes</p>
                    {minutes < 60 ? <button><img src="./assets/increase.svg" alt="up arrow- press to increase minutes" onClick={() => {changeTime("increment", "minutes")}} height="20px" width="20px"/></button>: null}
                    <p>{minutes}</p>
                    {minutes > 0 ? <button><img src="./assets/decrease.svg" alt="down arrow- press to decrease minutes" onClick={() => {changeTime("decrement", "minutes")}} height="20px" width="20px"/></button>: null}
                </div>
                <div>
                    <p>Seconds</p>
                    {seconds < 60 ? <button><img src="./assets/increase.svg" alt="up arrow- press to increase seconds" onClick={() => {changeTime("increment", "seconds")}} height="20px" width="20px"/></button>: null}
                    <p>{seconds}</p>
                    {seconds > 0 ? <button><img src="./assets/decrease.svg" alt="down arrow- press to decrease seconds" onClick={() => {changeTime("decrement", "seconds")}} height="20px" width="20px"/></button>: null}
                </div>
            </div>
            <Button onClick={() => {
                chrome.storage.local.set({"state" : "InSession"})
                props.setTime(seconds)
                props.change('InSession')
            }}>Start Session</Button>
        </div>
    );
}


export default Home;