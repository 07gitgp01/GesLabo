import mongoose from "mongoose";
import mongooseSequence from "mongoose-sequence";
const Schema = mongoose.Schema;

export const ClientSchema = new Schema({
  id: {
    type: String,
    unique: true,
  },
  name: {
    type: String,
    required: "Entrer un nom",
  },
  email: {
    type: String,
  },
  adresse: {
    type: String,
  },
  phone: {
    type: String,
  },
  status: {
    type: String,
  },
  subscriptionPlan: {
    type: String,
    required: "Subscription plan is required",
  },
  password: {
    type: String,
  },
  //employee: { type: Array, default: [] },
});

