const express = require("express");
const router = express.Router();
const controllers = require("../controllers/user.controllers");
const { registerRules, validatorRules } = require("../middleware/validator");

// routes
// sign up
router.post("/register", registerRules(), validatorRules, controllers.register);
// sign in
router.post("/login", controllers.login);

module.exports = router;
