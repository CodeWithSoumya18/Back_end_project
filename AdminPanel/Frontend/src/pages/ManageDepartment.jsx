import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const ManageDepartments = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Navbar />

        <h2>Manage Departments</h2>

        <div className="card">
          <input placeholder="Create Department" />
          <button>Add Department</button>
        </div>
      </div>
    </div>
  );
};

export default ManageDepartments;
