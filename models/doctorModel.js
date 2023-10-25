/** @format */

const mongoose = require("mongoose");

const doctorSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
    },
    firstName: {
      type: String,
      required: [true, "first Name is required"],
    },
    lastName: {
      type: String,
      required: [true, "Last Name is required"],
    },
    email: {
      type: String,
      required: [true, "email is required"],
    },
    mobile: {
      type: Number,
      required: [true, "mobile is required"],
    },
    website: {
      type: String,
    },
    address: {
      type: String,
      required: [true, "address is required"],
    },
    especialization: {
      type: String,
      required: [true, "speciality is required"],
    },
    experience: {
      type: String,
      required: [true, "experience is required"],
    },
    feesperconsultation: {
      type: Number,
      required: [true, "fees is required"],
    },
    status: {
      type: String,
      default: "pending",
    },
    timing: {
      type: Object,
      required: [true, "timing must be filled"],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("doctors", doctorSchema);
