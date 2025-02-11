import mongoose from "mongoose";
import mongooseSequence from "mongoose-sequence";
const Schema = mongoose.Schema;

export const LoginSchema = new Schema({
  email: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  }
});

