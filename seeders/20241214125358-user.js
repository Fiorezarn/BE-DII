"use strict";

const bcrypt = require("bcrypt");
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Users", [
      {
        name: "admin1",
        email: "admin123@gmail.com",
        password: bcrypt.hashSync("password123", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "admin2",
        email: "admin1234@gmail.com",
        password: bcrypt.hashSync("password456", 10),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
