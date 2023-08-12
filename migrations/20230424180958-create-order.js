'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Orders', {
      id_order: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      id_customer: {
        type: Sequelize.INTEGER,
        references: { model: "Customers", key: "id_customer" },
        allowNull: false
      },
      id_type: {
        type: Sequelize.INTEGER,
        references: { model: "Types", key: "id_type" },
        allowNull: false
      },
      id_shipper: {
        type: Sequelize.INTEGER,
        references: { model: "Shippers", key: "id_shipper" },
      },
      time_create: {
        type: Sequelize.DATE,
      },
      time_receive: {
        type: Sequelize.DATE
      },
      time_delivery: {
        type: Sequelize.DATE
      },
      time_delivered: {
        type: Sequelize.DATE
      },
      delivery_fee: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      item_fee: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      total: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      status: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      description: {
        type: Sequelize.STRING
      },
      phone_receive: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address_receive: {
        type: Sequelize.STRING,
        allowNull: false
      },
      address_delivery: {
        type: Sequelize.STRING,
        allowNull: false
      },
      weight: {
        type: Sequelize.STRING,
        allowNull: false
      },
      reason: {
        type: Sequelize.STRING,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Orders');
  }
};