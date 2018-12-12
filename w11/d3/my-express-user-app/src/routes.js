const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const db = require("../models/index");

// console.log(db.User);

debugger;

const app = express();

app.set("view engine", "ejs");
app.set("views", path.resolve(__dirname, "..", "views"));

app.use(express.static(path.resolve(__dirname, "..", "public")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function(req, res) {
  res.render("pages/index");
});

app.get("/about", function(req, res) {
  res.render("pages/about");
});

app.get("/instruments/:name", function(req, res) {
  const { name } = req.params;
  res.render("pages/instrument", {
    name
  });
});

// We are creating a CRUD system with Node
// We are trying to be RESTful (resources)

app.post("/users", function(req, res) {
  const { firstName, lastName, email } = req.body;
  // res.send(firstName);

  db.User.create({
    firstName: firstName,
    lastName: lastName,
    email: email
  }).then(function(user) {
    res.redirect(`/user/${user.id}`);
  });
});

app.get("/users", function(req, res) {
  // Get all of the users out of the db
  db.User.findAll().then(function(users) {
    // console.log(JSON.stringify(users) );
    res.render("users/index", { users: users });
  });
});
app.post("/users/:id/delete", function (req, res) {
  // Get all of the users out of the db
  db.User.findByPk(req.params.id).then(function (user) {
    // console.log(JSON.stringify(users) );
    user.destroy();
    res.redirect("/users");
  });
});
app.get("/user/:id", function(req, res) {
  // Get all of the users out of the db
  db.User.findByPk(req.params.id).then(function(user) {
    // console.log(JSON.stringify(users) );
    res.render("users/show", { user: user, id: req.params.id });
  });
});


app.get("/users/new", function(req, res) {
  res.render("users/new");
});

module.exports = app;
