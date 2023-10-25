/** @format */

const mongoose = require("mongoose");

// Connect MongoDB at default port 27017.
const connectDatabase = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useunifiedTopology: true,
    })
    .then((data) => {
      console.log(
        `mongodb is connected with server ${data.connection.host}`.bgYellow
          .white
      );
    });
};

module.exports = connectDatabase;
