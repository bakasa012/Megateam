const { sequelize, Sequelize } = require("../models");

module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("users", {
        username: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        password: {
            type: Sequelize.STRING
        },
        firstName: {
            type: Sequelize.STRING,
            defaultValue: "First Name"
        },
        lastName: {
            type: Sequelize.STRING,
            defaultValue: "Last Name",
        },
        avatar: {
            type: Sequelize.STRING,
            defaultValue: "/images/avatars/avatar_11.png",
        },
        bio: {
            type: Sequelize.STRING,
            defaultValue: "Bio",
        }
    });
    return User;
}