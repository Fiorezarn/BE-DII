const Joi = require("joi");
const {
  errorClientResponse,
  errorServerResponse,
} = require("@/helpers/response.helper");
const { Doctor } = require("@/models");

const doctorValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().required(),
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

module.exports = { doctorValidation, checkDuplicate };
