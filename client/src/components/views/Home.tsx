import React from 'react';

// Define the prop types for the component
interface Props {
    change:(newVal:string) => void
}

function Home(props : Props){
    function updateState(){
        browser.storage.local.set({"state" : "InSession"})
        props.change('InSession')
    }

    return(
        <div>
            <p>Home</p>
            <button onClick={updateState}>Start Session</button>
        </div>
    );
}


export default Home;