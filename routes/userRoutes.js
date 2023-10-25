/** @format */

const express = require("express");
const {
  registerController,
  loginController,
  authController,
  applyDoctorController,
  getAllNotificationController,
  deleteAllNotificationController,
  getAllDoctorsController,
  bookAppointmentController,
  bookingAvailabilityController,
  userAppointmentController,
  userDeleteController,
} = require("../controllers/userController");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", registerController);
router.post("/login", loginController);

//auth || post

router.post("/getUserData", authMiddleware, authController);

// apply doctor
router.post("/applyDoctor", authMiddleware, applyDoctorController);

// getall notification

router.post(
  "/getAllNotification",
  authMiddleware,
  getAllNotificationController
);

//delete notification
router.post(
  "/deleteNotification",
  authMiddleware,
  deleteAllNotificationController
);

// get all doctors

router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);
//book appointment
router.post("/bookAppointment", authMiddleware, bookAppointmentController);
//book availability

router.post(
  "/booking-availability",
  authMiddleware,
  bookingAvailabilityController
);

//user appointments
router.get("/user-appointment", authMiddleware, userAppointmentController);

module.exports = router;
