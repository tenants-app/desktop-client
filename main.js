const { app, BrowserWindow } = require('electron')

require('dotenv').config()
require('electron-reload')(__dirname);


let window

function createWindow () {
  window = new BrowserWindow({ width: 800, height: 600 })
  window.loadFile('main.html')
 
  if (process.env.DEBUG) {
    window.webContents.openDevTools()
  }

  window.on('closed', () => {
    window = null
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (window === null) {
    createWindow()
  }
})
