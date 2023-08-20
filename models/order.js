'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Shipper, Customer, Type,Order_status}) {
      this.belongsTo(Shipper, { foreignKey: "id_shipper" });
      this.belongsTo(Customer, { foreignKey: "id_customer" });
      this.belongsTo(Type, { foreignKey: "id_type" });
      this.hasOne(Order_status, { foreignKey: "id_order" });
    }
  }
  Order.init({
    id_order: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    time_create: DataTypes.DATE,
    time_receive: DataTypes.DATE,
    time_delivery: DataTypes.DATE,
    time_delivered: DataTypes.DATE,
    delivery_fee: DataTypes.INTEGER,
    item_fee: DataTypes.INTEGER,
    phone_receive: DataTypes.STRING,
    address_receive: DataTypes.STRING,
    address_delivery: DataTypes.STRING,
    weight: DataTypes.STRING,
    total: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    description: DataTypes.STRING,
    reason: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Order',
    timestamps: false,
  });
  return Order;
};