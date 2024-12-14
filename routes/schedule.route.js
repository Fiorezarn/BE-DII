const {
  getSchedule,
  createSchedule,
} = require("@/controllers/schedule.controller");
const { scheduleValidation } = require("@/validations/schedule.validation");
const express = require("express");
const router = express.Router();

router.get("/", getSchedule);
router.post("/", scheduleValidation, createSchedule);

module.exports = router;
