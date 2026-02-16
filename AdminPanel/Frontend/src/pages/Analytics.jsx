import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Analytics = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Navbar />

        <h2>Analytics</h2>

        <div className="grid-3">
          <div className="card">
            <h3>Total Payroll</h3>
            <p>₹18,50,000</p>
          </div>

          <div className="card">
            <h3>Attendance Rate</h3>
            <p>92%</p>
          </div>

          <div className="card">
            <h3>Leaves This Month</h3>
            <p>14</p>
          </div>
        </div>

        <div className="card">
          <h3>Charts Section (Recharts Here)</h3>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
