
import mongoose from "mongoose";

const equipmentSchema = new mongoose.Schema({
  name: String,
  quantity: Number,
  available: Boolean
}, { timestamps: true });

export default mongoose.model("Equipment", equipmentSchema);
