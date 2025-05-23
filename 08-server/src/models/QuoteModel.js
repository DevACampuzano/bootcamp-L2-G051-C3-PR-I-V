const { DataTypes, Sequelize } = require("sequelize");
module.exports = (sequelize = new Sequelize()) => {
  const Quote = sequelize.define(
    "Quote",
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      fecha: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      id_veterinario: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      id_mascota: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      historia_clinica: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
      fecha_fin: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      estado: {
        type: DataTypes.TINYINT,
        allowNull: false,
        defaultValue: 1,
      },
    },
    {
      tableName: "Citas",
      timestamps: false,
    }
  );

  Quote.associate = (models) => {
    Quote.belongsTo(models.userModel, {
      foreignKey: "id_veterinario",
      as: "vet",
    });

    Quote.belongsTo(models.petModel, {
      foreignKey: "id_mascota",
      as: "pet",
    });
  };

  return Quote;
};
