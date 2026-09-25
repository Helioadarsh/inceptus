const services = [
  ["Search, everywhere", "SEO, AEO, GEO and voice-search systems that make your brand discoverable across Google, marketplaces and AI answers."],
  ["Performance, accountable", "Paid search, paid social and marketplace advertising planned around contribution—not vanity metrics."],
  ["Web / Software Development", "High-performance websites, applications and connected platforms engineered around real business workflows."],
  ["Regional growth, connected", "Language, cultural context, commerce and creator signals brought into one coherent customer journey."],
  ["Agentic AI / AI Agent", "Autonomous agents, retrieval systems and workflow automation designed to qualify, decide and act with the right controls."],
];

const languages = ["हिंदी", "বাংলা", "தமிழ்", "తెలుగు", "मराठी", "ગુજરાતી", "ಕನ್ನಡ", "മലയാളം", "ਪੰਜਾਬੀ", "ଓଡ଼ିଆ", "অসমীয়া"];
const serviceMoments = ["SEO", "SOCIAL MEDIA", "PAID SEARCH", "WEB DEVELOPMENT", "SOFTWARE DEVELOPMENT", "AI AGENTS", "AGENTIC AI", "CLOUD ENGINEERING", "EMAIL & SMS", "INFLUENCER MARKETING", "REPUTATION MANAGEMENT", "DIGITAL STRATEGY"];

function SideNav() {
  return <aside className="side-nav" aria-label="Primary navigation">
    <a className="mark brand-logo" href="#top" aria-label="inceptus home"><img src="/inceptus-logo.png" alt=""/></a>
    <nav>
      <a href="#work"><i>01</i>Work</a><a href="#services"><i>02</i>Services</a><a href="#approach"><i>03</i>Approach</a><a href="#languages"><i>04</i>Markets</a>
    </nav>
    <a className="side-contact" href="#contact">Let&apos;s talk <span>↗</span></a>
  </aside>
}

export default function Home() {
  return <div id="top" className="site-shell"><SideNav/><main>
    <SiteHeader/>
    <section className="hero">
      <div className="star-field stars-one" aria-hidden="true"/><div className="star-field stars-two" aria-hidden="true"/>
      <div className="hero-copy">
        <p className="kicker">PAN-INDIA D2C GROWTH AGENCY</p>
        <h1>Defining a new era of <span>Growth.</span></h1>
        <p className="lede">We build growth for India&apos;s many languages, markets, cultures and consumer behaviours.</p>
        <a className="primary-btn" href="#contact">Build your growth plan <span>↗</span></a>
      </div>
      <div className="hero-strip"><span>ONE INDIA</span><span>MANY MARKETS</span><span>ONE GROWTH SYSTEM</span></div>
    </section>

    <section className="proof-strip" aria-label="Our growth focus"><p>Built for modern consumer brands</p><div><span>D2C</span><span>SEARCH</span><span>MARKETPLACES</span><span>CREATORS</span><span>REGIONAL</span></div></section>
    <CapabilityTicker/>

    <section className="statement" id="work">
      <p className="section-no">01 / THE OPPORTUNITY</p>
      <div className="opportunity-capsules" aria-label="We make sure you get a higher level of satisfaction from software development to marketing"><span>We make sure</span><span>you get a higher level of satisfaction</span><span>from software development to marketing.</span></div>
      <p>One accountable partner across strategy, software, AI systems and distribution.</p>
    </section>

    <section className="services" id="services">
      <div className="section-head"><p className="section-no">02 / WHAT WE GIVE</p><h2>Strategic solutions built<br/>to achieve your goals.</h2></div>
      <div className="service-list">{services.map(([title, copy], index) => <article key={title}><span className="service-num">0{index + 1}</span><div><h3>{title}</h3><p>{copy}</p></div><span className="arrow">↗</span></article>)}</div>
    </section>

    <section className="language-stage" id="languages">
      <div className="language-copy"><p className="section-no">03 / REGIONAL INTELLIGENCE</p><h2>Build for the way people <em>live and work.</em></h2><p>We adapt websites, digital products, AI agents and growth campaigns to regional languages, local workflows, search behaviour, cultural context and buying patterns.</p></div>
      <div className="language-orbit" aria-label="Supported regional languages">{languages.map((language, index) => <span style={{"--i": index} as React.CSSProperties} key={language}>{language}</span>)}</div>
    </section>

    <section className="loop" id="approach">
      <p className="section-no">04 / THE GROWTH LOOP</p><h2>A system you keep running<br/><span>as the market moves.</span></h2><p className="loop-subheading">We build, host, and scale autonomous growth engines.</p>
      <div className="loop-grid"><article><b>01</b><h3>The Infrastructure &amp; Code</h3><p>Secure servers, custom software, and responsive web applications.</p></article><article><b>02</b><h3>The Intelligence</h3><p>Custom Agentic AI systems that automate operations, handle lead qualification, or personalize user experiences.</p></article><article><b>03</b><h3>The Distribution</h3><p>Organic SEO, content, and high-ROI performance marketing.</p></article></div>
    </section>

    <section className="festival"><p className="section-no">05 / CULTURAL MOMENTS</p><h2>Every aspect matter<br/>for your business.</h2><p className="festival-subheading">We help you to achieve those things in an excellent way.</p><div className="festival-marquee" aria-label="Services we provide">{serviceMoments.map(service => <span key={service}>{service}</span>)}</div><p className="festival-note">Strategy × technology × intelligence × distribution × measurable growth</p></section>

    <section className="fit" id="careers"><div><p className="section-no">BUILT FOR THE NEXT GENERATION</p><h2>Not every brand needs another agency.</h2></div><p>We work best with ambitious teams ready to connect software development, AI systems, performance marketing, regional relevance and strong creative into one modern growth engine.</p></section>

    <ContactBanner/>
    <FAQ/><SiteFooter/>
  </main></div>
}
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FAQ } from "@/components/faq";
import { ContactBanner } from "@/components/contact-banner";
import { CapabilityTicker } from "@/components/capability-ticker";
