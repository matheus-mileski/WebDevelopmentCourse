'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class ReservaVoo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ReservaVoo.init({
    aeroportoOrigem: DataTypes.STRING,
    aeroportoDestino: DataTypes.STRING,
    horarioPartida: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'ReservaVoo',
  });
  return ReservaVoo;
};