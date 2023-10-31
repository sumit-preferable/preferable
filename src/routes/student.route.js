const { Router } = require("express");
const { registerStudent, getStudent } = require("../controllers/student.controller");
const validateStudentCreation = require("../middleware/student.validation");
const router = Router();
router.get("/student", getStudent);
router.post("/register-student", validateStudentCreation, registerStudent);
module.exports = router;
