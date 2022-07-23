const { check } = require("express-validator/check");

//REGISTER ERRORS MIDDLEWARE
const registerErrors = [
  check("name")
    .not()
    .isEmpty()
    .isLength({ min: 6 })
    .withMessage("name must have at least 6 charcters"),
  check("password", "Your password must be at least 6 characters")
    .not()
    .isEmpty()
    .isLength({ min: 6 }),
  check("email", "Your email is not valid")
    .not()
    .isEmpty()
    .isEmail()
    .normalizeEmail(),
];

module.exports = {
  registerErrors,
};
