import React from 'react';
import Button from '@mui/material/Button';

// Define the prop types for the component
interface Props {
    change:(newVal:string) => void
}

function Home(props : Props){
    return(
        <div className='panelContent'>
            <p>Home</p>
            <Button onClick={() => {
                chrome.storage.local.set({"state" : "InSession"})
                props.change('InSession')
            }}>Start Session</Button>
        </div>
    );
}


export default Home;