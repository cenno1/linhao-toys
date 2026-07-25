const steps = [
  ['01','Brief','Share product idea, size, quantity and target market.'],
  ['02','Design','Confirm shape, artwork, colors and packaging.'],
  ['03','Sample','Approve appearance, material, printing and function.'],
  ['04','Production','Mass production follows approved specifications.'],
  ['05','QC','Strict inspection before packing and shipment.'],
  ['06','Delivery','Global shipping solutions by air, sea or DDP.'],
];

export default function OEMProcess(){
  return (
    <section className="section process-v4">
      <div className="shell">
        <div className="section-head-v4">
          <div>
            <span className="eyebrow light">OEM & ODM PROCESS</span>
            <h2>Six clear steps from idea to delivery.</h2>
          </div>
        </div>
        <div className="process-v4-grid">
          {steps.map(([n,t,d])=>(
            <article key={n}>
              <span>{n}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
