'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let [productos, productos_metadata] = await queryInterface.sequelize.query(
      'SELECT id FROM productos;'
    );
    let [pedidos, pedidos_metadata] = await queryInterface.sequelize.query(
      'SELECT id FROM pedidos;'
    );
    let entries = [];

    for (let i = 0; i < 10; i++) {
      let producto_id = productos[Math.floor(Math.random() * productos.length)].id;
      let pedido_id = pedidos[Math.floor(Math.random() * pedidos.length)].id;
      let cantidad = Math.floor(Math.random() * 10) + 1; 
      let precio = Math.random() * 100 + 1; 

      entries.push({
        producto_id: producto_id,
        pedido_id: pedido_id,
        cantidad: cantidad,
        precio: precio,
        createdAt: new Date(),
        updatedAt: new Date()
      });
    }

    await queryInterface.bulkInsert('productopedidos', entries, {});
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('productopedidos', null, {});
  }
};
