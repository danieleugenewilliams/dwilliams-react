import { Reveal } from './Reveal';
import { CountUp } from './CountUp';

export function ProofSection() {
  return (
    <section className="section rule-top" id="work">
      <div className="shell proof__head">
        <Reveal>
          <span className="eyebrow">03 — Receipts</span>
          <h2 className="t-display" style={{ marginTop: '1.5rem', maxWidth: '20ch' }}>
            Outcomes, not{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--fg-muted)' }}>activities.</em>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="t-lead t-muted-new">
            These aren't "advised on AI." These are shipped solutions that moved
            revenue, saved operating cost, and — in one case — saved lives.
          </p>
        </Reveal>
      </div>

      <div className="shell">
        <Reveal className="proof__grid">
          <div className="proof__cell">
            <span className="proof__cell__label">TaxAct</span>
            <div className="proof__cell__metric">
              $<CountUp to={2.5} format={(n) => n.toFixed(1)} />M
              <span className="unit">saved · yr 1</span>
            </div>
            <p className="proof__cell__body">
              Led legacy modernization — automatically converting 20-year-old C++ to modern
              C# and React, then scaling the solution across their codebase.
            </p>
          </div>

          <div className="proof__cell proof__cell--feature">
            <span className="proof__cell__label">Daylight Transport</span>
            <div className="proof__cell__metric">
              $<CountUp to={28} format={(n) => Math.round(n).toString()} />K →{' '}
              $<CountUp to={4} format={(n) => Math.round(n).toString()} />M
              <span className="unit">in 9 months</span>
            </div>
            <p className="proof__cell__body">
              Accelerated a client's transformation through integrated product strategy,
              technical architecture, and executive alignment.
            </p>
          </div>

          <div className="proof__cell">
            <span className="proof__cell__label">NFL Digital Media</span>
            <div className="proof__cell__metric">
              $<CountUp to={5} format={(n) => Math.round(n).toString()} />M
              <span className="unit">annual opex</span>
            </div>
            <p className="proof__cell__body">
              Reimagined organizational design and product engineering strategy for a
              1,000+ person org in 12 weeks.
            </p>
          </div>

          <div className="proof__cell">
            <span className="proof__cell__label">Booz Allen Hamilton</span>
            <div className="proof__cell__metric">
              $<CountUp to={9} format={(n) => Math.round(n).toString()} />M+
              <span className="unit">new business</span>
            </div>
            <p className="proof__cell__body">
              Built and led consulting practices generating $6M+ annually across financial
              services, transportation, and media.
            </p>
          </div>

          <div className="proof__cell">
            <span className="proof__cell__label">Stop Soldier Suicide</span>
            <div className="proof__cell__metric">
              Zero<span className="unit">loss of life</span>
            </div>
            <p className="proof__cell__body">
              Led customer strategy for platform rearchitecture — AI-driven suicidality
              signals for clinicians serving veterans.
            </p>
          </div>

          <div className="proof__cell">
            <span className="proof__cell__label">Toyota · Lexus</span>
            <div className="proof__cell__metric">
              $<CountUp to={35} format={(n) => Math.round(n).toString()} />M
              <span className="unit">portfolio managed</span>
            </div>
            <p className="proof__cell__body">
              Managed Lexus digital properties — 6M+ monthly visits, 564K leads annually —
              and secured a $1.5M Retail Transformation budget.
            </p>
          </div>

          <div className="proof__cell">
            <span className="proof__cell__label">OMERS</span>
            <div className="proof__cell__metric">
              $<CountUp to={10} format={(n) => Math.round(n).toString()} />M
              <span className="unit">investment thesis</span>
            </div>
            <p className="proof__cell__body">
              Delivered a data monetization investment thesis to C-suite at a
              top-20 global pension fund.
            </p>
          </div>

          <div className="proof__cell">
            <span className="proof__cell__label">Pariveda Solutions</span>
            <div className="proof__cell__metric">
              $<CountUp to={6} format={(n) => Math.round(n).toString()} />M+
              <span className="unit">annual revenue</span>
            </div>
            <p className="proof__cell__body">
              Built Pariveda's national nonprofit vertical from scratch — from zero
              to $6M+ in recurring annual revenue.
            </p>
          </div>

          <div className="proof__cell">
            <span className="proof__cell__label">AWS · Pariveda</span>
            <div className="proof__cell__metric">
              #1<span className="unit">partner driver · SoCal 2021</span>
            </div>
            <p className="proof__cell__body">
              Drove $10M+ in AWS net-new revenue, earning recognition as the top
              AWS revenue driver in Southern California.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
