const { Doctor, Schedule } = require("@/models");
const {
  successResponseData,
  errorServerResponse,
  errorClientResponse,
} = require("@/helpers/response.helper");
const { Op } = require("sequelize");
const { getDatesByDay } = require("@/utils/generateDateRange");

const createSchedule = async (req, res) => {
  try {
    const {
      doctorId,
      day,
      time_start,
      time_finish,
      quota,
      start_date,
      end_date,
    } = req.body;
    const daterange = getDatesByDay(start_date, end_date, day);
    if (daterange.length === 0) {
      return errorClientResponse(
        res,
        "No matching dates found for the specified day."
      );
    }
    const schedules = daterange.map((date) => ({
      doctorId,
      day,
      date,
      status: true,
      time_start,
      time_finish,
      quota,
    }));
    const data = await Schedule.bulkCreate(schedules);
    return successResponseData(res, data);
  } catch (error) {
    console.log(error);
    return errorServerResponse(res, error);
  }
};

const getSchedule = async (req, res) => {
  try {
    const data = await Schedule.findAll({
      attributes: ["id", "day", "time_start", "time_finish", "quota", "date"],
      include: [
        {
          attributes: ["name"],
          model: Doctor,
          as: "doctor",
        },
      ],
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
