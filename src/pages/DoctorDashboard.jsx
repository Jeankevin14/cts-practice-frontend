import React from "react";
import { FilePlus2, Clock3, CheckCircle2, FileText } from "lucide-react";
import StatCard from "../components/StatCard";
import RequestTable from "../components/RequestTable";
export default function DoctorDashboard({requests,setPage,onSelect}) {
  return <div className="page"><div className="welcome"><div><div className="eyebrow">CLINICIAN WORKSPACE</div><h1>Good morning, Doctor</h1><p>Submit and monitor patient authorization requests.</p></div><button className="primary-btn" onClick={()=>setPage("submit")}><FilePlus2 size={17}/> New authorization</button></div>
  <div className="stats"><StatCard icon={FileText} label="My requests" value="18" sub="This month" tone="cyan"/><StatCard icon={CheckCircle2} label="Approved" value="14" sub="77.8% approval" tone="green"/><StatCard icon={Clock3} label="In review" value="3" sub="Avg. 1.8 days" tone="amber"/></div>
  <RequestTable title="Recent requests" subtitle="Your latest prior authorization submissions." data={requests.slice(0,5)} onSelect={onSelect}/></div>;
}