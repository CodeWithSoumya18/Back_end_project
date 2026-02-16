import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2>HRMS Panel</h2>

      <Link to="/dashboard">Dashboard</Link>
      <Link to="/analytics">Analytics</Link>
      <Link to="/employees">Employees</Link>

      <Link to="/leave/apply">Apply Leave</Link>
      <Link to="/leave/manage">Manage Leave</Link>

      <Link to="/attendance/mark">Attendance</Link>
      <Link to="/attendance/report">Attendance Report</Link>

      <Link to="/payroll">Payroll</Link>
      <Link to="/payslip">Payslip</Link>

      <Link to="/roles">Roles</Link>
      <Link to="/departments">Departments</Link>

      <Link to="/profile">Profile</Link>
    </div>
  );
};

export default Sidebar;
