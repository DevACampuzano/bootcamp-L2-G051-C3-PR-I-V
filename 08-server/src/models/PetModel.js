const { DataTypes, Sequelize } = require("sequelize");

module.exports = (sequelize = new Sequelize()) => {
  const Pet = sequelize.define(
    "Pet",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      nombre: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      especie: {
        type: DataTypes.STRING(500),
        allowNull: false,
      },
      raza: {
        type: DataTypes.STRING(500),
        allowNull: true,
      },
      id_usuario: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      estado: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      tableName: "Mascota",
      timestamps: false,
    }
  );

  Pet.associate = (models) => {
    Pet.belongsTo(models.userModel, {
      foreignKey: "id_usuario",
      as: "owner",
    });
    Pet.hasMany(models.quoteModel, {
      foreignKey: "id_mascota",
      as: "quote",
    });
  };

  return Pet;
};
