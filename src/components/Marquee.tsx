const CLIENTS = [
  'TaxAct',
  'NFL Digital Media',
  'Federal Reserve Board',
  'Toyota',
  'Lexus',
  'Booz Allen Hamilton',
  'Pariveda Solutions',
  'Daylight Transport',
  'Stop Soldier Suicide',
  'JFFLabs',
];

export function MarqueeStrip() {
  const loop = [...CLIENTS, ...CLIENTS];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee__track">
        {loop.map((name, i) => (
          <span className="marquee__item" key={`${name}-${i}`}>
            <span className="sep" />
            {name}
          </span>
        ))}
      </div>
    </div>
  );
}
