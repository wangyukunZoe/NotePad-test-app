const { app, BrowserWindow } = require('electron');
const isDev = require('electron-is-dev');

let mainWindow;

app.on('ready', () => {
    mainWindow = new BrowserWindow({
        width: 1024,
        height: 680,
        webPreferences: {
            nodeIntegration: true,
        }
    })
    const urlLocation = isDev ? "http://localhost:3000" : "dummyurl";
    mainWindow.loadURL(urlLocation);

})

// unix 手动清理端口命令
// lsof -i:3000
// kill -9 [pid]
// concurrently package //命令行同步
// electron
// npm install electron --save-dev