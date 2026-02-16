import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";

import SignIn from "./pages/Auth/SignIn";
import SignUp from "./pages/Auth/SignUp";
import VerifyOtp from "./pages/Auth/VerifyOtp";

import Dashboard from "./pages/Dashboard";
import Analytics from "./pages/Analytics";
import Employees from "./pages/Employees";
import Profile from "./pages/Profile";

import ApplyLeave from "./pages/Leave/ApplyLeave";
import ManageLeave from "./pages/Leave/ManageLeave";

import MarkAttendance from "./pages/Attendance/MarkAttendance";
import AttendanceReport from "./pages/Attendance/AttendanceReport";

import PayrollDashboard from "./pages/Payroll/PayrollDashboard";
import Payslip from "./pages/Payroll/Payslip";

import ManageRoles from "./pages/Roles/ManageRoles";
import ManageDepartments from "./pages/Roles/ManageDepartments";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/verify-otp" element={<VerifyOtp />} />

        <Route path="/dashboard"
          element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />

        <Route path="/analytics"
          element={<ProtectedRoute role="admin"><Analytics /></ProtectedRoute>} />

        <Route path="/employees"
          element={<ProtectedRoute role="admin"><Employees /></ProtectedRoute>} />

        <Route path="/leave/apply"
          element={<ProtectedRoute><ApplyLeave /></ProtectedRoute>} />

        <Route path="/leave/manage"
          element={<ProtectedRoute role="admin"><ManageLeave /></ProtectedRoute>} />

        <Route path="/attendance/mark"
          element={<ProtectedRoute><MarkAttendance /></ProtectedRoute>} />

        <Route path="/attendance/report"
          element={<ProtectedRoute role="admin"><AttendanceReport /></ProtectedRoute>} />

        <Route path="/payroll"
          element={<ProtectedRoute role="admin"><PayrollDashboard /></ProtectedRoute>} />

        <Route path="/payslip"
          element={<ProtectedRoute><Payslip /></ProtectedRoute>} />

        <Route path="/roles"
          element={<ProtectedRoute role="admin"><ManageRoles /></ProtectedRoute>} />

        <Route path="/departments"
          element={<ProtectedRoute role="admin"><ManageDepartments /></ProtectedRoute>} />

        <Route path="/profile"
          element={<ProtectedRoute><Profile /></ProtectedRoute>} />
      </Routes>
    </Router>
  );
}

export default App;
