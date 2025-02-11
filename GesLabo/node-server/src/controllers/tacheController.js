import mongoose from "mongoose";
import { TacheSchema } from "../models/tacheModel";

const Tache = mongoose.model('Tache', TacheSchema);

export const addNewTache = async (req, res) => {
  try {
    let tache = await new Tache(req.body);
    tache.save();
    res.json(tache);
  } catch (err) {
    res.send(err);
  }
};


export const getTaches = async (req, res) => {
  try {
    let taches = await Tache.find({});
    res.json(taches);
  } catch (err) {
    res.send(err);
  }
};


export const getTacheWithID = async (req, res) => {
  try {
    let tache = await Tache.findById(req.params.tacheId);
    res.json(tache);
  } catch (err) {
    res.send(err);
  }
}


export const updateTache = async (req, res) => {
  try {
    let tache = await Tache.findOneAndUpdate({ _id: req.params.tacheId }, req.body, { new: true });
    res.json(tache);
  } catch (err) {
    res.send(err);
  }
}


export const deleteTache = async (req, res) => {
  try {
    let tache = await Tache.deleteOne({ _id: req.params.tacheId });
    res.json({ message: 'Successfully deleted tache' });
  } catch (err) {
    res.send(err);
  }
}