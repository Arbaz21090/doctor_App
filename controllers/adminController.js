/** @format */

const userModel = require("../models/userModel");
const doctorModel = require("../models/doctorModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const getAllDoctorsController = async (req, res) => {
  try {
    const doctors = await doctorModel.find({}).sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      message: "Doctors Data Fetched",
      data: doctors,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while fetching users data",
      error,
    });
  }
};
const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({}).sort({ createdAt: -1 });
    res.status(200).send({
      success: true,
      message: "Users Data Fetched",
      data: users,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error while fetching Doctors Data",
      error,
    });
  }
};
const changeAccountStatusController = async (req, res) => {
  try {
    const { doctorId, status } = req.body;
    const doctor = await doctorModel.findByIdAndUpdate(doctorId, { status });
    const user = await userModel.findOne({ _id: doctor.userId });
    const notification = user.notification;
    notification.push({
      type: "Doctor account request accepted",
      message: `your Doctor account has ${status}`,
      onClickPath: "/notification",
    });

    user.isDoctor = status === "approved" ? true : false;
    await user.save();
    res.status(201).send({
      success: true,
      message: "Account Status Updated",
      data: doctor,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in account status",
      error,
    });
  }
};
const userDeleteController = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await userModel.findByIdAndDelete({ _id: userId });

    res.status(200).send({
      success: true,
      message: "User deleted Successfuly",
    });
  } catch (error) {
    res.send(error);
    res.status(500).send({
      success: false,
      message: "internal server error",
    });
  }
};
module.exports = {
  getAllDoctorsController,
  getAllUsers,
  changeAccountStatusController,
  userDeleteController,
};
