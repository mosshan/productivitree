let landingPanel = browser.runtime.getURL("/sidebar/landing/landing.html");
let resultPanel = browser.runtime.getURL("/sidebar/result/result.html");
let sessionPanel = browser.runtime.getURL("/sidebar/session/session.html");

endSessionButton = document.getElementById("endSessionButton")
endSessionButton.addEventListener("click", endSession)

function endSession(){
  browser.storage.local.set({"state" : "result"})
  browser.sidebarAction.setPanel({panel: resultPanel})
}