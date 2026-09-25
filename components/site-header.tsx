"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

const links = [["Home","/"],["About","/about"],["Services","/services"],["Careers","/careers"],["Hire us","/hire-us"]];

export function SiteHeader(){
  const [open,setOpen]=useState(false);
  useEffect(()=>{document.body.style.overflow=open?"hidden":"";return()=>{document.body.style.overflow=""}},[open]);
  return <header className="top-menu">
    <Link className="wordmark" href="/" aria-label="inceptus home">incep<span>tus</span></Link>
    <nav className="desktop-menu" aria-label="Main menu">{links.map(([label,href])=><Link className={label==="Hire us"?"menu-cta":""} key={href} href={href}>{label}{label==="Hire us"?" ↗":""}</Link>)}</nav>
    <button className="menu-toggle" type="button" aria-label={open?"Close menu":"Open menu"} aria-expanded={open} onClick={()=>setOpen(!open)}><span/><span/><span/></button>
    <div className={`mobile-menu ${open?"is-open":""}`} aria-hidden={!open}>
      <p>MENU</p>{links.map(([label,href],i)=><Link key={href} href={href} onClick={()=>setOpen(false)}><small>0{i+1}</small>{label}<span>↗</span></Link>)}
      <p className="mobile-menu-note">One India. Many audiences.<br/>Smarter growth.</p>
    </div>
  </header>
}
