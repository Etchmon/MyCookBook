
module.exports = function (sequelize, DataTypes) {
  var Character = sequelize.define("Character", {
    // the name of the character (a string)
    character_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // the character's gender (a string)
    gender: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // the character's occupaton (a string)
    occupaton: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // the character's health (an integer)
    health: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    // the character's level (an integer)
    character_level: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    // the name of the user (a string)
    user_name_character: {
      type: DataTypes.STRING,
      allowNull: false,
  }
  });
  return Character;
};
