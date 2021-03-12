const {sequelize, Sequelize} = require("../models");

module.exports = (sequelize, Sequelize) => {
    const Slide = sequelize.define("slide",{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // lesson_id:{
        //     type:Sequelize.STRING
        // },
        text:{
            type: Sequelize.TEXT,
        },
        media:{
            type: Sequelize.STRING,
        },
        type:{
            type:Sequelize.STRING,
        },
        order:{
            type:Sequelize.INTEGER
        },
        createdBy: {
            type: Sequelize.STRING
        },
        updatedBy:{
            type: Sequelize.STRING
        }
    });
    return Slide;
}