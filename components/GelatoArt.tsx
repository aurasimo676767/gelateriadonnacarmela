"use client";
import { motion } from "motion/react";
import { useReduced } from "@/lib/useReduced";
export default function GelatoArt({ kind, className = "" }: { kind: string; className?: string }) {
  const reduce = useReduced();
  return <motion.svg viewBox="0 0 280 300" className={className} fill="none" aria-hidden="true" initial="hidden" whileInView="show" viewport={{ once: true, amount: .3 }}>
    <ellipse cx="140" cy="278" rx="68" ry="9" fill="currentColor" opacity=".08"/>
    {kind === "gelato" ? <>
      <motion.g variants={{ hidden: { y: 35, opacity: 0 }, show: { y: 0, opacity: 1, transition: { duration: .7 } } }}>
        <path d="M84 145L140 270L196 145Z" fill="var(--color-tortora)" stroke="currentColor" strokeWidth="3"/>
        <path d="M95 164L162 220M106 188L151 243M179 164L121 224M167 189L131 245" stroke="currentColor" strokeWidth="2" opacity=".35"/>
      </motion.g>
      {[{x:107,y:125,c:"var(--color-latte)"},{x:174,y:122,c:"var(--color-salvia)"},{x:141,y:70,c:"var(--color-tortora)"}].map((s,i)=><motion.g key={i} variants={{ hidden:{ y: reduce ? 0 : -100, opacity:0, scale:.5 },show:{y:0,opacity:1,scale:1,transition:{type:"spring",stiffness:160,damping:13,delay:.2+i*.18}} }}><circle cx={s.x} cy={s.y} r="43" fill={s.c} stroke="currentColor" strokeWidth="3"/><path d={`M${s.x-24} ${s.y-9}q7-17 25-18`} stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity=".25"/></motion.g>)}
    </> : kind === "granita" ? <>
      <motion.g variants={{ hidden:{y:40,opacity:0},show:{y:0,opacity:1,transition:{duration:.8}} }}>
        <path d="M75 137H205L185 242Q140 267 95 242Z" fill="var(--color-latte)" stroke="currentColor" strokeWidth="3"/>
        <path d="M86 172H195L183 234Q140 251 97 234Z" fill="var(--color-salvia)"/>
        <path d="M75 137Q83 103 104 111Q120 66 144 91Q175 76 187 110Q211 111 205 137Z" fill="var(--color-latte)" stroke="currentColor" strokeWidth="3"/>
        <path d="M173 105L198 39" stroke="currentColor" strokeWidth="9" strokeLinecap="round"/>
        <path d="M106 189L117 227" stroke="var(--color-latte)" strokeWidth="5" strokeLinecap="round"/>
      </motion.g>
    </> : kind === "brioche" ? <motion.g variants={{hidden:{scale:.5,rotate:-20,opacity:0},show:{scale:1,rotate:0,opacity:1,transition:{type:"spring",stiffness:120,damping:12}}}}>
      <path d="M52 191C48 100 229 94 229 191C229 262 52 258 52 191Z" fill="var(--color-tortora)" stroke="currentColor" strokeWidth="3"/>
      <ellipse cx="141" cy="114" rx="35" ry="30" fill="var(--color-tortora)" stroke="currentColor" strokeWidth="3"/>
      <path d="M76 186Q84 152 108 149M115 101Q127 87 142 90" stroke="var(--color-latte)" strokeWidth="8" strokeLinecap="round"/>
      <path d="M61 212Q139 238 218 211" stroke="currentColor" strokeWidth="2" opacity=".3"/>
    </motion.g> : <motion.g variants={{hidden:{y:35,rotate:-8,opacity:0},show:{y:0,rotate:0,opacity:1,transition:{duration:.8}}}}>
      <ellipse cx="134" cy="248" rx="85" ry="14" fill="var(--color-latte)" stroke="currentColor" strokeWidth="3"/>
      <path d="M196 147C254 129 250 209 191 207" stroke="currentColor" strokeWidth="9"/>
      <path d="M69 139H200L189 217Q135 253 81 217Z" fill="var(--color-latte)" stroke="currentColor" strokeWidth="3"/>
      <ellipse cx="134" cy="140" rx="65" ry="14" fill="currentColor"/>
      <path d="M110 104C88 81 132 77 112 49M150 99C127 76 171 72 151 44" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity=".45"/>
    </motion.g>}
  </motion.svg>;
}
