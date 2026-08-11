import React from "react";
import { Search, ChevronRight } from "lucide-react";

const cls=s=>s==="Approved"?"approved":s==="Denied"?"denied":s==="Pending"||s==="Needs Review"?"pending":"risk";

export default function RequestTable({title,subtitle,data,onSelect}) {
  return <section className="panel">
    <div className="panel-head"><div><h2>{title}</h2><p>{subtitle}</p></div><div className="table-tools"><div className="small-search"><Search size={15}/><input placeholder="Filter"/></div></div></div>
    <div className="table-wrap"><table><thead><tr><th>Request</th><th>Patient</th><th>Procedure</th><th>Payer</th><th>Status</th><th>Confidence</th><th></th></tr></thead>
    <tbody>{data.map(r=><tr key={r.id} onClick={()=>onSelect?.(r)}><td><b>{r.id}</b><small>{r.submitted}</small></td><td>{r.patient}</td><td>{r.procedure}<small>{r.code}</small></td><td>{r.payer}</td><td><span className={"status "+cls(r.status)}>{r.status}</span></td><td><div className="confidence"><div><i style={{width:r.confidence+"%"}}/></div><b>{r.confidence}%</b></div></td><td><ChevronRight size={17}/></td></tr>)}</tbody></table></div>
    {data.length===0 && <div className="empty">No requests in this category.</div>}
  </section>;
}