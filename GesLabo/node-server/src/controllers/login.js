import mongoose from "mongoose";
import { LoginSchema } from "../models/loginModel";
import { ClientSchema } from "../models/clientModel";


const Login = mongoose.model("Login", LoginSchema);
const Client = mongoose.model("Client", ClientSchema);

export const connectUser = async (req, res) => {
  try {
    let clientResult = await Client.findOne({ email: req.body.email,password: req.body.password });
    res.json(clientResult);
  } catch (err) {
    res.send(err);
  }


  try {
    await Login.findByIdAndRemove(req.params.loginId);
    res.json({ message: "Successfully deleted login" });
  } catch (err) {
    res.send(err);
  }
};