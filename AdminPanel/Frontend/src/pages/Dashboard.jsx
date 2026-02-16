import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Navbar />

        <h2>Dashboard Overview</h2>

        <div className="grid-3">
          <div className="card">
            <h3>Total Employees</h3>
            <p>120</p>
          </div>

          <div className="card">
            <h3>Active Employees</h3>
            <p>98</p>
          </div>

          <div className="card">
            <h3>Departments</h3>
            <p>6</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
