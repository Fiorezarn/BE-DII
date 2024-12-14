"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("Schedules", [
      {
        doctorId: 1,
        day: "monday",
        time_start: "09:00:00",
        time_finish: "12:00:00",
        quota: 10,
        status: true,
        date: "2024-12-18",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctorId: 1,
        day: "wednesday",
        time_start: "14:00:00",
        time_finish: "16:00:00",
        quota: 5,
        status: true,
        date: "2024-12-20",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        doctorId: 2,
        day: "tuesday",
        time_start: "10:00:00",
        time_finish: "12:00:00",
        quota: 8,
        status: true,
        date: "2024-12-19",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Schedules", null, {});
  },
};
