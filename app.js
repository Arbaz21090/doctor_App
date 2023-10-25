/** @format */

const express = require("express");
const cors = require("cors");
const colors = require("colors");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config();
const port = process.env.PORT || 3300;
const AppError = require("./utils/appError");
const connectDatabase = require("./config/database");
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "./client/build")));

app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});
app.all("*", (req, res, next) => {
  const custErr = new AppError(
    "Mentioned Route is not available on server",
    "404"
  );
  next();
});
// app.use(morgan("dev"));

app.use("/api/v1/user", require("./routes/userRoutes"));
app.use("/api/v1/admin", require("./routes/adminRoutes"));
app.use("/api/v1/doctor", require("./routes/doctorRoutes"));
connectDatabase();

app.listen(process.env.PORT, () => {
  console.log(`server is running on localhost ${process.env.PORT}`.bgRed.white);
});
