landingContent = document.getElementById("landingContent")
currentSession = document.getElementById("currentSession")
sessionComplete = document.getElementById("sessionComplete")

let getState = browser.storage.local.get("state")
getState.then(determineStart)

// Show correct state
function determineStart(item){
  if(item === undefined || item["state"] === undefined || item["state"] == "notInSession"){
    landing()
  } else if(item["state"] == "inSession"){
    inSession()
  } else {
    sessionDone()
  } 
}


// Base state, no sessions currently active
function landing(){
  browser.storage.local.set({"state" : "notInSession"})
  landingContent.style.display = 'block'
  currentSession.style.display = 'none'
  sessionComplete.style.display = 'none'

  startSession = document.getElementById("startSession")
  startSession.addEventListener("click", start)
}

// Start a new session
function start(){
  //let delayInMinutes = inputTime.value;
  const delayInMinutes = .2;
  let alarm = browser.alarms.create("sessionTimer", {delayInMinutes})
  browser.alarms.onAlarm.addListener(sessionDone)
  browser.storage.local.set({"state" : "inSession"})
  inSession()
}

// Session started, display current session
function inSession(){
  landingContent.style.display = 'none'
  currentSession.style.display = 'block'
  sessionComplete.style.display = 'none'
  drawTree(300, 500, -90, depth, 7)
  endSession = document.getElementById("endSession")
  endSession.addEventListener("click", sessionDone)
}


// At the end of a session let user determine what to do with their tree
function sessionDone(){
  browser.storage.local.set({"state" : "sessionComplete"})
  returnToLanding = document.getElementById("return")
  returnToLanding.addEventListener("click", reset)
  currentSession.style.display = 'none'
  sessionComplete.style.display = 'block'
}

// After ending a session and determining what to do with your tree, go back to landing
function reset(){
  browser.storage.local.set({"state" : "notInSession"})
  landing()
}




