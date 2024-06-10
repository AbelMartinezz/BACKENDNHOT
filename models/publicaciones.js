"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const publicacion = sequelize.define(
    "publicacion",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fk_usuario: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "usuario",
          key: "id",
        }
      },
      fecha: {
        allowNull: false,
        type: DataTypes.DATEONLY,
      },
      contenido: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
    },
    {
      timestamps: false,
      tableName: "publicaciones",
    }
  );

  publicacion.getPublicaciones = async (params) => {
    const query = ``;
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  publicacion.associate = function (models) {};

  return publicacion;
};

