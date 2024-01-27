
let landingPanel = browser.runtime.getURL("/sidebar/landing/landing.html");
let resultPanel = browser.runtime.getURL("/sidebar/result/result.html");
let sessionPanel = browser.runtime.getURL("/sidebar/session/session.html");

let startSession = document.getElementById("startSession")
let sessionSettingsButton = document.getElementById("sessionSettingsButton")
let blacklistSettingsButton = document.getElementById("blacklistSettingsButton")

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
  startSession.addEventListener("click", start)
  sessionSettingsButton.addEventListener("click", () => { displaySettings("sessionSettingsButton")})
  blacklistSettingsButton.addEventListener("click", () => { displaySettings("blacklistSettingsButton")})
}

function displaySettings(id){
  document.getElementById(id).style.background = "#a8e48a";
  document.getElementById("displayedSettings").style.display = "block"
  if(id == "sessionSettingsButton"){
    console.log("here2")
    document.getElementById("sessionSettings").style.display = "block"
    document.getElementById("blackListSettings").style.display = "none"
    blacklistSettingsButton.style.background = "#65cc31";
  } else{
    document.getElementById("sessionSettings").style.display = "none"
    document.getElementById("blackListSettings").style.display = "block"
    sessionSettingsButton.style.background = "#65cc31";
  }
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


