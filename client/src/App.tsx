
import './App.css';
import LandingView from './components/views/LandingView';
import React, { useState , useEffect} from 'react';
import InSessionView from './components/views/InSessionView';
import SessionCompleteView from './components/views/SessionCompleteView';
import ErrorView from './components/views/ErrorView';
import LoadingView from './components/views/Loadingview';
//<reference types="chrome" />


function App() {  

  // our state value will determine our view
  const [viewState , setViewState] = useState('Loading')

  useEffect(()=> {
    fetchInitState();
  }, []);

  // get the initially stored state value, or set it to Landing if it has not been defined
  // put in async call so rendering of page (will go to loading first) occurs before this call is complete and rerenders to saved state once complete
  const fetchInitState = async () =>{
    try{
      let initState : { [key: string]: any; } = await chrome.storage.local.get("state")
      let initStateVal: string;

      if(initState === undefined || initState["state"] === undefined){
        initStateVal = "Landing"
      } else{
        initStateVal = initState["state"]
      }
      setViewState(initStateVal)

    } catch(e){
      // Error handling iffy here
      console.log("Error: Storage inaccessible")
    }

  }


  // will be called in child function so that 
  // if the child changes the stored state, the parent will be rerendered w matching view
  // as we're not actually changing our page URL, we can't use routing
  // and using 'UseSyncExternalStore' isn't a good option due to functionality of the browser storage events
  function handleState(newVal: string){
    setViewState(newVal)
  }

  function renderView(){
    switch(viewState){
      case('Landing'):
        return (
          <div>
            <LandingView change = {handleState}/>
          </div>);
      case('InSession'):
        return (
          <div>
            <InSessionView change = {handleState}/>
          </div>);
      case('SessionComplete'):
        return(
          <div>
            <SessionCompleteView change = {handleState}/>
          </div>);
      case('Loading'):
        return(
          <div>
            <LoadingView/>
          </div>);
      default:
        return(
          <div>
            <p>Error</p>
          </div>
        );


    }
  }
  
  return(
    <div>
      {renderView()}
    </div>
  )

}

export default App;
