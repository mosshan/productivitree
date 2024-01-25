let landingPanel = browser.runtime.getURL("/sidebar/landing/landing.html");
let resultPanel = browser.runtime.getURL("/sidebar/result/result.html");
let sessionPanel = browser.runtime.getURL("/sidebar/session/session.html");

returnButton = document.getElementById("return")
returnButton.addEventListener("click", landing)

function landing(){
  browser.storage.local.set({"state" : "notInSession"})
  browser.sidebarAction.setPanel({panel: landingPanel})
}