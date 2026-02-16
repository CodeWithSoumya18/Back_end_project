import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const Payslip = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Navbar />

        <h2>Payslip</h2>

        <div className="card">
          <p>Basic: ₹50,000</p>
          <p>HRA: ₹15,000</p>
          <p>Deductions: ₹5,000</p>
          <h3>Net Salary: ₹60,000</h3>
        </div>
      </div>
    </div>
  );
};

export default Payslip;
