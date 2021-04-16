// require('dotenv').config();
module.exports = {
  HOST: "remotemysql.com",//"localhost",
  DB_USER: "QonIsQd4Vi",
  DB_PASS: "Uasd2vW1dw",
  DB_DATABASE: "QonIsQd4Vi",
  dialect: "mysql",
  POOL: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};