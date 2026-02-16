import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Employees = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Navbar />

        <h2>Employee Management</h2>

        <div className="card">
          <input placeholder="Search Employee..." />

          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Role</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>John Doe</td>
                <td>john@mail.com</td>
                <td>IT</td>
                <td>Employee</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Employees;
