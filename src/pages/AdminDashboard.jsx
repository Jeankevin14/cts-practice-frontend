import React from "react";
import { Activity, CheckCircle2, Clock3, XCircle, Zap, ArrowUpRight } from "lucide-react";
import StatCard from "../components/StatCard";
import ThreeCore from "../components/ThreeCore";
import RequestTable from "../components/RequestTable";

export default function AdminDashboard({requests,setPage,onSelect}) {
  const approved=requests.filter(r=>r.status==="Approved");
  const manual=requests.filter(r=>!["Approved","Denied"].includes(r.status));
  const denied=requests.filter(r=>r.status==="Denied");
  return <div className="page">
    <div className="welcome"><div><div className="eyebrow">OPERATIONS OVERVIEW</div><h1>Authorization command center</h1><p>Monitor automated decisions, manual work and denial activity.</p></div><div className="live-chip"><Activity size={15}/> System operational</div></div>
    <div className="stats"><StatCard icon={Zap} label="Processed today" value="1,284" sub="+18.4% vs yesterday" tone="cyan"/><StatCard icon={CheckCircle2} label="Automated approvals" value={approved.length} sub="Approved requests" tone="green"/><StatCard icon={Clock3} label="Manual queue" value={manual.length} sub="Awaiting review" tone="amber"/><StatCard icon={XCircle} label="Denials" value={denied.length} sub="Rejected requests" tone="red"/></div>
    <div className="dashboard-grid"><ThreeCore/><div className="mini-panel"><div className="panel-title"><span>Decision mix</span><ArrowUpRight size={17}/></div><div className="donut"><div><b>90.8%</b><span>Automated</span></div></div><div className="legend"><span><i className="dot green-dot"/>Approved</span><span><i className="dot amber-dot"/>Manual</span><span><i className="dot red-dot"/>Denied</span></div></div></div>
    <div className="quick-links"><button onClick={()=>setPage("automated")}><CheckCircle2/> Automated requests <b>{approved.length}</b></button><button onClick={()=>setPage("manual")}><Clock3/> Manual requests <b>{manual.length}</b></button><button onClick={()=>setPage("denial")}><XCircle/> Denial requests <b>{denied.length}</b></button></div>
    <RequestTable title="Latest authorization activity" subtitle="Click any request to inspect the decision and audit trail." data={requests.slice(0,6)} onSelect={onSelect}/>
  </div>;
}