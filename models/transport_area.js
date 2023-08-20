'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Transport_area extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({Shipper}) {
      this.belongsTo(Shipper, { foreignKey: "id_shipper" });
    }
  }
  Transport_area.init({
    id_shipper: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    area: DataTypes.STRING,
    route: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Transport_area',
    timestamps: false,
  });
  return Transport_area;
};