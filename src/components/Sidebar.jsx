import React from "react";
import { Activity, LayoutDashboard, CheckCircle2, Clock3, XCircle, BarChart3, FileText, LogOut, Stethoscope } from "lucide-react";

export default function Sidebar({ user, page, setPage, logout }) {
  const adminItems = [
    ["dashboard","Dashboard",LayoutDashboard],
    ["automated","Automated Requests",CheckCircle2],
    ["manual","Manual Requests",Clock3],
    ["denial","Denial Requests",XCircle],
    ["analytics","Analytics",BarChart3]
  ];
  const doctorItems = [
    ["doctor","My Dashboard",LayoutDashboard],
    ["submit","New Authorization",FileText],
    ["status","Request Status",Clock3]
  ];
  const items = user.role === "admin" ? adminItems : doctorItems;

  return <aside className="sidebar">
    <div className="logo"><div className="logo-icon"><Activity size={22}/></div><div><b>PriorAuth</b><span>AI</span></div></div>
    <div className="role-pill">{user.role === "admin" ? "ADMIN CONSOLE" : "CLINICAL CONSOLE"}</div>
    <nav>{items.map(([id,label,Icon])=><button key={id} className={page===id?"nav-item active":"nav-item"} onClick={()=>setPage(id)}><Icon size={18}/><span>{label}</span></button>)}</nav>
    <div className="sidebar-bottom">
      <div className="user-mini"><div className="avatar">{user.name.slice(0,1)}</div><div><b>{user.name}</b><small>{user.role}</small></div></div>
      <button className="logout-btn" onClick={logout}><LogOut size={17}/> Logout</button>
    </div>
  </aside>;
}