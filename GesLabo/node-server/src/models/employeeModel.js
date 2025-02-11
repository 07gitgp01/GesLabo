import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const EmployeeSchema = new Schema({
  id: {
    type: String,
   
  },
  firstName: {
    type: String,
    required: "Enter a first name"
  },
  lastName: {
    type: String,
    required: "Enter a last name"
  },
  phone: {
    type: Number
  },
  email: {
    type: String
  },
  role: {
    type: String
  },
  // hashpassword:{
  // type:String,
  // required:false
  // },
  created_date: {
    type: Date,
    default: Date.now
  }
});

// employeeSchema.methods.comparePassword = (password ,hashpassword) =>{
//     return bcrypt.compareSync(password, hashpassword);