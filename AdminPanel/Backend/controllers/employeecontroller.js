import Employee from "../models/Employee.js";
import User from "../models/User.js";

//add employee
export const addEmployee = async (req, res) => {
  const { userId, employeeId, department, designation, salary, joiningDate } =
    req.body;

  const employee = await Employee.create({
    userId,
    employeeId,
    department,
    designation,
    salary,
    joiningDate,
  });

  res.status(201).json(employee);
};


//get all employee
export const getEmployees = async (req, res) => {
  const { search, department, status, page = 1, limit = 10 } = req.query;

  const query = {};

  if (status) query.status = status;
  if (department) query.department = department;

  const employees = await Employee.find(query)
    .populate("userId", "name email")
    .populate("department", "name")
    .skip((page - 1) * limit)
    .limit(Number(limit));

  res.json(employees);
};

//update employeee
export const updateEmployee = async (req, res) => {
  const employee = await Employee.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );

  res.json(employee);
};

//delete employee
export const deleteEmployee = async (req, res) => {
  await Employee.findByIdAndDelete(req.params.id);
  res.json({ message: "Employee deleted" });
};
