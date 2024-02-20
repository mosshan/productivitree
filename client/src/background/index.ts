import { isConstructorDeclaration } from 'typescript';
import { runtime } from 'webextension-polyfill'

let state;
let timerLength;
let i = 0

runtime.onInstalled.addListener(() => {
  console.log('[background] loaded ')
  chrome.storage.local.set({"state":"Landing"})
  state = "Landing"
  console.log('state set to landing ')
})

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