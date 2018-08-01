var db = require("../models");
var bcrypt = require("bcrypt-nodejs");
module.exports = function(app) {
  app.get("/api/recipes/:id", function(req, res) {
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
      app.post("/api/login", function (req, res) {
        db.User.findOne({
          where: {
            user_name: req.body.user_name
          }
        })
          .then(function (data) {
            if (data) {
              bcrypt.compare(req.body.password, data.password, function (
                err,
                response
              ) {
                if (response) {
                  res.json(data);
                } else {
                  res
                    .status(400)
                    .json({ message: "Wrong password", success: false });
                }
              });
            } else {
              res.status(404).send("No user found");
            }
          })
          .catch(function (err) {
            res.status(400).send(err);
          });
      });
    });
  });
};
