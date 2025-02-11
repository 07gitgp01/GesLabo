import mongoose from "mongoose";
import { TicketSchema } from "../models/ticketModule";


const Ticket = mongoose.model("Ticket", TicketSchema);

export const addNewTicket= async (req, res) => {
  try {
    let addNewTicket = new Ticket(req.body);
    let ticket = await addNewTicket.save();
    res.status(200).json({ticket});


 
    } catch (err) {
        res.status(500).json({message: 'Erreur lors de l\'ajout du ticket', error: err.message
        });
    }

};


export const getTicket = async (req, res) => {
  try {
    let ticket = await Ticket.find({});
    res.json(ticket);
  } catch (err) {
    res.send(err);
  }
};

export const getTicketWithID = async (req, res) => {
  try {
    let ticket = await ticket.findById(req.params.ticketId);
    res.json(ticket);
  } catch (err) {
    res.send(err);
  }
};
export const updatticket= async (req, res) => {
  try {
    let ticket = await ticket.findOneAndUpdate(
      { _id: req.params.ticketId },
      req.body,
      { new: true }
    );
    res.json(ticket);
  } catch (err) {
    res.send(err);
  }
};
export const deleteTask = async (req, res) => {
  try {
    await Ticket.remove({ _id: req.params.ticketId });
    res.json({ message: "Successfully deleted ticket" });
  } catch (err) {
    res.send(err);
  }
};