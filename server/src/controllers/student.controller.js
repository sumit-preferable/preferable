const studentModel = require("../models/student.schema");
const registerStudent = async (req, res) => {
  try {
    const isRegister = await studentModel.create(req.body);
    res.send(isRegister);
  } catch (error) {
    console.log("Error in register student controller :", error);
    error.code === 11000
      ? res.send(
          "Registration Error: Email or contact information is already registered."
        )
      : res.send(error);
  }
};

const getStudent = async (req, res) => {
  try {
    const students = await studentModel.find();
    students.length !== 0 ? res.send(students) : res.send("no data found");
  } catch (error) {
    console.log("Error in get student controller :", error);
    res.send(error);
  }
};
module.exports = { registerStudent, getStudent };
