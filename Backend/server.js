import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';
import taskRoutes from './routes/taskRoutes.js';
 
// Laad variabelen uit het .env-bestand
dotenv.config();
 
// Aanmaken express app
const app = express();
 
// Verzoeken alleen accepteren vanuit frontend
app.use(cors());
 
// Middleware om JSON-verzoeken te parsen
app.use(express.json());
 
// Zorg ervoor dat de upload map bestaat
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
 
const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}
 
// Serve de uploads directory
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
 
// Configure multer for file upload
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});
 
const upload = multer({ storage: storage });
 
// MongoDB-verbinding
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log('connected to database');
    // listen to port
    app.listen(process.env.PORT, () => {
      console.log('listening for requests on port', process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
 
// Routes
app.use('/tasks', taskRoutes);
 
// Voeg de upload logica toe aan de createTask functie
import { createTask } from './controllers/taskController.js';
 
// Route om een nieuwe taak aan te maken met bestand upload
app.post('/tasks', upload.single('image'), createTask);