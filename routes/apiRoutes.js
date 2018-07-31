var db = require("../models");

module.exports = function(app) {
  // Get route for retrieving a single recipe
  app.get("/api/showRecipe:id", function(req, res) {
    db.Recipes.findOne({
      where: {
        id: req.params.id,
      },
    }).then(function(dataOneRecipe) {
      res.json(dataOneRecipe);
    });
  });

  // Post route for saving a new Key Pair
  app.post("/api/newKeyPair", function(req, res) {
    db.KeyPair.create(req.body).then(function(dataKeyPair) {
      res.json(dataKeyPair);
    });
  });

  // Get all examples
  app.get("/api/users", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(
      dbExample,
    ) {
      res.json(dbExample);
    });
  });

  app.post("/api/character", function(req, res) {
    var userId = req.body.userId;
    db.Character.create({
      name: req.body.name,
      userId: userId,
    });
  });
};
