"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const negocio = sequelize.define(
    "negocio",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      nombre: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      descripcion: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      tipo: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      direccion: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      latitud: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      longitud: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
    },
    {
      timestamps: false,
      tableName: "negocios",
    }
  );

  negocio.getNegocios = async (params) => {
    const query = ``;
    return await sequelize.query(query, {
      type: QueryTypes.SELECT,
    });
  };

  negocio.associate = function (models) {};

  return negocio;
};
