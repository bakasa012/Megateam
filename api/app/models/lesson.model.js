const {sequelize, Sequelize} = require("../models");

module.exports = (sequelize, Sequelize) => {
    const Lesson = sequelize.define("lesson",{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name:{
            type: Sequelize.STRING
        },
        description:{
            type: Sequelize.STRING,
        },
        createdBy: {
            type: Sequelize.STRING
        },
        updatedBy:{
            type: Sequelize.STRING
        }
    });
    return Lesson;
}