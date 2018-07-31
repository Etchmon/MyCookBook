module.exports = function(sequelize, DataTypes) {
  var Recipes = sequelize.define("Recipes", {
    // the name of the character (a string)
    recipeName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false
    },
    instructions: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  return Recipes;
};
