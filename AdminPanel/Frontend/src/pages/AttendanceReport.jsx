import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const AttendanceReport = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Navbar />

        <h2>Attendance Report</h2>

        <div className="card">
          <p>Present: 22 Days</p>
          <p>Absent: 2 Days</p>
          <p>Late: 1 Day</p>
        </div>
      </div>
    </div>
  );
};

export default AttendanceReport;
