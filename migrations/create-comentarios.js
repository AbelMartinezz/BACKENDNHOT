'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('comentarios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fk_publicacion: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "publicaciones"
          }
        }
      },
      fk_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "usuarios"
          }
        }
      },
      contenido: {
        type: Sequelize.STRING(50),
      },
      fecha: {
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('comentarios');
  }
};