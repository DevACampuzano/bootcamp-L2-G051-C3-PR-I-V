const { Sequelize } = require("sequelize");
const functionModelUser = require("./UserModel");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);
const db = {};

db.userModel = functionModelUser(sequelize);

module.exports = { sequelize, db };
