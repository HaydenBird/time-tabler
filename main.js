const { app, BrowserWindow } = require('electron')

require("./server.js")
function createWindow () {
  // Create the browser window.
  win = new BrowserWindow({ width: 800, height: 600 })

  // and load the index.html of the app.
  win.loadURL('http://localhost:8080')
  win.webContents.openDevTools()
}

app.on('ready', createWindow)
