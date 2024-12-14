"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Schedule extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Schedule.belongsTo(models.Doctor, {
        foreignKey: "doctorId",
        as: "doctor",
      });
    }
  }
  Schedule.init(
    {
      doctorId: {
        type: DataTypes.INTEGER,
      },
      day: {
        type: DataTypes.ENUM(
          "monday",
          "tuesday",
          "wednesday",
          "thursday",
          "friday",
          "saturday"
        ),
      },
      time_start: { type: DataTypes.TIME },
      time_finish: { type: DataTypes.TIME },
      quota: { type: DataTypes.INTEGER },
      status: { type: DataTypes.BOOLEAN },
      date: {
        type: DataTypes.DATE,
      },
    },
    {
      sequelize,
      modelName: "Schedule",
    }
  );
  return Schedule;
};
