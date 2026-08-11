import React, { useState } from "react";
import { ShieldCheck, Mail, Lock, Eye, EyeOff, ArrowRight } from "lucide-react";

const USERS = [
  { email:"admin@priorauth.ai", password:"admin123", role:"admin", name:"Alex Morgan" },
  { email:"doctor@priorauth.ai", password:"doctor123", role:"doctor", name:"Dr. Sarah Johnson" }
];

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    const user = USERS.find(
      u => u.email.toLowerCase() === email.trim().toLowerCase() && u.password === password
    );
    if (!user) {
      setError("Invalid email or password. Check the demo credentials below.");
      return;
    }
    setError("");
    onLogin(user);
  };

  return (
    <div className="login-shell">
      <div className="login-orb orb-a" /><div className="login-orb orb-b" />
      <div className="login-card">
        <div className="brand-mark"><ShieldCheck size={28}/></div>
        <div className="eyebrow">INTELLIGENT PRIOR AUTHORIZATION</div>
        <h1>Welcome back</h1>
        <p className="muted">Sign in to the PriorAuth AI command center.</p>
        <form onSubmit={submit}>
          <label>Email</label>
          <div className="input-wrap"><Mail size={17}/><input value={email} onChange={e=>setEmail(e.target.value)} type="email" autoComplete="username" placeholder="you@organization.com"/></div>
          <label>Password</label>
          <div className="input-wrap"><Lock size={17}/><input value={password} onChange={e=>setPassword(e.target.value)} type={show?"text":"password"} autoComplete="current-password" placeholder="Enter password"/><button type="button" className="icon-btn" onClick={()=>setShow(!show)}>{show?<EyeOff size={17}/>:<Eye size={17}/>}</button></div>
          {error && <div className="error-box">{error}</div>}
          <button className="primary-btn login-btn" type="submit">Sign in <ArrowRight size={18}/></button>
        </form>
        <div className="demo-box">
          <strong>Demo access</strong>
          <span>Admin: admin@priorauth.ai / admin123</span>
          <span>Doctor: doctor@priorauth.ai / doctor123</span>
        </div>
      </div>
    </div>
  );
}