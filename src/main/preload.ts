const { contextBridge, ipcRenderer } = require('electron');

export type Channels = 'blind-routes';

contextBridge.exposeInMainWorld('electronAPI', {
  getData: (event: typeof event, key: string) =>
    ipcRenderer.invoke('get-data', key),
});
