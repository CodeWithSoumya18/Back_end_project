
import User from "../models/User.js";
export const getUsers = async (req, res) => {
  res.json(await User.find());
};
