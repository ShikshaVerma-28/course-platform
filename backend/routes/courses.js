const express = require("express");
const Course = require("../models/Course");

const router = express.Router();

// Get all courses
router.get("/", async (req, res) => {
  const courses = await Course.find();
  res.json(courses);
});

// Add a new course
router.post("/", async (req, res) => {
  const { title, description, price } = req.body;
  const course = await Course.create({ title, description, price });
  res.json(course);
});

module.exports = router;
