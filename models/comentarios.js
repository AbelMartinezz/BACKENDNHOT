"use strict";

const { QueryTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const comentario = sequelize.define(
    "comentario",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      fk_publicacion: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "publicaciones",
          key: "id",
        }
      },
      fk_usuario: {
        allowNull: false,
        type: DataTypes.INTEGER,
        references: {
          model: "usuarios",
          key: "id",
        }
      },
      contenido: {
        allowNull: false,
        type: DataTypes.STRING(50),
      },
      fecha: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      
    },
    {
      timestamps: false,
      tableName: "comentarios",
    }
  );

  comentario.getComentarios = async (params) => {
    const query = ``;
    return await sequelize.query(query, {
      type: sequelize.QueryTypes.SELECT,
    });
  };

  comentario.associate = function (models) {
    // comentario.hasMany(models.materias, {
    //   foreignKey: "fk_materia",
    //   as: "materias",
    // });
  };

  return comentario;
};



