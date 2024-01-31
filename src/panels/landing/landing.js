
let landingPanel = browser.runtime.getURL("/src/panels/landing/landing.html");
let resultPanel = browser.runtime.getURL("/src/panels/result/result.html");
let sessionPanel = browser.runtime.getURL("/src/panels/session/session.html");

let startSession = document.getElementById("startSession")
let homeButton = document.getElementById("homeButton")
let forestButton = document.getElementById("forestButton")
let statsButton = document.getElementById("statsButton")
let settingsButton = document.getElementById("settingsButton")
const landingButtons = [homeButton, forestButton, statsButton, settingsButton]


let home = document.getElementById("home")
let forest = document.getElementById("forest")
let stats = document.getElementById("stats")
let settings = document.getElementById("settings")
const landingPages = [home, forest, stats, settings]


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

  for (const button of landingButtons){
    button.addEventListener("click", () => { changeTab(button.id)})
    console.log(button)

  }

}

function changeTab(id){
  for (const page of landingPages){
    page.style.display = "none"
  }
  for (const button of landingButtons){
    button.style.background = ''
    button.style.borderBottom = ''
  }
  switch(id){
    case("forestButton"):
      button = forestButton
      content = forest
      break;
    case("settingsButton"):
      button = settingsButton
      content = settings
      break;
    case("statsButton"):
      button = statsButton
      content = stats
      break;
    default:
      button = homeButton
      content = home
  }
  content.style.display = "block"
  button.style.background = "#d0efd8"
  button.style.borderBottom = "none"
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


