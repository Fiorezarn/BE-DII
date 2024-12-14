const { User } = require("@/models");
const bcrypt = require("bcrypt");
const {
  successResponseData,
  successResponse,
  errorServerResponse,
  errorClientResponse,
} = require("@/helpers/response.helper");
const generateToken = require("@/utils/generateToken");

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ where: { email: email } });
    const validPassword = await bcrypt.compare(password, user.password);
    if (!validPassword) {
      return errorClientResponse(res, "Invalid Password", 401, {
        type: "invalidpassword",
      });
    }

    const token = generateToken(user.id);
    user.dataValues.token = token;
    const options = {
      expires: new Date(Number(new Date()) + 24 * 60 * 60 * 1000),
      httpOnly: false,
    };

    return res.cookie("cookies", token, options).status(200).send({
      status: "success",
      message: "Login success!",
      code: 200,
      data: user,
    });
  } catch (error) {
    return errorServerResponse(res, error.message);
  }
};

const logout = async (req, res) => {
  try {
    res.clearCookie("cookies", {
      httpOnly: false,
    });
    return successResponse(res, "Logout success!");
  } catch (error) {
    return errorServerResponse(res, error.message);
  }
};

module.exports = { login, logout };
