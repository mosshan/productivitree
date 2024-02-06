import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Home from './Home';
import Garden from './Garden';
import Settings from './Settings';
import Statistics from './Statistics';
import React, {useState} from 'react';


function Landing(){
    const[content, setContent] = useState('home')
  
    const handleTabChange = (event: React.SyntheticEvent, newValue: string) =>{
      setContent(newValue);
    }
  
    function renderContent(){
      switch(content) {
        case 'garden':
          return <Garden/>
        case 'settings':
          return <Settings/>
        case 'stats':
          return <Statistics/>
        default:
          return <Home/>
      }
    }
  
    return (
      <div>
        <div id="tabs">
          <Tabs value={content} onChange={handleTabChange} aria-label="tabs for landing page" variant="fullWidth">
            <Tab value="home" label="Home"/>
            <Tab value="settings" label="Settings" />
            <Tab value="forest" label="Forest" />
            <Tab value="stats" label="Stats" />
          </Tabs>
        </div>
        {renderContent()}
      </div>
    );
  }

export default Landing;