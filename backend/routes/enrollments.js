const express = require("express");
const Enrollment = require("../models/Enrollment");

const router = express.Router();

// Enroll in a course
router.post("/", async (req, res) => {
  const { userId, courseId } = req.body;
  const enrollment = await Enrollment.create({ user: userId, course: courseId });
  res.json(enrollment);
});

// Get user enrollments
router.get("/:userId", async (req, res) => {
  const enrollments = await Enrollment.find({ user: req.params.userId }).populate("course");
  res.json(enrollments);
});

module.exports = router;
