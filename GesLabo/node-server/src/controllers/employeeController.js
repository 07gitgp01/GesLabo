import mongoose from "mongoose";
import { EmployeeSchema } from "../models/employeeModel";


const Employee = mongoose.model("Employee", EmployeeSchema);

export const addNewEmployee= async (req, res) => {
  try {
    let addNewEmployee = new Employee(req.body);
    let employee = await addNewEmployee.save();
    res.status(200).json({employee});


 
    } catch (err) {
        res.status(500).json({message: 'Erreur lors de l\'ajout de l employe', error: err.message
        });
    }

};


export const getEmployee = async (req, res) => {
  try {
    let employee = await Employee.find({});
    res.json(employee);
  } catch (err) {
    res.send(err);
  }
};

export const getEmployeetWithID = async (req, res) => {
  try {
    let employee = await employee.findById(req.params.employeeId);
    res.json(employee);
  } catch (err) {
    res.send(err);
  }
};
export const updatemployee= async (req, res) => {
  try {
    let employee = await employee.findOneAndUpdate(
      { _id: req.params.employeeId },
      req.body,
      { new: true }
    );
    res.json(employee);
  } catch (err) {
    res.send(err);
  }
};
export const deleteEmployee = async (req, res) => {
  try {
    await Employee.remove({ _id: req.params.employeetId });
    res.json({ message: "Successfully deleted employee" });
  } catch (err) {
    res.send(err);
  }
};