"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const evento = sequelize.define(
    "evento",
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
      fecha: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      descripcion: {
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
      tableName: "eventos", // Nombre de la tabla corregido
    }
  );

  evento.getEventos = async (params) => {
    const query = ``;
    return await sequelize.query(query, {
      type: QueryTypes.SELECT, // Se corrigió el nombre de la constante QueryTypes
    });
  };

  evento.associate = function (models) {
    // Si hay asociaciones, deberían definirse aquí
  };

  return evento;
};
