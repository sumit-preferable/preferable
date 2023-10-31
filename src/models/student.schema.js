const mongoose = require("mongoose");
const studentSchema = new mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true },
  contact: { type: String, unique: true },
  gender: String,
  qualification: String,
  stream: String,
  college: String,
  passoutYear: Number,
  state: String,
  postalCode: String,
  referralSource: String,
  course: String,
  careerGoal: String,
});
const Student = mongoose.model("Student", studentSchema);
module.exports = Student;
