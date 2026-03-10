import { Router } from "express";

const router = Router();

import {
  getNote,
  createNote,
  getNoteByID,
  updateNote,
  deleteNote,
} from "../controllers/note.controller.js";

router.get("/", getNote);
router.get("/:id", getNoteByID);

router.post("/", createNote);

router.put("/:id", updateNote);

router.delete("/:id", deleteNote);

export default router;