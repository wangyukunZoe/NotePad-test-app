const { app, BrowserWindow } = require('electron/main')
const path = require('node:path')

function createWindow() {

    const win = new BrowserWindow({
        width: 850,
        height: 600,
        webPreferences: {

            // __dirname 生成绝对路径
            preload: path.join(__dirname, 'preload.js')   //__dirname -> 当前目录的位置
        }
    })

    // 一般主进程为相对路径这里可以用绝对
    win.loadFile('src/index.html')
    win.webContents.openDevTools();
}

function createAnotherWindow(parent) {

    // Main Windows Instance 主窗口
    const win = new BrowserWindow({
        width: 600,
        height: 300,
        parent
    })
    win.loadFile('src/second.html')
}

app.on('ready', () => {

    // const parent = createWindow()
    // createAnotherWindow(parent)
    createWindow();
})



// const win = new BrowserWindow({
//         width: 850,
//         height: 600,
//         webPreferences: {
//             preload: path.join(__dirname, 'preload.js')
//         }
//     })


// app.whenReady().then(() => {
//     createWindow()

//     app.on('activate', () => {
//         if (BrowserWindow.getAllWindows().length === 0) {
//             createWindow()
//         }
//     })
// })

// app.on('window-all-closed', () => {
//     if (process.platform !== 'darwin') {
//         app.quit()
//     }
// })