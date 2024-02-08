import React from 'react';

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
        <div>
            <p>Session Complete</p>
            <button onClick={() => updateState('Landing')}>Add to Garden</button>
            <button onClick={() => updateState('Landing')}>Not this time</button>
        </div>
    );
}


export default SessionCompleteView;