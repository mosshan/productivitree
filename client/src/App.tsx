/*global browser*/
import React, {useState} from 'react';
import './App.css';

function Home(){
  return(
    <div>
      <p>Home</p>
    </div>
  )
}

function Settings(){
  return(
    <div>
      <p>Settings</p>
    </div>
  )
}

function Forest(){
  return(
    <div>
      <p>Forest</p>
    </div>
  )
}

function Stats(){
  return(
    <div>
      <p>Stats</p>
    </div>
  )
}

// Depending on which tab is active, display that content
function LandingContent(){

  return(
    <div>
      <p>Test</p>
    </div>
  )
}

function Landing(){
  const[content, setContent] = useState('home')
  const[activeButton, setButton] = useState('homeButton')

  function handleTabChange(buttonId: string, contentId: string){
    setContent(contentId);
    setButton(buttonId);
  }

  function renderContent(){
    switch(content) {
      case 'forest':
        return <Forest/>
      case 'settings':
        return <Settings/>
      case 'stats':
        return <Stats/>
      default:
        return <Home/>
    }
  }

  return (
    <div>
      <div className='landingTabs'>
        <button id="homeButton" onClick={()=>handleTabChange('homeButton', 'home')}>Home</button>
        <button id="settingsButton" onClick={()=>handleTabChange('settingsButton', 'settings')}>Settings</button>
        <button id="forestButton" onClick={()=>handleTabChange('forestButton', 'forest')}>Forest</button>
        <button id="statsButton" onClick={()=>handleTabChange('statsButton', 'stats')}>Stats</button>
      </div>
      {renderContent()}
    </div>
  );
}

function App() {  
  return (
    <div>
      <p>Test</p>
      <Landing/>
    </div>
  );
}

export default App;
