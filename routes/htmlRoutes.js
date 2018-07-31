var db = require("../models");
var path = require("path");
module.exports = function(app) {

  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add.html"));
  });

  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/404.html"));
  });

  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/add.html"));
  });
};
