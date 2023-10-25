/** @format */

const express = require("express");
const { authMiddleware } = require("../middleware/authMiddleware");
const {
  getAllDoctorsController,
  getAllUsers,
  changeAccountStatusController,
  userDeleteController,
} = require("../controllers/adminController");
const router = express.Router();

// getDoctors

router.get("/getAllDoctors", authMiddleware, getAllDoctorsController);
router.get("/getAllUsers", authMiddleware, getAllUsers);

// post change account status

router.post(
  "/changeAccountStatus",
  authMiddleware,
  changeAccountStatusController
);
router.delete("/deleteUser/:id", authMiddleware, userDeleteController);

module.exports = router;
