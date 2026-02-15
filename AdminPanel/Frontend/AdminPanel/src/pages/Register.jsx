import { useState } from "react";
import api from "../services/api";

function Register() {
  const [form, setForm] = useState({});

  const submitHandler = async (e) => {
    e.preventDefault();
    await api.post("/auth/register", form);
    alert("OTP sent to email");
  };

  return (
    <form onSubmit={submitHandler}>
      <h2>Register</h2>
      <input placeholder="Name"
        onChange={(e)=>setForm({...form,name:e.target.value})}/>
      <input placeholder="Email"
        onChange={(e)=>setForm({...form,email:e.target.value})}/>
      <input type="password" placeholder="Password"
        onChange={(e)=>setForm({...form,password:e.target.value})}/>
      <select onChange={(e)=>setForm({...form,role:e.target.value})}>
        <option value="employee">Employee</option>
        <option value="admin">Admin</option>
      </select>
      <button>Register</button>
    </form>
  );
}

export default Register;
