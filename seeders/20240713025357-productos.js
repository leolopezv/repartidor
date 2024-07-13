'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let descripciones = ['Laptop', 'Mouse', 'Teclado', 'Monitor', 'Impresora', 'Disco Duro', 'Memoria RAM', 'Procesador', 'Tarjeta de Video', 'Tarjeta Madre'];
    let precios = [500, 20, 30, 200, 150, 100, 80, 300, 250, 150];
    let stock = [10, 100, 50, 20, 30, 40, 60, 10, 5, 10];

    for (let i = 0; i < descripciones.length; i++) {
      let descripcion = descripciones[i];
      let precio = precios[i];
      let cantidad = stock[i];
      await queryInterface.bulkInsert('productos', [{
        descripcion: descripcion,
        precio: precio,
        stock: cantidad,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('productos', null, {});
  }
};
