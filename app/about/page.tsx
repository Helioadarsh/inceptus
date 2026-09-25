import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { FAQ } from "@/components/faq";
import { SiteFooter } from "@/components/site-footer";
import { ContactBanner } from "@/components/contact-banner";
import { CapabilityTicker } from "@/components/capability-ticker";

export default function About() {
  const principles = [
    ["Commercial clarity", "Every recommendation begins with the business model."],
    ["Cultural intelligence", "Context matters as much as reach."],
    ["Creative discipline", "Ideas must earn attention and move action."],
    ["Technical depth", "Measurement and experience are part of marketing."],
  ];

  return <main className="inner-page">
    <SiteHeader/>
    <section className="about-hero"><div className="star-field stars-one"/><p className="section-no">ABOUT INCEPTUS</p><h1>Marketing built to make your <span>profit move.</span></h1><p>We are a digital growth agency for brands that want sharper decisions, stronger demand and sustainable performance across India.</p><Link className="primary-btn" href="/hire-us">Plan profitable growth <span>↗</span></Link></section>
    <section className="about-manifesto"><p>WE BELIEVE</p><h2>The best Growth partner is not the loudest. It is the one that understands how customers discover, decide and build systems that help you grow.</h2></section>
    <CapabilityTicker/>
    <section className="profit-system" id="approach"><div className="section-head"><p className="section-no">OUR OPERATING SYSTEM</p><h2>From attention<br/>to profitable growth.</h2></div><div className="profit-track"><article><b>01</b><h3>Find the leak</h3><p>We map acquisition, conversion and retention to see where growth is being lost.</p><span>DIAGNOSE</span></article><article><b>02</b><h3>Build relevance</h3><p>We align language, creative and channel intent to the consumers you need to win.</p><span>CREATE</span></article><article><b>03</b><h3>Improve economics</h3><p>We connect media efficiency with landing pages, marketplaces and repeat purchase.</p><span>COMPOUND</span></article></div></section>
    <section className="launch-section" aria-labelledby="launch-title"><div className="launch-grid" aria-hidden="true"/><div className="launch-copy"><p className="launch-pill">FROM FIRST SIGNAL TO COMPOUNDING GROWTH</p><h2 id="launch-title">Take the leap from an <span>idea</span> to a growth engine.</h2><p>Strategy, technology and distribution move together in one focused operating system.</p></div><div className="launch-steps"><article><small>01</small><strong>Find the signal</strong><span>Market clarity</span></article><article><small>02</small><strong>Build the system</strong><span>Creative + technology</span></article><article><small>03</small><strong>Scale what works</strong><span>Measured growth</span></article></div></section>
    <section className="principles"><p className="section-no">WHAT WE BRING</p><div>{principles.map(([title,copy],index)=><article key={title}><small>0{index+1}</small><h3>{title}</h3><p>{copy}</p></article>)}</div></section>
    <ContactBanner/><FAQ/><SiteFooter/>
  </main>;
}
