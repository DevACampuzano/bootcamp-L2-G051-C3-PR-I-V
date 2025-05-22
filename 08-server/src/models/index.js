const { Sequelize } = require("sequelize");
const functionModelUser = require("./UserModel");
const sequelize = new Sequelize("Veterinaria", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});
const db = {};

db.userModel = functionModelUser(sequelize);

module.exports = { sequelize, db };
