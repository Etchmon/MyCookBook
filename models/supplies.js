
module.exports = function (sequelize, DataTypes) {
  var Supplies = sequelize.define("Supplies", {
    // the name of the character (a string)
    character_name_supplies: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    // the character's number of oxen (an integer)
    oxen: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    // the character's number of wagon(s) (an integer)
    wagons: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    // the character's spare wagon parts (an integer)
    spare_wagon_parts: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    // the character's sets of clothing (an integer)
    clothing_sets: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    // the character's number of bullets (an integer)
    bullets: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    // the character's pounds of food (an integer)
    food_lbs: {
      type: DataTypes.INTEGER,
      defaultValue: 0
    },
    // the character's cash in dollars (an integer)
    cash: {
      type: DataTypes.FLOAT,
      defaultValue: 0
    }
  });
  return Supplies;
};
