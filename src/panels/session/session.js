let landingPanel = browser.runtime.getURL("/src/panels/landing/landing.html");
let resultPanel = browser.runtime.getURL("/src/panels/result/result.html");
let sessionPanel = browser.runtime.getURL("/src/panels/session/session.html");


endSessionButton = document.getElementById("endSessionButton")
endSessionButton.addEventListener("click", endSession)

function endSession(){
  browser.storage.local.set({"state" : "result"})
  browser.sidebarAction.setPanel({panel: resultPanel})
}