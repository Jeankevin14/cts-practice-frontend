import React, {useState} from "react";
import Login from "./components/Login";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import RequestModal from "./components/RequestModal";
import AdminDashboard from "./pages/AdminDashboard";
import RequestPage from "./pages/RequestPage";
import Analytics from "./pages/Analytics";
import DoctorDashboard from "./pages/DoctorDashboard";
import Submit from "./pages/Submit";
import { requests as initialRequests } from "./data/requests";

export default function App() {
  const [user,setUser]=useState(null);
  const [page,setPage]=useState("dashboard");
  const [selected,setSelected]=useState(null);
  const [requests]=useState(initialRequests);

  const login=(u)=>{setUser(u);setPage(u.role==="admin"?"dashboard":"doctor");};
  const logout=()=>{setUser(null);setSelected(null);};
  if(!user) return <Login onLogin={login}/>;

  let content;
  if(user.role==="admin"){
    if(page==="dashboard") content=<AdminDashboard requests={requests} setPage={setPage} onSelect={setSelected}/>;
    else if(["automated","manual","denial"].includes(page)) content=<RequestPage type={page} requests={requests} onSelect={setSelected}/>;
    else content=<Analytics/>;
  } else {
    if(page==="doctor") content=<DoctorDashboard requests={requests} setPage={setPage} onSelect={setSelected}/>;
    else if(page==="submit") content=<Submit/>;
    else content=<RequestPage type="manual" requests={requests} onSelect={setSelected}/>;
  }

  return <div className="app-shell"><Sidebar user={user} page={page} setPage={setPage} logout={logout}/><main className="main"><Topbar title={page} user={user}/>{content}</main><RequestModal request={selected} onClose={()=>setSelected(null)}/></div>;
}