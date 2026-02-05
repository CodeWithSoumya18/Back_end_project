
import Equipment from "../models/Equipment.js";

export const getEquipment = async (req, res) => {
  res.json(await Equipment.find());
};

export const addEquipment = async (req, res) => {
  res.json(await Equipment.create(req.body));
};
