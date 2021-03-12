// const { Sequelize } = require("sequelize");
const dbConfig = require("../config/db.config");
const Sequelize = require("sequelize");

const sequelize = new Sequelize(
    dbConfig.DB_DATABASE,
    dbConfig.DB_USER,
    dbConfig.DB_PASS,
    {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: 0,//false,

        pool: {
            max: dbConfig.POOL.max,
            min: dbConfig.POOL.min,
            acquire: dbConfig.POOL.acquire,
            idle: dbConfig.POOL.idle

        }
    }
);

const db = {}
db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("./tutorial.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);
db.role = require("./role.model.js")(sequelize, Sequelize);
db.lesson = require("./lesson.model")(sequelize, Sequelize);
db.slide = require("./slide.model")(sequelize, Sequelize);
db.question = require("./question.model")(sequelize, Sequelize);
db.answer = require("./answer.model")(sequelize, Sequelize);

db.role.belongsToMany(db.user, {
    through: "user_roles",
    foreignKey: "roleId",
    ortherKey: "userId"
});
db.user.belongsToMany(db.role, {
    through: "user_roles",
    foreignKey: "userId",
    ortherKey: "roleId"
});

db.ROLES = ["user", "admin", "moderator"];

db.slide.belongsTo(db.lesson, {
    foreignKey: "lessonId",
    onDelete: "CASCADE"
})

db.question.belongsToMany(db.lesson, {
    through: "lesson_questions",
    foreignKey: "questionId",
    ortherKey: "questionId",
    // ortherKey: { name: "id", type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true }
})

db.lesson.belongsToMany(db.question, {
    through: "lesson_questions",
    foreignKey: "lessonID",
    ortherKey: "questionId",
    // ortherKey: { name: "id", type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true }
})

db.answer.belongsTo(db.question, {
    foreignKey: "questionId"
})
module.exports = db