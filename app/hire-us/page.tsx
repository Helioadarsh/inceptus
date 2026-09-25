import { ContactInquiryForm } from "@/components/contact-inquiry-form";
import { FAQ } from "@/components/faq";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export default function Hire() {
  return <main className="inner-page"><SiteHeader/><section className="inner-hero"><p className="section-no">HIRE US</p><h1>Let&apos;s build your next <span>growth story.</span></h1><p>Tell us where you are, where you want to go and what is getting in the way.</p></section><section className="hire-grid"><div><h2>Start the real Growth with us.</h2><p>We&apos;ll respond with focused questions and a practical next step.</p></div><ContactInquiryForm/></section><section className="experts-visual" aria-labelledby="experts-visual-title"><img src="/hire-us-experts.png" alt="A person looking across a cosmic landscape toward a planet"/><div><p className="section-no">RIGHT SOLUTIONS. REAL GROWTH.</p><h2 id="experts-visual-title">Our team of experts is always keen on formulating only the right solutions for your business’ everyday.</h2></div></section><FAQ/><SiteFooter/></main>;
}
