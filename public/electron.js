// Modules to control application life and create native browser window
 const { ipcMain } = require('electron')
 const {app, BrowserWindow} = require('electron')
 const { default: installExtension, REDUX_DEVTOOLS } = require('electron-devtools-installer');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
let mainWindow

ipcMain.on('asynchronous-message', (event, arg) => {
  console.log(arg) // prints "ping"
  event.sender.send('asynchronous-reply', 'pong')
})

ipcMain.on('synchronous-message', (event, arg) => {
  console.log(arg) // prints "ping"
  event.returnValue = 'pong'
  mainWindow.webContents.send("gitReturn", "ping")

})

function createWindow () {
  // Create the browser window.
  mainWindow = new BrowserWindow({
    width: 800,
    height: 900,
    transparent: true,
    frame: false,
    resizable: false,
    webPreferences: {
      nodeIntegration: true
    }
  })

  //Remove menu bar
  mainWindow.setMenu(null)

  // and load the index.html of the app.
  if (process.env.NODE_ENV === 'production') {
    mainWindow.loadFile('./build/index.html')
  } else if (process.env.NODE_ENV === 'development') {
    mainWindow.loadURL('http://localhost:3000')
  } else if (process.env.NODE_ENV === 'developmentWithTools') {
    mainWindow.loadURL('http://localhost:3000')
  } else {
    mainWindow.loadFile('./build/index.html')
  }

  // Open the DevTools.
  if ( process.env.NODE_ENV === 'developmentWithTools') {
    mainWindow.setSize(1200, 900)
    mainWindow.webContents.openDevTools()
  }
  // Emitted when the window is closed.
  mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    mainWindow = null
  })
}

app.on('ready', () => {
  if (process.env.NODE_ENV === 'developmentWithTools') {
    installExtension(REDUX_DEVTOOLS)
      .then((name) => console.log(`Added Extension:  ${name}`))
      .catch((err) => console.log('An error occurred: ', err));
  }
})

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow)

// Quit when all windows are closed.
app.on('window-all-closed', function () {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') app.quit()
})

app.on('activate', function () {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (mainWindow === null) createWindow()
})

// In this file you can include the rest of your app's specific main process
// code. You can also put them in separate files and require them here.