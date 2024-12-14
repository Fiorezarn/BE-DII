const { getDoctor, createDoctor } = require("@/controllers/docter.controller");
const {
  doctorValidation,
  checkDuplicate,
} = require("@/validations/doctor.validation");
const express = require("express");
const router = express.Router();

router.get("/", getDoctor);
router.post("/", doctorValidation, checkDuplicate, createDoctor);

module.exports = router;
