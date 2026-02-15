import { useState } from "react";
import api from "../services/api";

function VerifyOTP() {
  const [email,setEmail]=useState("");
  const [otp,setOtp]=useState("");

  const submitHandler=async(e)=>{
    e.preventDefault();
    await api.post("/auth/verify-otp",{email,otp});
    alert("Verified Successfully");
  };

  return(
    <form onSubmit={submitHandler}>
      <h2>Verify OTP</h2>
      <input placeholder="Email"
        onChange={(e)=>setEmail(e.target.value)}/>
      <input placeholder="OTP"
        onChange={(e)=>setOtp(e.target.value)}/>
      <button>Verify</button>
    </form>
  )
}

export default VerifyOTP;
