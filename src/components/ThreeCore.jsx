import React from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";

function Core() {
  const ref = React.useRef();
  useFrame((_, delta) => { if(ref.current) ref.current.rotation.y += delta * .25; });
  return <group ref={ref}>
    <Sphere args={[1.15,64,64]}><MeshDistortMaterial color="#35d3c8" roughness=".18" metalness=".7" distort={.28} speed={1.7}/></Sphere>
    {Array.from({length:10}).map((_,i)=><mesh key={i} rotation={[0,i*Math.PI/5,0]} position={[0,0,0]}><torusGeometry args={[1.5,.008,8,80]}/><meshBasicMaterial color="#68f3ea" transparent opacity=".35"/></mesh>)}
  </group>
}

export default function ThreeCore() {
  return <div className="three-card"><div className="three-label">AI DECISION ENGINE <span>LIVE</span></div><Canvas camera={{position:[0,0,4.2],fov:45}}><ambientLight intensity={1.2}/><pointLight position={[3,3,4]} intensity={10} color="#4de8dd"/><Float speed={2} rotationIntensity={.3} floatIntensity={.35}><Core/></Float><OrbitControls enableZoom={false}/></Canvas><div className="three-footer"><b>Real-time rule evaluation</b><span>2.4s avg decision latency</span></div></div>
}