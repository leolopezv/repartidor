'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.addConstraint('productopedidos', {
      fields: ['producto_id'],
      type: 'foreign key',
      name: 'producto_id',
      references: {
        table: 'productos',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
    await queryInterface.addConstraint('productopedidos', {
      fields: ['pedido_id'],
      type: 'foreign key',
      name: 'pedido_id',
      references: {
        table: 'pedidos',
        field: 'id'
      },
      onDelete: 'cascade',
      onUpdate: 'cascade'
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.removeConstraint('productopedidos', 'producto_id');
    await queryInterface.removeConstraint('productopedidos', 'pedido_id');
  }
};
