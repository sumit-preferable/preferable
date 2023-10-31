const mongoose = require("mongoose");
const { URI } = require("./env");
async function connect() {
  try {
    await mongoose.connect(URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Database Connected ✔✔");
  } catch (error) {
    console.log("Database  Not Connected 🧧");
  }
}
module.exports = connect;
