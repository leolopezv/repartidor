'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class cliente extends Model {
    static associate(models) {
      cliente.hasMany(models.pedido, {
        foreignKey: 'cliente_id',
        as: 'pedidos'
      });
    }
  }
  cliente.init({
    nombre: DataTypes.STRING,
    apellido: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'cliente',
    tableName: 'clientes',
  });
  return cliente;
};
