const { app, BrowserWindow } = require("electron");
const path = require("path");
const url = require("url");

app.on("ready", function() {
  const window = new BrowserWindow({
    width: 800,
    height: 600
  });
  window.loadURL(
    url.format({
      pathname: path.resolve(__dirname, "presentation", "index.html"),
      protocol: "file:",
      slashes: true
    })
  );
});
//Require a bunch of electron stuff
//wait until the app is ready
//once the app is ready, create a new browserWindow
//open up index.html in that BrowserWindow
