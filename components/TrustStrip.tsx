const data=[['10+','Years manufacturing'],['500+','Custom developments'],['30+','Export markets'],['98%','On-time delivery'],['24h','Typical response']];
export default function TrustStrip(){return <section className="v5-metrics"><div className="shell">{data.map(([a,b])=><div key={b}><strong>{a}</strong><span>{b}</span></div>)}</div></section>}
