const {sequelize, Sequelize} = require("../models");

module.exports = (sequelize, Sequelize) => {
    const Answer = sequelize.define("answer",{
        id:{
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        // question_id:{
        //     type:Sequelize.STRING
        // },
        content:{
            type: Sequelize.TEXT,
        },
        answer_true:{
            type:Sequelize.BOOLEAN,
            defaultValue:false,
        },
        createdBy: {
            type: Sequelize.STRING
        },
        updatedBy:{
            type: Sequelize.STRING
        }
    });
    return Answer;
}