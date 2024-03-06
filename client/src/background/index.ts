import { runtime } from 'webextension-polyfill'

let state;
let intervalID: NodeJS.Timer | null;

runtime.onInstalled.addListener(() => {
  chrome.storage.local.set({"popupOpened":"false"})
  console.log('[background] loaded ')
  chrome.storage.local.set({"state":"Landing"})
  state = "Landing"
  console.log('state set to landing ')
})


chrome.action.onClicked.addListener( async () => {
  let popupURL = chrome.runtime.getURL("index.html")
  let tabs = await chrome.tabs.query({url: popupURL})
  if(tabs[0] === undefined){
    chrome.windows.create({ 
      url: popupURL,
      type: "popup"
    });
  }
});

chrome.runtime.onMessage.addListener(
  function(request, sender){
    console.log(sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension");
      if(request.newState){
        state = request.newState
        console.log("request state is " + request.newState + "state saved as " + state)
        if(state === 'SessionComplete'){
          stopTimer()
        }
      }

      if(request.timerLength){
        let timerLength = request.timerLength
        console.log("timer is started with length" + request.timerLength)
        displayTimer(timerLength)
      } 
  }
)

function displayTimer(timerLength: number){
  chrome.action.setBadgeBackgroundColor({"color": "#FF0000"})
        intervalID = setInterval(() => {
          if(timerLength > 0){
            chrome.action.setBadgeText({"text": String(timerLength)})
            timerLength -= 1
          } else {
            stopTimer()
          }
      }, 1000);
}

function stopTimer(){
  chrome.action.setBadgeBackgroundColor({"color": "#F4FAFC"})
  chrome.action.setBadgeText({"text":""})
  if(intervalID){
    clearInterval(intervalID)
    intervalID = null
  }
}

export {}