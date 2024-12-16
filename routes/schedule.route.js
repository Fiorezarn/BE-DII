const {
  getSchedule,
  createSchedule,
} = require("@/controllers/schedule.controller");
const {
  scheduleValidation,
  checkDuplicate,
} = require("@/validations/schedule.validation");
const express = require("express");
const router = express.Router();

router.get("/", getSchedule);
router.post("/", scheduleValidation, checkDuplicate, createSchedule);

module.exports = router;
