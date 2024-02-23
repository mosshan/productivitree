import { runtime } from 'webextension-polyfill'

let state;
let timerLength;

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
  } else {
    console.log("tab existas")
    tabs.forEach(function(tab) {
      console.log("tab is" + tab + "tab url is " + tab.url + "tab pending url is " + tab.pendingUrl)
    })
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
      }
      else{
        timerLength = request.timerLength
        console.log("timer is started with length" + request.timerLength)
      }

  }
)



export {}