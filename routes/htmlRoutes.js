var db = require("../models");
<<<<<<< HEAD
=======
var path = require("path");
>>>>>>> 39a5806e009c241718ea2c2bef549d74c8c32cc0

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
