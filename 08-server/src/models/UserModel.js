const { DataTypes, Sequelize } = require("sequelize");
/**
 * 
 * create table Usuarios (
	id int not null auto_increment,
    nombre varchar(500) not null,
    apellido varchar(500) not null,
    documento varchar(500) not null,
    rol enum('owner', 'vet') not null,
    password varchar(500) not null,
    estado bool default true not null,
    primary key (id)
); 
 */
module.exports = (sequelize = new Sequelize()) => {
  const User = sequelize.define(
    "User",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      nombre: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      apellido: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      documento: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      rol: {
        type: DataTypes.ENUM("owner", "vet"),
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      estado: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      tableName: "Usuarios",
      timestamps: false,
    }
  );

  return User;
};
