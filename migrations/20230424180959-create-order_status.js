'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Order_statuses', {
      id_order: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        references: { model: "Orders", key: "id_order" },
        allowNull: false
      },
      time_create: {
        type: Sequelize.DATE,
      },
      time_receive: {
        type: Sequelize.DATE
      },
      time_received: {
        type: Sequelize.DATE
      },
      time_delivery: {
        type: Sequelize.DATE
      },
      time_delivered: {
        type: Sequelize.DATE
      },
      time_warehouse: {
        type: Sequelize.DATE
      },
      id_shipper_receive: {
        type: Sequelize.INTEGER
      },
      id_shipper_delivery: {
        type: Sequelize.INTEGER
      },
      time_confirm: {
        type: Sequelize.DATE
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Order_statuses');
  }
};