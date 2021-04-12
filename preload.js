const ipcRenderer = require('electron').ipcRenderer;
const Discord = require('discord-game');


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

  window.setInterval(pollForData, 5000);

  function pollForData() {
    const songNode = document.querySelector("#playback-name > div > div > span:nth-child(1) > span")
    const aaNode = document.querySelector("#playback-sub-copy > div > div > span:nth-child(1) > span")

    if (songNode) {
      console.log("hi");
      var songName = songNode.textContent.trim();
      console.log(songName);
      var aa = aaNode.textContent.trim().split('—');
      var artistName = aa[0].trim();
      var albumName = aa[1].trim();
      console.log(artistName);
      console.log(albumName);

      var activity = {
        details: songName,
        state: artistName + " - " + albumName,
        assets: {
          largeImage: 'applemusic',
          largeText: songName,
          samllImage: 'applemusic',
          smallText: albumName
        }
      };

      Discord.Activity.update(activity)

      // ipcRenderer.send('song-change', songName, artistName, albumName);

      return;
    }
  }
})
