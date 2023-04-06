'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Aeronave extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Aeronave.init({
    modeloAeronave: DataTypes.STRING,
    totalAssentos: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Aeronave',
  });
  return Aeronave;
};