
let landingPanel = browser.runtime.getURL("/sidebar/landing/landing.html");
let resultPanel = browser.runtime.getURL("/sidebar/result/result.html");
let sessionPanel = browser.runtime.getURL("/sidebar/session/session.html");

let getState = browser.storage.local.get("state")
getState.then(determineStart)

// Show correct state
function determineStart(item){
  if(item === undefined || item["state"] === undefined || item["state"] == "notInSession"){
    browser.sidebarAction.setPanel({panel: landingPanel})
    landing()
  } else if(item["state"] == "inSession"){
    browser.sidebarAction.setPanel({panel: sessionPanel})
  } else {
    browser.sidebarAction.setPanel({panel: resultPanel})
  } 
}


// Base state, no sessions currently active
function landing(){
  browser.storage.local.set({"state" : "notInSession"})
  startSession = document.getElementById("startSession")
  startSession.addEventListener("click", start)
}

// Move to Session page
function start(){
  browser.storage.local.set({"state" : "inSession"})
  browser.sidebarAction.setPanel({panel: sessionPanel})
}


/*
// At the end of a session let user determine what to do with their tree
function result(){
  browser.storage.local.set({"state" : "result"})
  returnToLanding = document.getElementById("return")
  returnToLanding.addEventListener("click", reset)
}

// After ending a session and determining what to do with your tree, go back to landing
function reset(){
  browser.storage.local.set({"state" : "notInSession"})
  landing()
}

*/


