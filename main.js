const { app, BrowserWindow } = require('electron')
const { autoUpdater } = require('electron-updater')
const path = require('path')
const log = require('electron-log')
let win;
log.transports.file.resolvePath = () => path.join('./','logs/main.log') 
function createWindow() {
    win = new BrowserWindow({ width: 300, height: 300 })
    win.loadFile(path.join(__dirname,'index.html'))
}

app.on('ready', () => {
    createWindow()
    autoUpdater.checkForUpdatesAndNotify()  
})

autoUpdater.on('update-available', () => {
    log.info('update-available')
})  
autoUpdater.on('update-not-available', () => {
    log.info('update-not-available')
})  
autoUpdater.on('checking-for-update', () => {
    log.info('checking-for-update')
})  
autoUpdater.on('download-progress', () => {
    log.info('download-progress')
})  
autoUpdater.on('update-downloaded', () => {
    log.info('update-downloaded')
})  
