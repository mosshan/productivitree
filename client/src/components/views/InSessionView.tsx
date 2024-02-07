import React from 'react';

// Define the prop types for the component
interface Props {
    change:(newVal:string) => void
}


function InSessionView(props : Props){
    function updateState(newState: string){
        browser.storage.local.set({"state" : newState})
        props.change(newState)
    }

    return(
        <div>
            <p>In Session</p>
            <button onClick={() => updateState('SessionComplete')}>End Session</button>
        </div>
    );
}


export default InSessionView;