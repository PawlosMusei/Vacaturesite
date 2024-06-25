import Task from '../models/Task.js';
 
export const createTask = async (req, res) => {
  const { title, description } = req.body;
  const image = req.file ? `uploads/${req.file.filename}` : null;
 
  console.log('Title:', title);
  console.log('Description:', description);
  console.log('Image:', image);
 
  try {
    const newTask = new Task({
      title,
      description,
      image
    });
 
    const savedTask = await newTask.save();
    res.status(201).json(savedTask);
  } catch (error) {
    console.error("Error creating task:", error);
    res.status(400).json({ message: error.message });
  }
};
 
export const getAllTasks = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.status(200).json(tasks);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};