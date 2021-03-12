// require('dotenv').config();
module.exports = {
  HOST: "localhost",//process.env.HOST || 
  DB_USER: process.env.DB_USER || "root",
  DB_PASS: "",
  DB_DATABASE: "testdb",//process.env.DB_DATABASE || 
  dialect: "mysql",
  POOL: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};

// const sequelize = new Sequelize(APP_DB_URL, {
//   logging: false,
//   dialectOptions: {
//     dateStrings: true,
//     typeCast: true,
//   },
// }