import React from "react";
import RequestTable from "../components/RequestTable";
export default function RequestPage({type,requests,onSelect}) {
  const config = {
    automated:{title:"Automated Requests",subtitle:"Only applications approved automatically by the AI decision engine.",filter:r=>r.status==="Approved"},
    manual:{title:"Manual Requests",subtitle:"Pending, needs-review, appeal-risk and other applications requiring human handling.",filter:r=>!["Approved","Denied"].includes(r.status)},
    denial:{title:"Denial Requests",subtitle:"Only rejected applications and their decision records.",filter:r=>r.status==="Denied"}
  }[type];
  const data=requests.filter(config.filter);
  return <div className="page"><div className="welcome"><div><div className="eyebrow">ADMIN REQUEST QUEUE</div><h1>{config.title}</h1><p>{config.subtitle}</p></div><div className="count-pill">{data.length} requests</div></div><RequestTable title={config.title} subtitle={config.subtitle} data={data} onSelect={onSelect}/></div>;
}