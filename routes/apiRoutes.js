var db = require("../models");
var bcrypt = require("bcrypt-nodejs");
module.exports = function(app) {
  app.get("/api/recipes/:id", function(req, res) {
    db.Recipes.findOne({
      where: {
        id: req.params.id
      }
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
    db.User.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  app.get("/api/users/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  app.get("/api/recipes", function(req, res) {
    db.Recipes.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/users", function(req, res) {
    db.User.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  app.post("/api/login", function(req, res) {
    db.User.findOne({
      where: {
        user_name: req.body.user_name
      }
    })
      .then(function(data) {
        if (data) {
          bcrypt.compare(req.body.password, data.password, function(
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
      .catch(function(err) {
        res.status(400).send(err);
      });
  });

  app.post("/api/recipes", function(req, res) {
    db.Recipes.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });
};
