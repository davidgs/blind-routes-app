const { contextBridge, ipcRenderer } = require('electron');

export type Channels = 'blind-routes';

contextBridge.exposeInMainWorld('electronAPI', {
  getData: (event: typeof event, key: string, type: string, query: string) =>
    ipcRenderer.invoke('get-data', event, key, type, query),
});
