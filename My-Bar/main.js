const { app, BrowserWindow, ipcMain, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

// 禁用硬件加速，避免某些 Windows 环境下的渲染问题
app.disableHardwareAcceleration();

let mainWindow;

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 800,
    minWidth: 900,
    minHeight: 600,
    backgroundColor: '#131313',
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: false,
    },
    show: false,        // 等内容加载完再显示，避免白屏闪烁
    autoHideMenuBar: true,
  });

  // 加载 index.html
  mainWindow.loadFile(path.join(__dirname, 'index.html'));

  // 内容加载完再显示窗口
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  mainWindow.on('closed', () => {
    mainWindow = null;
  });
}

app.whenReady().then(createWindow);

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

// ============================
//  IPC: 数据持久化（本地 JSON）
// ============================
const DATA_DIR = path.join(app.getPath('userData'), 'data');
const RECIPES_FILE = path.join(DATA_DIR, 'recipes.json');
const INVENTORY_FILE = path.join(DATA_DIR, 'inventory.json');
const CELLAR_FILE = path.join(DATA_DIR, 'cellar.json');

function ensureDataDir() {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }
}

ipcMain.handle('load-data', async (event, filename) => {
  ensureDataDir();
  const filePath = path.join(DATA_DIR, filename);
  if (!fs.existsSync(filePath)) return null;
  try {
    return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  } catch (e) {
    return null;
  }
});

ipcMain.handle('save-data', async (event, filename, data) => {
  ensureDataDir();
  const filePath = path.join(DATA_DIR, filename);
  try {
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (e) {
    return false;
  }
});

ipcMain.handle('get-data-path', async () => DATA_DIR);

// ============================
//  IPC: 导出 CSV
// ============================
ipcMain.handle('export-csv', async (event, csvContent, defaultFilename) => {
  const result = await dialog.showSaveDialog(mainWindow, {
    defaultPath: defaultFilename,
    filters: [{ name: 'CSV Files', extensions: ['csv'] }]
  });
  if (result.canceled) return false;
  try {
    fs.writeFileSync(result.filePath, '\ufeff' + csvContent, 'utf-8'); // BOM for Excel
    return true;
  } catch (e) {
    return false;
  }
});
