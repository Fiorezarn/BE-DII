const jwt = require("jsonwebtoken");
const { errorClientResponse } = require("@/helpers/response.helper");
const authentication = async (req, res, next) => {
  try {
    const token = req.cookies.cookies;
    if (!token) {
      return errorClientResponse(res, "Unauthorized", 401);
    }
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    console.log(error.message);
    return res.status(403).json({ message: "Invalid token" });
  }
};

module.exports = authentication;
