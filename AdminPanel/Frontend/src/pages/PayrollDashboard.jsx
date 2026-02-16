import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const PayrollDashboard = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Navbar />

        <h2>Payroll Overview</h2>

        <div className="card">
          <p>Total Salary Paid: ₹18,50,000</p>
          <p>Pending Salary: ₹2,10,000</p>
        </div>
      </div>
    </div>
  );
};

export default PayrollDashboard;
