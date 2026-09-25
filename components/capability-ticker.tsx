const defaultItems = [
  "AI Agents",
  "Web Development",
  "SEO",
  "Meta Ads",
  "Google Ads",
  "System Architecture",
  "Agentic AI",
  "Cloud Engineering",
  "Growth Strategy",
  "Marketing Automation",
];

export function CapabilityTicker({items=defaultItems}:{items?:string[]}) {
  const repeated = [...items, ...items];
  return <section className="capability-ticker" aria-label="inceptus capabilities">
    <div className="ticker-track">{repeated.map((item,index)=><span key={`${item}-${index}`}>{item}<i>✦</i></span>)}</div>
  </section>;
}
