const { login, logout } = require("@/controllers/auth.controller");
const express = require("express");
const router = express.Router();

router.post("/login", login);
router.get("/logout", logout);

module.exports = router;
