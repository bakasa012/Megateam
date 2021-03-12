// require('dotenv').config();
module.exports = {
  HOST: "localhost",
  DB_USER: "root",
  DB_PASS: "",
  DB_DATABASE: "megateam",
  dialect: "mysql",
  POOL: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};