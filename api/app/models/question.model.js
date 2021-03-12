const {sequelize, Sequelize} = require("../models");

module.exports = (sequelize, Sequelize) => {
    const Question = sequelize.define("question",{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // lesson_id:{
        //     type:Sequelize.STRING
        // },
        content:{
            type: Sequelize.TEXT,
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
    return Question;
}