var db = require("../models");

module.exports = function (app) {
  app.get("/api/recipes/:id", function (req, res) {
    db.Recipes.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbRecipe) {
      res.json(dbRecipe);
    });
  });

  // Post route for saving a new Key Pair
  app.post("/api/newKeyPair", function (req, res) {
    db.KeyPair.create(req.body).then(function (dataKeyPair) {
      res.json(dataKeyPair);
    });
  });

  // Get all users
  app.get("/api/users", function (req, res) {
    db.User.findOne({
      where: {
        user_name: req.body.user_name,
        password: req.body.password
      }
    }).then(function (dbUsers) {
      res.json(dbUsers);
    });
  });

  app.get("/api/recipes", function (req, res) {
    db.Recipes.findAll({}).then(function (dbRecipes) {
      res.json(dbRecipes);
    });
  });

  // Create a new user
  app.post("/api/users", function (req, res) {
    db.User.create(req.body).then(function (dbUser) {
      res.json(dbUser);
    });
  });

  app.post("/api/recipes", function (req, res) {
    db.Recipes.create({

      recipeName: req.body.recipeName,
      ingredients: req.body.ingredients,
      instructions: req.body.instructions

    }).then(function (dbRecipe) {
      db.KeyPair.create({

        user_id: req.body.userid,
        recipe_id: dbRecipe.id

      }).then(function (dataKeyPair) {
        res.json(dataKeyPair);
      });
    });
  });
};
