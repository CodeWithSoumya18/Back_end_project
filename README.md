# Back_end_project
<h1>🏥 Hospital Equipment Management System (Hospital EMS)</h1>

<p>
A full-stack <b>MERN-based Hospital Equipment Management System</b> designed to manage hospital users,
roles, and medical equipment efficiently with secure authentication and role-based access control.
</p>

<p>
This project supports <b>Admin</b> and <b>Employee</b> roles with different permissions and provides
a clean dashboard with charts for equipment analytics.
</p>

<hr />

<h2>🚀 Features</h2>

<h3>🔐 Authentication & Security</h3>
<ul>
  <li>Email-based login with OTP verification</li>
  <li>JWT authentication using HTTP-only cookies</li>
  <li>Secure session handling</li>
  <li>Role-based authorization (Admin / Employee)</li>
</ul>

<h3>👥 User Management (Admin Only)</h3>
<ul>
  <li>View all users</li>
  <li>Role-based access control</li>
  <li>Employees cannot access admin routes (backend protected)</li>
</ul>

<h3>🏥 Equipment Management</h3>
<ul>
  <li>View medical equipment list</li>
  <li>Admin can add new equipment</li>
  <li>Employees have read-only access</li>
  <li>Equipment availability & quantity tracking</li>
</ul>

<h3>📊 Dashboard & Analytics</h3>
<ul>
  <li>Dashboard with real-time equipment data</li>
  <li>Pie chart & Bar chart visualization</li>
  <li>Data fetched dynamically from backend</li>
</ul>

<h3>🧭 UI & Layout</h3>
<ul>
  <li>Sidebar navigation (role-based)</li>
  <li>Dashboard layout</li>
  <li>Profile page with email locked (non-editable)</li>
  <li>Clean and extendable React architecture</li>
</ul>

<hr />

<h2>🛠️ Tech Stack</h2>

<h3>Frontend</h3>
<ul>
  <li>React (Vite)</li>
  <li>React Router DOM</li>
  <li>Axios</li>
  <li>Context API</li>
  <li>Recharts</li>
</ul>

<h3>Backend</h3>
<ul>
  <li>Node.js</li>
  <li>Express.js</li>
  <li>MongoDB (Mongoose)</li>
  <li>JWT Authentication</li>
  <li>Cookie-parser</li>
  <li>CORS</li>
</ul>

<hr />

<h2>📁 Project Structure</h2>

<pre>
hospital-ems/
│
├── backend/
│   ├── server.js
│   ├── package.json
│   ├── .env.example
│   ├── config/
│   ├── models/
│   ├── controllers/
│   ├── routes/
│   ├── middleware/
│   ├── utils/
│   └── uploads/
│
└── frontend/
    ├── package.json
    ├── vite.config.js
    ├── index.html
    └── src/
        ├── api/
        ├── context/
        ├── layouts/
        ├── components/
        ├── pages/
        ├── App.jsx
        └── main.jsx
</pre>

<hr />

<h2>⚙️ Environment Variables</h2>

<p>Create a <code>.env</code> file inside the <b>backend</b> folder:</p>

<pre>
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
</pre>

<hr />

<h2>▶️ How to Run the Project</h2>

<h3>1️⃣ Backend Setup</h3>
<pre>
cd backend
npm install
cp .env.example .env
npm run dev
</pre>

<p>Backend runs on: <b>http://localhost:5000</b></p>

<h3>2️⃣ Frontend Setup</h3>
<pre>
cd frontend
npm install
npm run dev
</pre>

<p>Frontend runs on: <b>http://localhost:5173</b></p>

<hr />

<h2>🔑 Login Flow</h2>
<ol>
  <li>Enter registered email</li>
  <li>OTP is generated (visible in backend console)</li>
  <li>Enter OTP to verify</li>
  <li>JWT token is stored in cookies</li>
  <li>User is redirected to dashboard</li>
</ol>

<hr />

<h2>👤 Roles & Access</h2>

<table border="1" cellpadding="8">
  <tr>
    <th>Role</th>
    <th>Access</th>
  </tr>
  <tr>
    <td>Admin</td>
    <td>Dashboard, Users, Equipment (CRUD), Profile</td>
  </tr>
  <tr>
    <td>Employee</td>
    <td>Dashboard, Equipment (View Only), Profile</td>
  </tr>
</table>

<hr />

<h2>📌 Future Enhancements</h2>
<ul>
  <li>Email OTP using Nodemailer</li>
  <li>Profile image upload</li>
  <li>Edit / Delete equipment</li>
  <li>Advanced analytics</li>
  <li>UI/UX improvements</li>
  <li>Deployment (Render / Vercel)</li>
</ul>

<hr />

<p><b>✨ This project is a solid foundation for a real-world hospital management system and can be extended easily.</b></p>
