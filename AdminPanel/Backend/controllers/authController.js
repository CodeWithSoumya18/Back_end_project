import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import generateOTP from "../utils/generateOTP.js";
import sendEmail from "../utils/sendEmail.js";
import crypto from "crypto";

//register user

export const registerUser = async (req, res) => {
  const { name, email, password, role } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists)
    return res.status(400).json({ message: "User already exists" });

  const otp = generateOTP();

  const user = await User.create({
    name,
    email,
    password,
    role,
    otp,
    otpExpiry: Date.now() + 10 * 60 * 1000,
  });

  await sendEmail(email, "Verify OTP", `Your OTP is ${otp}`);

  res.status(201).json({
    message: "User registered. Verify OTP sent to email.",
  });
};

//verify otp
export const verifyOTP = async (req, res) => {
  const { email, otp } = req.body;

  const user = await User.findOne({ email });

  if (!user || user.otp !== otp || user.otpExpiry < Date.now()) {
    return res.status(400).json({ message: "Invalid or expired OTP" });
  }

  user.isVerified = true;
  user.otp = undefined;
  user.otpExpiry = undefined;

  await user.save();

  res.json({ message: "Account verified successfully" });
};
//login 
export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user || !(await user.matchPassword(password)))
    return res.status(401).json({ message: "Invalid credentials" });

  if (!user.isVerified)
    return res.status(401).json({ message: "Verify your account first" });

  generateToken(res, user._id);

  res.json({
    _id: user._id,
    name: user.name,
    email: user.email,
    role: user.role,
  });
};
//logout 
export const logoutUser = (req, res) => {
  res.cookie("token", "", { maxAge: 0 });
  res.cookie("refreshToken", "", { maxAge: 0 });

  res.json({ message: "Logged out successfully" });
};
//forgot password 
export const forgotPassword = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });
  if (!user)
    return res.status(404).json({ message: "User not found" });

  const resetToken = crypto.randomBytes(32).toString("hex");

  user.otp = resetToken;
  user.otpExpiry = Date.now() + 15 * 60 * 1000;

  await user.save();

  const resetUrl = `${process.env.FRONTEND_URL}/reset-password/${resetToken}`;

  await sendEmail(email, "Password Reset", resetUrl);

  res.json({ message: "Reset link sent to email" });
};
//reset password

export const resetPassword = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  const user = await User.findOne({
    otp: token,
    otpExpiry: { $gt: Date.now() },
  });

  if (!user)
    return res.status(400).json({ message: "Invalid or expired token" });

  user.password = password;
  user.otp = undefined;
  user.otpExpiry = undefined;

  await user.save();

  res.json({ message: "Password reset successful" });
};
