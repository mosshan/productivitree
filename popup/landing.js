landingContent = document.getElementById("landingContent")
currentSession = document.getElementById("currentSession")
sessionComplete = document.getElementById("sessionComplete")

let getState = browser.storage.local.get("state")
getState.then(determineStart)

function determineStart(item){
  if(item === undefined || item["state"] == "notInSession"){
    landing()
  } else if(item["state"] == "inSession"){
    session()
  } else{
    console.log(item["state"])
    sessionDone()
  }
}

function landing(){
  browser.storage.local.set({"state" : "notInSession"})
  landingContent.style.display = 'block'
  currentSession.style.display = 'none'
  sessionComplete.style.display = 'none'

  startSession = document.getElementById("startSession")
  startSession.addEventListener("click", start)


}

function session(){
  landingContent.style.display = 'none'
  currentSession.style.display = 'block'
  sessionComplete.style.display = 'none'
  endSession = document.getElementById("endSession")
  endSession.addEventListener("click", sessionDone)
}


// Start a new session
function start(){
  //let delayInMinutes = inputTime.value;
  const delayInMinutes = .2;
  let alarm = browser.alarms.create("sessionTimer", {delayInMinutes})
  browser.alarms.onAlarm.addListener(sessionDone)
  browser.storage.local.set({"state" : "inSession"})
  session()
}

function sessionDone(){
  browser.storage.local.set({"state" : "sessionComplete"})
  returnToLanding = document.getElementById("return")
  returnToLanding.addEventListener("click", reset)
  currentSession.style.display = 'none'
  sessionComplete.style.display = 'block'
}

function reset(){
  browser.storage.local.set({"state" : "notInSession"})
  landing()
}




