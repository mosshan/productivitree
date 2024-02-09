import React from 'react';
import Button from '@mui/material/Button'

// Define the prop types for the component
interface Props {
    change:(newVal:string) => void
}


function InSessionView(props : Props){
    function updateState(newState: string){
        chrome.storage.local.set({"state" : newState})
        props.change(newState)
    }

    return(
        <div className='panel'>
            <div className='panelContent'>
                <p>In Session</p>
                <Button onClick={() => updateState('SessionComplete')}>End Session</Button>
            </div>
        </div>
    );
}


export default InSessionView;