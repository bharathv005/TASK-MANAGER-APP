const express = require("express");
const Task = require("../models/Task");
const auth = require("../middleware/authMiddleware");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  try {
    const tasks = await Task.find({
      userId: req.user.id,
    });

    res.json(tasks);
  } catch (error) {
    console.error("Error fetching tasks:", error);
    res.status(500).json({ message: "Failed to fetch tasks" });
  }
});

router.post("/", auth, async (req, res) => {
  try {
    if (!req.body.title || req.body.title.trim() === "") {
      return res.status(400).json({ message: "Task title is required" });
    }

    const task = await Task.create({
      title: req.body.title.trim(),
      stage: req.body.stage || "Todo",
      userId: req.user.id,
    });

    res.status(201).json(task);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(500).json({ message: "Failed to create task" });
  }
});

router.put("/:id", auth, async (req, res) => {
  try {
    if (!req.body.stage) {
      return res.status(400).json({ message: "Stage is required" });
    }

    const task = await Task.findByIdAndUpdate(
      req.params.id,
      { stage: req.body.stage },
      { returnDocument: "after" }
    );

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json(task);
  } catch (error) {
    console.error("Error updating task:", error);
    res.status(500).json({ message: "Failed to update task" });
  }
});

router.delete("/:id", auth, async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.json({ message: "Task deleted successfully" });
  } catch (error) {
    console.error("Error deleting task:", error);
    res.status(500).json({ message: "Failed to delete task" });
  }
});

module.exports = router;