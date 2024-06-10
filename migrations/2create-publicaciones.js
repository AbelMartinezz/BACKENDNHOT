'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('publicaciones', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fk_usuario: {
        type: Sequelize.INTEGER,
        references: {
          model: {
            tableName: "usuarios"
          }
        }
      },
      fecha: {
        type: Sequelize.DATEONLY,
      },
      contenido: {
        type: Sequelize.STRING(50),
      },

    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('publicaciones');
  }
};