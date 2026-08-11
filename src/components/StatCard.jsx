import React from "react";
export default function StatCard({icon:Icon,label,value,sub,tone=""}) {
  return <div className="stat-card"><div className={"stat-icon "+tone}><Icon size={19}/></div><div><span>{label}</span><strong>{value}</strong><small>{sub}</small></div></div>;
}