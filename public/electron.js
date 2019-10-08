// Modules to control application life and create native browser window
const { app, BrowserWindow, Menu } = require("electron"),
    sudo = require("sudo-prompt"),
    ipcMain = require("electron").ipcMain,
    chalk = require("chalk"),
    log = console.log,
    path = require("path"),
    isDev = require("electron-is-dev");

let mainWindow;
function createWindow() {
    mainWindow = new BrowserWindow({
        width: 900,
        height: 680,
        icon: path.join(__dirname, "../src/images/blokino-logo-2.png")
    });
    mainWindow.loadURL(
        isDev ? "http://localhost:3000" : `file://${path.join(__dirname, "../build/index.html")}`
    );
    mainWindow.on("closed", () => (mainWindow = null));
}
const singleInstanceApp = app.requestSingleInstanceLock();

if (!singleInstanceApp) {
    reset();
    app.quit();
} else {
    app.on("second-instance", (event, commandLine, workingDirectory) => {
        // Someone tried to run a second instance, we should focus our window.
        if (mainWindow) {
            if (mainWindow.isMinimized()) mainWindow.restore();
            mainWindow.focus();
        }
    });
    // Create myWindow, load the rest of the app, etc...
    app.on("ready", () => {});
}
function reset() {
    log(chalk.black.bgYellow.bold("Cerrando instancia ..."));
}
app.on("ready", createWindow);
app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit();
    }
});
app.on("activate", () => {
    if (mainWindow === null) {
        createWindow();
    }
});
