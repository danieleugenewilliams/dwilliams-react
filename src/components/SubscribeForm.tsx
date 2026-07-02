import { useState, type ReactNode } from 'react';
import { ArrowRight } from './Icons';

const CC4NC_SUBSCRIBE = 'https://claudecodefornoncoders.substack.com/subscribe';

export function SubscribeForm({
  caption,
  variant = 'ink',
}: {
  caption?: ReactNode;
  variant?: 'ink' | 'coral';
}) {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const url = email
      ? `${CC4NC_SUBSCRIBE}?email=${encodeURIComponent(email)}`
      : CC4NC_SUBSCRIBE;
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <div>
      <form className="subform" onSubmit={handleSubscribe}>
        <input
          className="subform__input"
          type="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@work.com"
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className={`btn${variant === 'coral' ? ' btn--coral' : ''}`}>
          Subscribe{' '}
          <span className="btn__arrow">
            <ArrowRight />
          </span>
        </button>
      </form>
      {caption && <p className="subform__caption">{caption}</p>}
    </div>
  );
}
