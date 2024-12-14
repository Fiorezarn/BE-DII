const { Doctor, Schedule } = require("@/models");
const {
  successResponseData,
  errorServerResponse,
} = require("@/helpers/response.helper");
const { Op } = require("sequelize");

const createSchedule = async (req, res) => {
  try {
    const { doctorId, day, time_start, time_finish, quota, date } = req.body;
    const data = await Schedule.create({
      doctorId: doctorId,
      day: day,
      time_start: time_start,
      time_finish: time_finish,
      quota: quota,
      date: date,
    });
    return successResponseData(res, data);
  } catch (error) {
    return errorServerResponse(res, error);
  }
};

const getSchedule = async (req, res) => {
  try {
    const { startDate, endDate } = req.query;

    const whereCondition = {};
    if (startDate && endDate) {
      whereCondition.date = {
        [Op.between]: [new Date(startDate), new Date(endDate)],
      };
    } else if (startDate) {
      whereCondition.date = {
        [Op.gte]: new Date(startDate),
      };
    } else if (endDate) {
      whereCondition.date = {
        [Op.lte]: new Date(endDate),
      };
    }

    const data = await Schedule.findAll({
      attributes: ["id", "day", "time_start", "time_finish", "quota", "date"],
      include: [
        {
          attributes: ["name"],
          model: Doctor,
          as: "doctor",
        },
      ],
      where: whereCondition,
    });

    return successResponseData(res, data);
  } catch (error) {
    return errorServerResponse(res, error.message);
  }
};

module.exports = {
  createSchedule,
  getSchedule,
};
