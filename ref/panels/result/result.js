let landingPanel = browser.runtime.getURL("/src/panels/landing/landing.html");
let resultPanel = browser.runtime.getURL("/src/panels/result/result.html");
let sessionPanel = browser.runtime.getURL("/src/panels/session/session.html");


returnButton = document.getElementById("return")
returnButton.addEventListener("click", landing)

function landing(){
  browser.storage.local.set({"state" : "notInSession"})
  browser.sidebarAction.setPanel({panel: landingPanel})
}