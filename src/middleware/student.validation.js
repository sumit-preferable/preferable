const { check, validationResult } = require("express-validator");
const validateStudentCreation = [
  check("firstName").not().isEmpty().withMessage("First Name is required"),
  check("lastName").not().isEmpty().withMessage("Last Name is required"),
  check("email").isEmail().withMessage("Invalid email address"),
  check("contact").isMobilePhone().withMessage("Invalid contact number"),
  check("gender")
    .isIn(["male", "female", "other"])
    .withMessage("Invalid gender"),
  check("qualification")
    .not()
    .isEmpty()
    .withMessage("Qualification is required"),
  check("stream").not().isEmpty().withMessage("Stream is required"),
  check("college").not().isEmpty().withMessage("College is required"),
  check("passoutYear")
    .isInt({ min: 1900, max: new Date().getFullYear() })
    .withMessage("Invalid passout year"),
  check("state").not().isEmpty().withMessage("State is required"),
  check("postalCode").isPostalCode("any").withMessage("Invalid postal code"),
  check("referralSource")
    .not()
    .isEmpty()
    .withMessage("Referral Source is required"),
  check("course").not().isEmpty().withMessage("Course is required"),
  check("careerGoal").not().isEmpty().withMessage("Career Goal is required"),
  async (req, res, next) => {
    console.log('body :' , req.body)
    const errors = validationResult(req);
    return !errors.isEmpty()
      ? res.status(422).json({ errors: errors.array() })
      : next();
  },
];
module.exports = validateStudentCreation;
