const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  sendMessage: (data) => ipcRenderer.send('message', data),
  onResponse: (callback) => ipcRenderer.on('response', callback),
  shell: {
    openExternal: (url) => ipcRenderer.send('open-external', url),
  },
});
