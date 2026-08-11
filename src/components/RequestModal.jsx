import React from "react";
import { X, CheckCircle2, ShieldCheck } from "lucide-react";
export default function RequestModal({request,onClose}) {
  if(!request) return null;
  return <div className="modal-backdrop" onClick={onClose}><div className="modal" onClick={e=>e.stopPropagation()}>
    <div className="modal-head"><div><span className="eyebrow">AUTHORIZATION RECORD</span><h2>{request.id}</h2></div><button className="round-btn" onClick={onClose}><X size={18}/></button></div>
    <div className="decision"><CheckCircle2 size={24}/><div><b>{request.status}</b><span>AI confidence {request.confidence}%</span></div></div>
    <div className="detail-grid"><div><small>Patient</small><b>{request.patient}</b></div><div><small>Payer</small><b>{request.payer}</b></div><div><small>Procedure</small><b>{request.procedure}</b></div><div><small>Risk</small><b>{request.risk}</b></div></div>
    <div className="audit"><ShieldCheck size={18}/><div><b>Audit trail</b><span>Rules evaluated → clinical criteria checked → payer policy matched → decision recorded</span></div></div>
  </div></div>
}