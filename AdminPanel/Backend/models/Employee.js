import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    employeeId: {
      type: String,
      required: true,
      unique: true,
    },

    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
    },

    designation: String,
    salary: Number,
    joiningDate: Date,

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },

    profileImage: String,
  },
  { timestamps: true }
);

export default mongoose.model("Employee", employeeSchema);
