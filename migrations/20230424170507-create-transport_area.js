'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Transport_areas', {
      id_shipper: {
        primaryKey: true,
        type: Sequelize.INTEGER,
        references: { model: "Shippers", key: "id_shipper" },
        allowNull: false
      },
      area: {
        type: Sequelize.STRING,
        allowNull: false
      },
      route: {
        type: Sequelize.STRING,
        allowNull: true
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Transport_areas');
  }
};