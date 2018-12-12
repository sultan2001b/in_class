const path = require("path");
const express = require("express");
//Very similar to import
//
//npm install --save express
//
//1. Downloaded express from NPM
//2. Added

const app = express();
// Create a new app where we can

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "..", "views"));
app.use(express.static(path.resolve(__dirname, "..", "public")));

app.get("/", function(request, response) {
  //   response.send("Hello World");
  response.render("pages/index");
});
// This is our routes.rb file and our controllers
// If an HTTP GET request comes in and the path is / or empty, call this function
// Send back the plain text "Hello World" as HTTP Response

app.get("/home", function(req, res) {
  res.send("GET Request to /home");
});

app.get("/about", function(req, res) {
  //   res.send("GET Request to /about");
  res.render("pages/about");
});

app.get("/contact", function(req, res) {
  res.send("<h1>Contact Page was reached</h1>");
});

app.get("/json", function(req, res) {
  const data = { name: "jaqus", age: 42 };

  res.json(data);
});

app.get("/hello/:name", function(req, res) {
  const { name } = req.params;
  res.render("pages/hello",{name: name});
});

app.get("/color/:color", function (req, res) {
    const { color } = req.params;
    res.render("pages/color", { color: color });
});

app.listen(3000, function() {
  console.log("Open up localhost:3000");
});
// start the server on port 3000
