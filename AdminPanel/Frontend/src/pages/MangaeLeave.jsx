import Sidebar from "../../components/Sidebar";
import Navbar from "../../components/Navbar";

const ManageLeave = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Navbar />

        <h2>Manage Leave Requests</h2>

        <div className="card">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>From</th>
                <th>Status</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>John</td>
                <td>2026-02-10</td>
                <td>Pending</td>
                <td>
                  <button>Approve</button>
                  <button className="danger">Reject</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageLeave;
