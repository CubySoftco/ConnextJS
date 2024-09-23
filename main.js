const { app, BrowserWindow, ipcMain, shell } = require('electron');
const path = require('path');
const waitOn = require('wait-on');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, 'electron/preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      enableRemoteModule: false,
    },
  });

  mainWindow.loadURL('http://localhost:3000');

  mainWindow.webContents.on('did-finish-load', () => {
    mainWindow.webContents.send('set-shell', shell);
  });
  
  ipcMain.on('open-external', (event, url) => {
    shell.openExternal(url);
  });
}

app.whenReady().then(() => {
  waitOn({ resources: ['http://localhost:3000'], timeout: 15000 }, (err) => {
    if (err) {
      console.error('No se pudo cargar React:', err);
      app.quit();
    } else {
      createWindow();
    }
  });
});

ipcMain.on('message', (event, data) => {
  console.log('Mensaje recibido en main:', data);
  event.reply('response', 'Hola desde el proceso principal');
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
