import mongoose from "mongoose";
import { ClientSchema } from "../models/clientModel";



const Client = mongoose.model("Client", ClientSchema);

export const addNewClient= async (req, res) => {
  try {
    let addNewClient = new Client(req.body);
    let client = await addNewClient.save();
    res.status(200).json({client});


 
    } catch (err) {
        res.status(500).json({message: 'Erreur lors de l\'ajout du client', error: err.message
        });
    }

};


export const getClient = async (req, res) => {
  try {
    const clients = await Client.find({});
    res.status(200).json(clients);
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Erreur lors de la récupération des clients",
        error: err.message,
      });
  }
};

export const getClientWithID = async (req, res) => {
  try {
    const client = await Client.findById(req.params.clientId);
    if (!client) {
      return res.status(404).json({ message: "Client non trouvé" });
    }
    res.status(200).json(client);
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Erreur lors de la récupération du client",
        error: err.message,
      });
  }
};
export const updateClient = async (req, res) => {
  try {
    const client = await Client.findByIdAndUpdate(
      req.params.clientId,
      req.body,
      { new: true, runValidators: true }
    );
    if (!client) {
      return res.status(404).json({ message: "Client non trouvé" });
    }
    res.status(200).json({ message: "Client mis à jour avec succès", client });
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Erreur lors de la mise à jour du client",
        error: err.message,
      });
  }
};
export const deleteClient = async (req, res) => {
  try {
    const result = await Client.deleteOne({ _id: req.params.clientId });
    if (result.deletedCount === 0) {
      return res.status(404).json({ message: "Client non trouvé" });
    }
    res.status(200).json({ message: "Client supprimé avec succès" });
  } catch (err) {
    res
      .status(500)
      .json({
        message: "Erreur lors de la suppression du client",
        error: err.message,
      });
  }
};