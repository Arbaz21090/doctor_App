/** @format */

const express = require("express");
const {
  doctorInfoController,
  updateDoctorProfileController,
  getDoctorByIdController,
  getDoctorAppointmentController,
  updateStatusController,
} = require("../controllers/doctorController");
const { authMiddleware } = require("../middleware/authMiddleware");

const router = express.Router();

// post single doctor info
router.post("/doctorInfo", authMiddleware, doctorInfoController);
router.post(
  "/updateDoctorProfile",
  authMiddleware,
  updateDoctorProfileController
);

// post single doc info

router.post("/getDoctorById", authMiddleware, getDoctorByIdController);

//get Appointments

router.get(
  "/doctor-appointment",
  authMiddleware,
  getDoctorAppointmentController
);
//update status
router.post("/update-status", authMiddleware, updateStatusController);
module.exports = router;
