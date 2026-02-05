
import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["admin", "employee"], default: "employee" },
  profilePic: String,
  otp: String,
  otpExpiry: Date
}, { timestamps: true });

export default mongoose.model("User", userSchema);
