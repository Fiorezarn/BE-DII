"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Doctors", [
      { name: "Dr. John Doe", createdAt: new Date(), updatedAt: new Date() },
      { name: "Dr. Jane Smith", createdAt: new Date(), updatedAt: new Date() },
      {
        name: "Dr. Alice Johnson",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Doctors", null, {});
  },
};
