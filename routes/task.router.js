import { Router } from "express";

const router = Router();

import {
  getTask,
  createTask,
  getTaskByID,
  updateTask,
  deleteTask,
} from "../controllers/task.controller.js";

router.get("/", getTask);
router.get("/:id", getTaskByID);

router.post("/", createTask);

router.put("/:id", updateTask);

router.delete("/:id", deleteTask);

export default router;
