'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pedido extends Model {
    static associate(models) {
      pedido.belongsTo(models.cliente, {
        foreignKey: 'cliente_id',
        as: 'cliente'
      });
      pedido.belongsToMany(models.producto, {
        through: 'productopedidos',
        foreignKey: 'pedido_id',
        as: 'productos'
      });
    }
  }
  pedido.init({
    cliente_id: DataTypes.INTEGER,
    fecha: DataTypes.DATE,
    estado: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pedido',
    tableName: 'pedidos',
  });
  return pedido;
};
