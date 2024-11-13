// 导入 Electron 模块
const { app, BrowserWindow } = require('electron');
const path = require('path');

// 创建窗口函数
function createWindow() {
  // 创建一个新的浏览器窗口
  const win = new BrowserWindow({
    width: 800, // 设置窗口宽度
    height: 600, // 设置窗口高度
    webPreferences: {
      nodeIntegration: true // 启用 Node.js 环境支持（允许渲染进程使用 Node.js）
    }
  });

  // 加载你的 HTML 文件（这里假设你有 index.html 文件）
  win.loadFile('index.html');

  // 打开开发者工具（可选）
  // win.webContents.openDevTools();
}

// 当 Electron 完成初始化后，创建窗口
app.whenReady().then(createWindow);

// 当所有窗口关闭时退出应用（适用于 macOS 以外的系统）
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit(); // 退出应用
  }
});

// 在 macOS 上，通常应用会保持活动状态，直到用户退出
app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow(); // 如果没有窗口，重新创建窗口
  }
});
