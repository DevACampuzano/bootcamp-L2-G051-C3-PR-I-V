const { Sequelize } = require("sequelize");
const functionModelUser = require("./UserModel");
const functionModelPet = require("./PetModel");
const functionModelQuote = require("./QuoteModel");

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
db.petModel = functionModelPet(sequelize);
db.quoteModel = functionModelQuote(sequelize);

// Ejecución manual
// db.petModel.associate(db);
// db.petModel.associate(db);

//Ejecución automatica
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate !== undefined) {
    db[modelName].associate(db);
  }
});

module.exports = { sequelize, db };
