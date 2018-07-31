var db = require("../models");
var path = require("path");
module.exports = function(app) {
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add.html"));
  });

  app.get("/browse", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/browse.html"));
  });

  app.get("/cookbook", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/cookbook.html"));
  });

  app.get("/home", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });

  app.get("/viewRecipe", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/viewRecipe.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/404.html"));
  });

  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add.html"));
  });
};
