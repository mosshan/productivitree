import { useEffect, useState } from "react";

interface Props {
    timerLength:number;
}

function Timer(props : Props){
    const timerLength = props.timerLength
    const [time, setTime] = useState(timerLength)

    useEffect(() => {
        const interval = setInterval(() => {
            if(time > 0){
                setTime(time - 1);
            }
        }, 1000);
        return () => clearInterval(interval);
    });


    return(
        <div className="timer">
            <p> Timer</p>
            <p> Current time is: </p>
            <p>{time}</p>
        </div>
    )
}

export default Timer;