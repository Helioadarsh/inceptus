import Link from "next/link";

export function ContactBanner() {
  return (
    <section className="contact-banner" id="contact">
      <div className="contact-banner-copy">
        <p className="section-no">YOUR NEXT MOVE</p>
        <h2>Still deciding where growth should begin?</h2>
        <p>Tell us where your brand wants to go. We&apos;ll help you find the clearest path forward.</p>
        <Link href="/hire-us">Contact Us <span>↗</span></Link>
      </div>
    </section>
  );
}
