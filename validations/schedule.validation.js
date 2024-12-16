const Joi = require("joi");
const {
  errorClientResponse,
  errorServerResponse,
} = require("@/helpers/response.helper");
const { Schedule } = require("@/models");
const { Op } = require("sequelize");
const { getDatesByDay } = require("@/utils/generateDateRange");

const scheduleValidation = (req, res, next) => {
  const schema = Joi.object({
    doctorId: Joi.number().required(),
    day: Joi.string().required(),
    time_start: Joi.string().required(),
    time_finish: Joi.string().required(),
    quota: Joi.number().required(),
    start_date: Joi.date().required(),
    end_date: Joi.date().required(),
  });

  const validationError = schema.validate(req.body).error;
  if (validationError) {
    return errorClientResponse(res, validationError.details[0].message);
  }
  next();
};

const checkDuplicate = async (req, res, next) => {
  try {
    const { doctorId, day, time_start, time_finish, start_date, end_date } =
      req.body;

    const existingSchedule = await Schedule.findOne({
      where: {
        [Op.and]: [
          { doctorId: doctorId },
          { day: day },
          { time_start: time_start },
          { time_finish: time_finish },
        ],
      },
    });

    if (existingSchedule) {
      return errorClientResponse(res, `Schedule already exists`, 400);
    }

    next();
  } catch (error) {
    console.error("Error checking duplicates:", error);
    return errorServerResponse(res, error.message);
  }
};

module.exports = { scheduleValidation, checkDuplicate };
