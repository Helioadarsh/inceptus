import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { FAQ } from "@/components/faq";
import { SiteFooter } from "@/components/site-footer";
import { ContactBanner } from "@/components/contact-banner";

const services=[
 {title:"Search Engine Optimization",tag:"SEO · ASO · ORGANIC GROWTH",copy:"Build durable organic visibility across search engines, local discovery, e-commerce categories and app stores.",points:["Technical SEO","Local & e-commerce SEO","App Store Optimization","Organic growth strategy"]},
 {title:"Social Media Marketing",tag:"SMM · SMO · COMMUNITY",copy:"Create a consistent brand presence and turn platform attention into an active, loyal audience.",points:["Content calendars","Profile management","Community engagement","Social commerce"]},
 {title:"Paid & Performance Marketing",tag:"PPC · SEM · CRO",copy:"Run measurable paid campaigns designed around high-intent demand, qualified leads and conversion efficiency.",points:["Google & Bing Ads","Meta, LinkedIn & YouTube Ads","Conversion optimization","Lead generation"]},
 {title:"Website Design & Development",tag:"UX · WEB · COMMERCE",copy:"Build fast, intuitive digital storefronts that make discovery, consideration and conversion feel seamless.",points:["UI/UX design","Web & app development","Shopify & WooCommerce","Custom e-commerce"]},
 {title:"Influencer & Affiliate Marketing",tag:"CREATORS · PARTNERS",copy:"Extend brand reach through relevant creators and performance-oriented partner networks.",points:["Creator discovery","Campaign management","Commercial negotiation","Affiliate programmes"]},
 {title:"Online Reputation Management",tag:"ORM · LISTENING",copy:"Monitor, protect and improve how your brand is understood across reviews, search and social channels.",points:["Review management","Social listening","Response planning","Search reputation"]},
 {title:"Email & SMS Marketing",tag:"CRM · RETENTION",copy:"Use direct, permission-based communication to improve lifecycle engagement and repeat purchase.",points:["Welcome flows","Abandoned-cart journeys","Newsletters","Marketing automation"]},
 {title:"Digital Strategy & Consulting",tag:"STRATEGY · ANALYTICS",copy:"Connect brand positioning, media planning, measurement and execution into one practical growth roadmap.",points:["Brand positioning","Media planning","Analytics dashboards","Growth roadmaps"]},
 {title:"Agentic AI & Multi-Agent Systems",tag:"AGENTS · RAG · ORCHESTRATION",copy:"Design autonomous systems that reason, plan and execute multi-step work across business tools with the right controls.",points:["Custom AI agents","Multi-agent orchestration","RAG & enterprise data","Agent evaluation"]},
 {title:"Cloud Engineering & Infrastructure",tag:"CLOUD · SECURITY · SCALE",copy:"Create resilient infrastructure for demanding AI workloads while supporting security, privacy and data-sovereignty requirements.",points:["AWS, Azure & Google Cloud","AI workload architecture","Private VPC deployments","On-premise models"]},
 {title:"Software & Full-Stack Development",tag:"PRODUCT · APPS · AUTOMATION",copy:"Build the interfaces, backend systems and integrations that let people work with intelligent tools safely and efficiently.",points:["Web & mobile apps","Operational portals","KPI dashboards","CRM, ERP & API integration"]},
 {title:"Managed AI Services & Governance",tag:"AI OPS · HITL · GUARDRAILS",copy:"Keep production AI systems observable, reliable and accountable through continuous supervision and operational controls.",points:["24/7 AI operations","Performance monitoring","Human-in-the-loop approval","Permissions & guardrails"]}
];

export default function Services(){return <main className="inner-page">
  <SiteHeader/>
  <section className="inner-hero image-hero"><p className="section-no">SERVICES</p><h1>Growth capabilities built around <span>how India buys.</span></h1><p>Strategy, creative, media and technology connected across the customer journey.</p></section>
  <section className="service-showcase"><div className="service-showcase-head"><p className="section-no">12 CONNECTED CAPABILITIES</p><h2>Choose a card.<br/><span>See what moves growth.</span></h2><p>Hover with a mouse or tap a card on mobile to explore each capability.</p></div><div className="service-card-grid">{services.map((service,i)=><details className="service-card" key={service.title}><summary><small>{String(i+1).padStart(2,"0")}</small><div><span>{service.tag}</span><h3>{service.title}</h3></div><b aria-hidden="true">+</b></summary><div className="service-card-content"><p>{service.copy}</p><ul>{service.points.map(point=><li key={point}>{point}</li>)}</ul></div></details>)}</div></section>
  <section className="systems-partner" aria-labelledby="systems-title">
    <div className="systems-copy"><p className="section-no">INTEGRATED AI &amp; GROWTH SYSTEMS PARTNER</p><h2 id="systems-title">One Partner.<br/>One Architecture.<br/><span>Total Accountability.</span></h2><p>We design, build, host and scale unified growth engines where infrastructure, software, autonomous AI and distribution work as a single machine.</p><Link href="/hire-us">Build your growth system <span>↗</span></Link></div>
    <div className="systems-architecture" aria-label="Four connected layers of the inceptus growth architecture">
      <div className="system-window"><div className="system-window-bar"><span/><span/><span/><b>INCEPTUS / GROWTH OS</b></div><div className="system-flow"><article><small>04</small><strong>Distribution</strong><p>Search · Social · Commerce</p></article><article><small>03</small><strong>Agentic AI</strong><p>Qualify · Decide · Act</p></article><article><small>02</small><strong>Software</strong><p>Products · Workflows · Data</p></article><article><small>01</small><strong>Infrastructure</strong><p>Cloud · Security · Scale</p></article></div><div className="system-pulse"><i/><span>ONE CONNECTED MACHINE</span></div></div>
    </div>
    <div className="systems-value"><span>THE VALUE</span><p>We don&apos;t just run ads or hand over code; we build production-grade systems that <strong>acquire, qualify, convert and retain</strong> customers autonomously.</p></div>
  </section>
  <ContactBanner/><FAQ/><SiteFooter/>
</main>}
