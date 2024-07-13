'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let [clientes, clientes_metadata] = await queryInterface.sequelize.query(
      'SELECT id FROM clientes;'
    );
    let estados = ['pendiente', 'enviado', 'entregado'];

    for (let i = 0; i < 10; i++) {
      let cliente_id = clientes[Math.floor(Math.random() * clientes.length)].id;
      let estado = estados[Math.floor(Math.random() * estados.length)];
      await queryInterface.bulkInsert('pedidos', [{
        cliente_id: cliente_id,
        fecha: new Date(),
        estado: estado,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('pedidos', null, {});
  }
};
