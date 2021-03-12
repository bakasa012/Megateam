const { sequelize, Sequelize } = require("../models");

module.exports =(sequelize, Sequelize)=>{
    const Toturial = sequelize.define("tutorial",{
        title: {
            type: Sequelize.STRING,
        },
        description: {
            type: Sequelize.STRING,
        },
        published: {
            type: Sequelize.BOOLEAN,
        }
    });
    return Toturial;
}