import express from "express";
import multer from "multer";
import { createTask, getAllTasks } from "../controllers/taskController.js";

const router = express.Router();

// Configure multer for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

// Routes
router.post("/", upload.single("image"), createTask);
router.get("/", getAllTasks);

export default router;
