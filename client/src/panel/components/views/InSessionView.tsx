import React from 'react';
import Button from '@mui/material/Button'
import Timer from '../Timer'

// Define the prop types for the component
interface Props {
    change:(newVal:string) => void;
    timerLength:number;
}


function InSessionView(props : Props){
    chrome.runtime.sendMessage({timerLength : props.timerLength})

    function updateState(newState: string){
        chrome.storage.local.set({"state" : newState})
        props.change(newState)
    }

    return(
        <div className='panel'>
            <div className='panelContent'>
                <p>In Session</p>
                <Timer timerLength = {props.timerLength}></Timer>
                <Button onClick={() => updateState('SessionComplete')}>End Session</Button>
            </div>
        </div>
    );
}


export default InSessionView;