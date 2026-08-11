import React from "react";
import { Bell, Search, Menu } from "lucide-react";

export default function Topbar({ title, user }) {
  return <header className="topbar">
    <div className="mobile-title"><Menu size={20}/><b>{title}</b></div>
    <div className="search"><Search size={17}/><input placeholder="Search patients, requests, procedures..."/></div>
    <div className="top-actions"><button className="round-btn"><Bell size={18}/><i/></button><div className="top-user"><div className="avatar">{user.name.slice(0,1)}</div><div><b>{user.name}</b><small>{user.role}</small></div></div></div>
  </header>;
}