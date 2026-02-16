import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const ManageRoles = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Navbar />

        <h2>Manage Roles</h2>

        <div className="card">
          <input placeholder="Create Role" />
          <button>Add Role</button>
        </div>
      </div>
    </div>
  );
};

export default ManageRoles;
