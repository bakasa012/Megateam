const { sequelize, Sequelize } = require("../models");

module.exports = (sequelize, Sequelize) => {
    const Role = sequelize.define("roles", {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: Sequelize.STRING
        }
    });
    Role.sync().then(() => {
        Role.findOrCreate({
            where: { name: "user" }
        });

        Role.findOrCreate({
            where: { name: "moderator" }
        });

        Role.findOrCreate({
            where: { name: "admin" }
        });
    })
    return Role;
}