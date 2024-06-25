import mongoose from "mongoose";
//maak een database schema aan, zodat in de database een plek komt voor
//de titel van de taak, beschrijving, of het compleet is en wanneer het is
//aangemaakt.
const taskSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String},
});
const Task = mongoose.model("Task", taskSchema);
export default Task;
