const { check, validationResult } = require("express-validator");
exports.registerRules = () => [
  check("name", "this field is required").notEmpty(),
  check("email", "this should be a valid email").isEmail(),
  check("email", "this field is required").notEmpty(),
  check("password", "this field is required").notEmpty(),
  check("password", "this field should be at least 8 char").isLength({
    min: 8,
    max: 16,
  }),
];

exports.validatorRules = (req, res, next) => {
  const errors = validationResult(req);
  errors.isEmpty() ? next() : res.status(400).json({ error: errors.array() });
};
