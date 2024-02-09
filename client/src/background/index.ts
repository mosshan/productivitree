import { runtime } from 'webextension-polyfill'

runtime.onInstalled.addListener(() => {
  console.log('[background] loaded ')
  chrome.storage.local.set({"state":"Landing"})
  console.log('state set to landing ')
})

chrome.runtime.onMessage.addListener(
  function(request, sender){
    console.log(sender.tab ?
      "from a content script:" + sender.tab.url :
      "from the extension");
    console.log(request.greeting)
  }
)

export {}