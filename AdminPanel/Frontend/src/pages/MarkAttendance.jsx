import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const MarkAttendance = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Navbar />

        <h2>Mark Attendance</h2>

        <div className="card">
          <button>Check In</button>
          <button>Check Out</button>
        </div>
      </div>
    </div>
  );
};

export default MarkAttendance;
