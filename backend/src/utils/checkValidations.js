const { validationResult } = require('express-validator');

const checkValidations = (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const encounteredErrors = errors.array();
    console.warn(`------------ VALIDATION FAILURE ---------------`);
    encounteredErrors.forEach((error) => console.warn(error.msg));
    return res.status(400).json({
        success: false,
        errors,
    });
  }
  next ();
};

module.exports = checkValidations;
