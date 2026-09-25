import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { FAQ } from "@/components/faq";
import { SiteFooter } from "@/components/site-footer";

const careerPaths = [
  {
    title: "Organic Marketing Consultant",
    copy: "Shape search, content and regional discovery strategies that compound attention into durable demand.",
  },
  {
    title: "Performance Marketer",
    copy: "Build accountable paid-growth systems across search, social and commerce with sharp creative testing.",
  },
  {
    title: "Agentic AI",
    copy: "Design intelligent agents and connected automations that help ambitious teams move faster and smarter.",
  },
  {
    title: "Software & Website Development",
    copy: "Create high-performance digital products, websites and platforms where experience meets measurable growth.",
  },
];

export default function Careers(){return <main className="inner-page">
  <SiteHeader/>
  <section className="inner-hero image-hero"><p className="section-no">CAREERS</p><h1>Build what comes <span>next.</span></h1><p>Work where marketing, technology, creative, data and culture meet.</p></section>
  <section className="career-paths" aria-labelledby="career-paths-title">
    <div className="career-paths-head"><p className="section-no">OPEN PATHS</p><h2 id="career-paths-title">Join our growing teams.</h2><p>Choose the discipline where you want to do your most ambitious work.</p></div>
    <div className="career-path-grid">{careerPaths.map((role,index)=><article className="career-path-card" key={role.title}>
      <small>0{index+1}</small><h3>{role.title}</h3><p>{role.copy}</p><Link href="/hire-us">Apply Now <span>↗</span></Link>
    </article>)}</div>
  </section>
  <section className="career-culture">
    <div className="career-culture-intro"><p className="section-no">CULTURE &amp; GROWTH</p><h2>Grow the work.<br/><span>Grow yourself.</span></h2><p>At inceptus, ambitious work and individual growth are part of the same mission. You&apos;ll learn across disciplines, own meaningful outcomes and build alongside people who share what they know.</p></div>
    <div className="culture-grid"><article><small>01</small><h3>Learn in public</h3><p>Share unfinished thinking, invite useful critique and turn every project into reusable knowledge.</p></article><article><small>02</small><h3>Own the outcome</h3><p>You&apos;ll have room to make decisions—and the support to make those decisions stronger.</p></article><article><small>03</small><h3>Cross disciplines</h3><p>Strategists, marketers, designers and engineers work together instead of handing work downstream.</p></article><article><small>04</small><h3>Progress with purpose</h3><p>Growth is measured by sharper judgment, larger responsibility and work that moves the business.</p></article></div>
  </section>
  <section className="career-values"><article><h2>Think commercially</h2><p>Understand the business behind the brief.</p></article><article><h2>Stay curious</h2><p>India&apos;s markets keep changing. So should our thinking.</p></article><article><h2>Make together</h2><p>Strong work comes from generous, cross-disciplinary teams.</p></article></section>
  <section className="empty-roles"><p className="section-no">YOUR NEXT MISSION</p><h2>Don&apos;t see the exact role?</h2><p>We still welcome thoughtful introductions from people working across strategy, creative, media and technology.</p><Link className="primary-btn" href="/hire-us">Introduce yourself ↗</Link></section>
  <FAQ/><SiteFooter/>
</main>}
