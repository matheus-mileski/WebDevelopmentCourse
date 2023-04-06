'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('Aeronaves', [{
      modeloAeronave: 'Airbus A220-100',
      totalAssentos: 110,
      createdAt: new Date(),
      updatedAt: new Date()
     }, {
      modeloAeronave: 'Airbus A220-300',
      totalAssentos: 100,
      createdAt: new Date(),
      updatedAt: new Date()
     }], {});
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
