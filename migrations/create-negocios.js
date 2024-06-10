'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('negocios', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nombre: {
        type: Sequelize.STRING(50)
      },
      descripcion: {
        type: Sequelize.STRING(50)
      },
      tipo: {
        type: Sequelize.STRING(50)
      },
      direccion: {
        type: Sequelize.STRING(50)
      },
      latitud: {
        type: Sequelize.STRING(50)
      },
      longitud: {
        type: Sequelize.STRING(50)
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('negocios');
  }
};