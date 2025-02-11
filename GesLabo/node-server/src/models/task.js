import mongoose from "mongoose";
import mongooseSequence from "mongoose-sequence";

const Schema = mongoose.Schema;
const AutoIncrement = mongooseSequence(mongoose);

export const TaskSchema = new Schema({
  id: {
    type: String,
  },
  description: {
    type: String,
    required: [true, "Entrer une description"], 
  },
  status: {
    type: String,
  },
  assignedTo: {
    type: String,
  },
  comments: {
    type: String, 
  },
  deadline: {
    type: Date,
  },
  creationDate: {
    type: Date,
    default: Date.now,
  },
  completionDate: {
    type: Date,
  },
  lastUpdated: {
    type: Date,
    default: Date.now, // ✅ Ajout d'une valeur par défaut
  },
});
