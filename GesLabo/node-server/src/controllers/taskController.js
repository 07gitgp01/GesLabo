import mongoose from "mongoose";
import { TaskSchema } from "../models/task";


const Task = mongoose.model("Task", TaskSchema);

export const addNewTask= async (req, res) => {
  try {
    let addNewTask = new Task(req.body);
    let task = await addNewTask.save();
    res.status(200).json({task});


 
    } catch (err) {
        res.status(500).json({message: 'Erreur lors de l\'ajout du task', error: err.message
        });
    }

};


export const getTask = async (req, res) => {
  try {
    let task = await Task.find({});
    res.json(task);
  } catch (err) {
    res.send(err);
  }
};

export const getTaskWithID = async (req, res) => {
  try {
    let task = await task.findById(req.params.taskId);
    res.json(task);
  } catch (err) {
    res.send(err);
  }
};
export const updattask= async (req, res) => {
  try {
    let task = await task.findOneAndUpdate(
      { _id: req.params.taskId },
      req.body,
      { new: true }
    );
    res.json(task);
  } catch (err) {
    res.send(err);
  }
};
export const deleteTask = async (req, res) => {
  try {
    await Task.remove({ _id: req.params.taskId });
    res.json({ message: "Successfully deleted task" });
  } catch (err) {
    res.send(err);
  }
};