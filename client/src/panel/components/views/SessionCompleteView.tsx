import React from 'react';
import Button from '@mui/material/Button'

// Define the prop types for the component
interface Props {
    change:(newVal:string) => void
}

function SessionCompleteView(props : Props){
    function updateState(newState: string){
        chrome.storage.local.set({"state" : newState})
        props.change(newState)
    }

    return(
        <div className='panel'>
            <div className='panelContent'>
                <p>Session Complete</p>
                <Button onClick={() => updateState('Landing')}>Add to Garden</Button>
                <Button onClick={() => updateState('Landing')}>Not this time</Button>
            </div>
        </div>
    );
}


export default SessionCompleteView;