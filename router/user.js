const express = require("express");
const router = express.Router();
const controllers = require("../controllers/user.controllers");
const { registerRules, validatorRules } = require("../middleware/validator");
const isAuth = require("../middleware/passport");
// routes
// sign up
router.post("/register", registerRules(), validatorRules, controllers.register);
// sign in
router.post("/login", controllers.login);

router.get("/current", isAuth(), async (req, res) => {
  res.send(req.user);
});
module.exports = router;
