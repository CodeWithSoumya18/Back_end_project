import Leave from "../models/Leave.js";
import Employee from "../models/Employee.js";

//apply leave 
export const applyLeave = async (req, res) => {
  const employee = await Employee.findOne({ userId: req.user._id });

  const leave = await Leave.create({
    employeeId: employee._id,
    ...req.body,
  });

  res.status(201).json(leave);
};

//get leave 
export const getLeaves = async (req, res) => {
  const leaves = await Leave.find()
    .populate("employeeId")
    .populate({
      path: "employeeId",
      populate: { path: "userId", select: "name email" },
    });

  res.json(leaves);
};

//approve/reject leave 
export const updateLeaveStatus = async (req, res) => {
  const leave = await Leave.findByIdAndUpdate(
    req.params.id,
    { status: req.body.status },
    { new: true }
  );

  res.json(leave);
};
