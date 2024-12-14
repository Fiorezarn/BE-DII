const Joi = require("joi");
const {
  errorClientResponse,
  errorServerResponse,
} = require("@/helpers/response.helper");
const { Schedule } = require("@/models");

const scheduleValidation = (req, res, next) => {
  const schema = Joi.object({
    doctorId: Joi.number().required(),
    day: Joi.string().required(),
    time_start: Joi.string().required(),
    time_finish: Joi.string().required(),
    quota: Joi.number().required(),
    date: Joi.date().required(),
  });

  const validationError = schema.validate(req.body).error;
  if (validationError) {
    return errorClientResponse(res, validationError.details[0].message);
  }
  next();
};

const checkDuplicate = async (req, res, next) => {
  try {
    const { name } = req.body;
    const data = await Doctor.findOne({ where: { name: name } });
    if (data) {
      return errorClientResponse(res, "Name already exist", 400);
    }
    next();
  } catch (error) {
    return errorServerResponse(res, error.message);
  }
};

module.exports = { scheduleValidation, checkDuplicate };
