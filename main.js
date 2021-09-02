const { app, BrowserWindow } = require("electron");

function createWindow() {
  const win = new BrowserWindow({
    width: 200,
    height: 200,
    webPreferences: {
      // Suppress deprecation warning
      nativeWindowOpen: true,
    },
  });

  win.setIgnoreMouseEvents(true, {
    forward: true,
  });

  win.loadFile("index.html");
}

app.whenReady().then(() => {
  createWindow();
});
