import React, {useState} from "react";
import { Send, CheckCircle2 } from "lucide-react";
export default function Submit() {
 const [sent,setSent]=useState(false);
 if(sent) return <div className="page"><div className="success-card"><CheckCircle2 size={52}/><h1>Authorization submitted</h1><p>Your request was added to the AI decision workflow.</p><button className="primary-btn" onClick={()=>setSent(false)}>Submit another</button></div></div>;
 return <div className="page"><div className="welcome"><div><div className="eyebrow">NEW REQUEST</div><h1>Create authorization</h1><p>Enter the clinical and payer information required for review.</p></div></div><div className="form-panel"><div className="form-grid">{["Patient name","Procedure / medication","CPT / HCPCS / Rx code","Payer","Diagnosis / clinical indication","Clinical notes"].map((x,i)=><label key={x}>{x}{i===5?<textarea placeholder={x}/>:<input placeholder={x}/>}</label>)}</div><button className="primary-btn" onClick={()=>setSent(true)}><Send size={17}/> Submit for authorization</button></div></div>
}