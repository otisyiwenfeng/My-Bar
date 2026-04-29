const { contextBridge, ipcRenderer } = require('electron');

// 暴露安全的 API 给 renderer
contextBridge.exposeInMainWorld('electronAPI', {
  // 数据持久化
  loadData: (filename) => ipcRenderer.invoke('load-data', filename),
  saveData: (filename, data) => ipcRenderer.invoke('save-data', filename, data),
  getDataPath: () => ipcRenderer.invoke('get-data-path'),

  // CSV 导出
  exportCSV: (csvContent, filename) => ipcRenderer.invoke('export-csv', csvContent, filename),
});
