import { Reveal } from './Reveal';
import { CountUp } from './CountUp';

export function ProofSection() {
  return (
    <section className="section rule-top" id="work">
      <div className="shell proof__head">
        <Reveal>
          <span className="eyebrow">03 · Receipts</span>
          <h2 className="t-display" style={{ marginTop: '1.5rem', maxWidth: '20ch' }}>
            Outcomes, not{' '}
            <em style={{ fontStyle: 'italic', color: 'var(--fg-muted)' }}>activities.</em>
          </h2>
        </Reveal>
        <Reveal delay={2}>
          <p className="t-lead t-muted-new">
            These aren't "advised on AI." These are shipped solutions that moved
            revenue, saved operating cost, and in one case saved lives.
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
          </div>

          <div className="proof__cell proof__cell--feature">
            <span className="proof__cell__label">Daylight Transport</span>
            <div className="proof__cell__metric">
              $<CountUp to={28} format={(n) => Math.round(n).toString()} />K →{' '}
              $<CountUp to={4} format={(n) => Math.round(n).toString()} />M
              <span className="unit">in 9 months</span>
            </div>
          </div>

          <div className="proof__cell">
            <span className="proof__cell__label">NFL Digital Media</span>
            <div className="proof__cell__metric">
              $<CountUp to={5} format={(n) => Math.round(n).toString()} />M
              <span className="unit">annual opex</span>
            </div>
          </div>

          <div className="proof__cell">
            <span className="proof__cell__label">Booz Allen Hamilton</span>
            <div className="proof__cell__metric">
              $<CountUp to={9} format={(n) => Math.round(n).toString()} />M+
              <span className="unit">new business</span>
            </div>
          </div>

          <div className="proof__cell">
            <span className="proof__cell__label">Stop Soldier Suicide</span>
            <div className="proof__cell__metric">
              Zero<span className="unit">loss of life</span>
            </div>
          </div>

          <div className="proof__cell">
            <span className="proof__cell__label">Toyota · Lexus</span>
            <div className="proof__cell__metric">
              $<CountUp to={35} format={(n) => Math.round(n).toString()} />M
              <span className="unit">portfolio managed</span>
            </div>
          </div>

          <div className="proof__cell">
            <span className="proof__cell__label">OMERS</span>
            <div className="proof__cell__metric">
              $<CountUp to={10} format={(n) => Math.round(n).toString()} />M
              <span className="unit">annual revenue enabled</span>
            </div>
          </div>

          <div className="proof__cell">
            <span className="proof__cell__label">Pariveda Solutions</span>
            <div className="proof__cell__metric">
              $<CountUp to={6} format={(n) => Math.round(n).toString()} />M+
              <span className="unit">annual revenue</span>
            </div>
          </div>

          <div className="proof__cell">
            <span className="proof__cell__label">AWS · Pariveda</span>
            <div className="proof__cell__metric">
              #1<span className="unit">partner driver · SoCal 2021</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
