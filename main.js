const { app, BrowserWindow } = require('electron');

let window;

function createWindow () {
  window = new BrowserWindow({
      width: 1800,
      height: 900,
      icon: "src/assets/img/brand/favicon0.png"
  });
  window.maximize()
  window.setMenu(null);
  window.loadFile('dist/index.html');
  window.webContents.openDevTools();
  window.on('closed', () => {
    window = null
  })
}

app.on('ready', createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
});

app.on('activate', () => {
  if (window === null) {
    createWindow()
  }
});
