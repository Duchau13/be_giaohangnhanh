'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order_status extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Order}) {
      this.belongsTo(Order, { foreignKey: "id_order" });
    }
  }
  Order_status.init({
    id_order: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    time_create: DataTypes.DATE,
    time_receive: DataTypes.DATE,
    time_received: DataTypes.DATE,
    time_delivery: DataTypes.DATE,
    time_warehouse: DataTypes.DATE,
    time_delivered: DataTypes.DATE,
    id_shipper_receive: DataTypes.INTEGER,
    id_shipper_delivery: DataTypes.INTEGER,
    time_confirm: DataTypes.DATE,
  }, {
    sequelize,
    modelName: 'Order_status',
    timestamps: false,
  });
  return Order_status;
};