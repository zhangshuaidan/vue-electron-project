var { ipcMain, BrowserWindow } = require('electron')


//获取当前窗口对象
var mainWindow =  BrowserWindow.getFocusedWindow();

ipcMain.on('window-min',()=>{
    mainWindow.minimize();
})

ipcMain.on('window-max',()=>{
    if(mainWindow.isMaximized()){
        mainWindow.restore();
    }else{
        mainWindow.maximize();
    }

})

ipcMain.on('window-close',()=>{
    mainWindow.close();

})

