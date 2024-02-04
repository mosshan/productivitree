import React from 'react';
import './App.css';


function setVisibility(buttonId: string, contentId : string){
  const homePanel : HTMLElement | null = document.getElementById("home")
  const settingsPanel : HTMLElement | null = document.getElementById("settings")  
  if(contentId != null && homePanel != null && settingsPanel != null){
    if(contentId == 'home'){
      homePanel.style.display = "block"
      settingsPanel.style.display ="none"
    } else{
      homePanel.style.display = "none"
      settingsPanel.style.display ="block"
    }

  }

}

function App() {
  return (
    <div>
      <button id="settingsButton" onClick={() => setVisibility('settingsButton', 'settings')}>Settings</button>
      <button id="homeButton" onClick={() => setVisibility('homeButton', 'home')}>Home</button>
      <div id="home" style={{display: 'block'}}>
        <p>Home</p>
      </div>
      <div id="settings" style={{display: 'none'}}>
        <p>Settings</p>
      </div>
    </div>
  );
}

export default App;
