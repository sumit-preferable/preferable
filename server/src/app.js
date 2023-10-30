const express = require("express");
const app = express();
const port = process.env.port || 3000;
const connectToDatabase = require("./config/database");
connectToDatabase();
app.use(express.json());
const studentRoutes = require("./routes/student.route");
app.use("/api", studentRoutes);
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
