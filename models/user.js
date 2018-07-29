
import bcrypt from 'bcrypt-nodejs'

module.exports = function (sequelize, DataTypes) {
    var User = sequelize.define("User", {
        // the name of the character (a string)
        user_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return User;
};


User.beforeCreate(function (user, options) {
    return cryptPassword(user.password)
        .then(success => {
            user.password = success;
        })
        .catch(err => {
            if (err) console.log(err);
        });
});

function cryptPassword(password) {
    console.log("cryptPassword" + password);
    return new Promise(function (resolve, reject) {
        bcrypt.genSalt(10, function (err, salt) {
            // Encrypt password using bycrpt module
            if (err) return reject(err);

            bcrypt.hash(password, salt, null, function (err, hash) {
                if (err) return reject(err);
                return resolve(hash);
            });
        });
    });
};