import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const ApplyLeave = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Navbar />

        <h2>Apply Leave</h2>

        <div className="card">
          <input type="date" />
          <input type="date" />
          <textarea placeholder="Reason"></textarea>
          <button>Submit Leave</button>
        </div>
      </div>
    </div>
  );
};

export default ApplyLeave;
