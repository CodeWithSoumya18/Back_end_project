import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";

const Profile = () => {
  return (
    <div className="layout">
      <Sidebar />
      <div className="content">
        <Navbar />

        <h2>My Profile</h2>

        <div className="card">
          <input placeholder="Full Name" />
          <input placeholder="Email" />
          <input placeholder="Department" />
          <button>Update Profile</button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
