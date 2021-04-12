// Modules to control application life and create native browser window
const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path')
const Discord = require('discord-game');

const isRequireDiscord = true;
Discord.create('806224932982882324', isRequireDiscord);

setInterval(function () {
  Discord.runCallback(); // => true
}, 1000 / 60)

// async function updateActicity(activity) {
//   console.log("Here3")
//   await Discord.Activity.update(activity).then(function () { console.log('Rich Presence updated') });
//   console.log("Here4")
// }

function createWindow() {
  // Create the browser window.
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js')
    }
  })

  // and load the index.html of the app.
  mainWindow.loadURL('https://music.apple.com')


  // mainWindow.open('https://music.apple.com')
  // Open the DevTools.
  // mainWindow.webContents.openDevTools()
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.

ipcMain.on('song-change', function (event, songName, songArtist, songAlbum) {
  console.log(songName, songArtist, songAlbum);
  
  // All property are optional
  var activity = {
    details: songName,
    state: songArtist + " - " + songAlbum,
    assets: {
      largeImage: 'applemusic',
      largeText: songName,
      samllImage: 'applemusic',
      smallText: songAlbum
    },
    timestamps: {
      startAt: new Date(),
      endAt: new Date()
    }
  };
  console.log("Here1")
  updateActicity(activity);
  console.log("Here2")
});
