<h1 align="center">🚀 Admin Controlled Employee Management System</h1>

<p align="center">
A Full Stack Employee Management System with Role-Based Authentication<br>
Built using MERN Stack (MongoDB, Express, React, Node.js)
</p>

<hr>

<h2>📌 Project Overview</h2>

<p>
This project is a role-based Employee Management System where:
</p>

<ul>
  <li><strong>Admin</strong> has full control over employees, departments, and leave management.</li>
  <li><strong>Employee</strong> can manage their profile and apply for leave.</li>
</ul>

<hr>

<h2>🛠 Tech Stack</h2>

<h3>Frontend</h3>
<ul>
  <li>React (Vite)</li>
  <li>React Router DOM</li>
  <li>Axios</li>
  <li>Basic CSS</li>
</ul>

<h3>Backend</h3>
<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>MongoDB Atlas</li>
  <li>Mongoose</li>
  <li>JWT Authentication</li>
  <li>Nodemailer (OTP Email)</li>
  <li>bcryptjs (Password Hashing)</li>
</ul>

<hr>

<h2>🔐 Authentication Features</h2>

<ul>
  <li>✔ User Registration</li>
  <li>✔ Email OTP Verification</li>
  <li>✔ Login with JWT</li>
  <li>✔ Role-Based Access (Admin / Employee)</li>
  <li>✔ Forgot Password</li>
  <li>✔ Reset Password via Email</li>
  <li>✔ Protected Routes</li>
  <li>✔ Secure HttpOnly Cookies</li>
</ul>

<hr>

<h2>👑 Admin Features</h2>

<ul>
  <li>Dashboard Overview</li>
  <li>Add / Update / Delete Employees</li>
  <li>View All Employees</li>
  <li>Search & Filter Employees</li>
  <li>Department Management</li>
  <li>Approve / Reject Leave Requests</li>
</ul>

<hr>

<h2>👨‍💻 Employee Features</h2>

<ul>
  <li>View Dashboard</li>
  <li>Update Profile</li>
  <li>Apply for Leave</li>
  <li>View Leave History</li>
  <li>Change Password</li>
</ul>

<hr>

<h2>📂 Project Structure</h2>

<pre>
Backend/
│
├── config/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
├── server.js
└── package.json

Frontend/
│
├── src/
│   ├── pages/
│   ├── routes/
│   ├── services/
│   ├── App.jsx
│   └── main.jsx
└── package.json
</pre>

<hr>

<h2>⚙️ Environment Variables (.env)</h2>

<pre>
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
JWT_REFRESH_SECRET=your_refresh_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
FRONTEND_URL=http://localhost:5173
</pre>

<hr>

<h2>🚀 Installation Guide</h2>

<h3>1️⃣ Clone Repository</h3>

<pre>
git clone https://github.com/your-username/employee-management.git
</pre>

<h3>2️⃣ Backend Setup</h3>

<pre>
cd backend
npm install
npm run dev
</pre>

<h3>3️⃣ Frontend Setup</h3>

<pre>
cd frontend
npm install
npm run dev
</pre>

<hr>

<h2>🔄 Authentication Flow</h2>

<ol>
  <li>User registers</li>
  <li>OTP sent via email</li>
  <li>User verifies OTP</li>
  <li>JWT token generated on login</li>
  <li>Role-based route protection applied</li>
</ol>

<hr>

<h2>🔐 Security Best Practices</h2>

<ul>
  <li>Password hashing using bcrypt</li>
  <li>JWT token expiration</li>
  <li>Role-based authorization middleware</li>
  <li>Email verification required</li>
  <li>Environment variables for secrets</li>
  <li>CORS configuration enabled</li>
</ul>

<hr>

<h2>🌟 Future Improvements</h2>

<ul>
  <li>Pagination</li>
  <li>Search & Advanced Filtering</li>
  <li>Dashboard Charts</li>
  <li>File Upload with Cloudinary</li>
  <li>Audit Logs</li>
  <li>Export Data to CSV</li>
</ul>

<hr>

<h2 align="center">💡 Developed By</h2>

<p align="center">
<strong>SOUMYASHREE NAYAK</strong><br>
Full Stack Developer
</p>

<hr>

<p align="center">
⭐ If you like this project, don't forget to give it a star!
</p>
