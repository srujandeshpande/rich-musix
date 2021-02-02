const ipcRenderer = require('electron').ipcRenderer;

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  // const replaceText = (selector, text) => {
  //   const element = document.getElementById(selector)
  //   if (element) element.innerText = text
  // }

  // for (const type of ['chrome', 'node', 'electron']) {
  //   replaceText(`${type}-version`, process.versions[type])
  // }
  console.log("Preloaded");

  var config = { characterData: true };
  var observer = new MutationObserver(function(mutations) {
    console.log("Something changed");
    console.log(target.innerText);   
  });
  function addObserverIfDesiredNodeAvailable() {
    var nameSpan = document.querySelector("#playback-name > div > div > span:nth-child(1) > span");
    if(!nameSpan) {
      window.setTimeout(addObserverIfDesiredNodeAvailable,500);
      return;
    }
    // var config = {childList: true};
    // composeObserver.observe(composeBox,config);
    console.log("Observer calling");
    observer.observe(nameSpan, config);
    console.log("Observer called");
  }
  addObserverIfDesiredNodeAvailable();

  
  // var song_name = name_span.innerHTML;
  
  
  // configuration of the observer:
  
  // pass in the target node, as well as the observer options
  
  
  // ipcRenderer.send('song-change', song_name);
})
