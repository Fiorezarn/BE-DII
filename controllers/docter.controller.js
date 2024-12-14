const { Doctor, Schedule } = require("@/models");
const {
  successResponseData,
  successResponse,
  errorServerResponse,
  errorClientResponse,
} = require("@/helpers/response.helper");

const getDoctor = async (req, res) => {
  try {
    const data = await Doctor.findAll({
      attributes: ["id", "name"],
      include: [
        {
          model: Schedule,
          as: "schedules",
        },
      ],
    });
    return successResponseData(res, data);
  } catch (error) {
    return errorServerResponse(res, error);
  }
};

const createDoctor = async (req, res) => {
  try {
    const { name } = req.body;
    const data = await Doctor.create({ name: name });
    return successResponseData(res, data);
  } catch (error) {
    return errorServerResponse(res, error);
  }
};

module.exports = {
  getDoctor,
  createDoctor,
};
