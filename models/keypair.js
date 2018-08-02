module.exports = function(sequelize, DataTypes) {
  var KeyPair = sequelize.define("KeyPair", {
    // the name of the character (a string)
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    recipe_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });
  return KeyPair;
};
