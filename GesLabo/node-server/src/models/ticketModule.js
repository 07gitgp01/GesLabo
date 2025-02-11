import mongoose from "mongoose";
import mongooseSequence from "mongoose-sequence";
const Schema = mongoose.Schema;
const AutoIncrement = mongooseSequence(mongoose);
export const TicketSchema = new Schema({
  id: {
    type: String,
    unique: true
  },
  titre: {
    type: String,
    required: "Entrer un titre"
  },
  description: {
    type: String
  },
  priority: {
    type: String
  },
  status: {
    type: String
  },
  createDate: {
    type: Date
  },
  updateDate: {
    type: Date
  },
  completionDate: {
    type: Date
  },
    assignedEmployees: {
    type: Array
  }
 
});


