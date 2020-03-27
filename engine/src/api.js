import { ipcMain } from 'electron';
import fs from 'fs';

export default (win) => {
  // 监听渲染端事件
  ipcMain.on('window-min', () => {
    win.minimize();
  });

  ipcMain.on('window-max', () => {
    if (win.isMaximized()) {
      win.restore();
    } else {
      win.maximize();
    }
  });

  ipcMain.on('window-close', () => {
    win.close();
  });

  // 查询文件内容
  ipcMain.on('query-component', (event) => {
    fs.readFile('public/config/json/component.json', { encoding: 'UTF-8' }, (err, data) => {
      if (!err) {
        event.reply('query-component-reply', JSON.parse(data));
      } else {
        event.reply('query-component-reply', err.message);
      }
    });
  });
};
