
module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        // the name of the character (a string)
        user_name: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });
    return User;
};
