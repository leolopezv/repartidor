'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    let nombres = ['Juan', 'Pedro', 'Maria', 'Jose', 'Ana', 'Luis', 'Carlos', 'Andres', 'Sara', 'Laura'];
    let apellidos = ['Perez', 'Gomez', 'Gonzalez', 'Rodriguez', 'Fernandez', 'Lopez', 'Martinez', 'Sanchez', 'Diaz', 'Torres'];

    for (let i = 0; i < nombres.length; i++) {
      let nombre = nombres[i];
      let apellido = apellidos[i];
      await queryInterface.bulkInsert('clientes', [{
        nombre: nombre,
        apellido: apellido,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    }
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('clientes', null, {});
  }
};
