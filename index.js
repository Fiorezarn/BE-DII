require("dotenv").config();
const express = require("express");
require("module-alias/register");
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const baseUrl = process.env.BASE_URL;
const docterRoute = require("@/routes/docter.route");
const scheduleRoute = require("@/routes/schedule.route");
const authRoute = require("@/routes/auth.route");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");
const authentication = require("@/middleware/auth.middleware");

dotenv.config();

app.use(bodyParser.json());
app.use(cookieParser());

app.listen(port, () => {
  console.log(`Server running on ${baseUrl}:${port}`);
});

app.use("/doctor", authentication, docterRoute);
app.use("/schedule", authentication, scheduleRoute);
app.use("/auth", authRoute);
