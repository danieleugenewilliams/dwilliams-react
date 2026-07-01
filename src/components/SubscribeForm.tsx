import { useState } from 'react';
import { ArrowRight } from './Icons';

const CC4NC_SUBSCRIBE = 'https://claudecodefornoncoders.substack.com/subscribe';

export function SubscribeForm({ caption }: { caption?: string }) {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const url = email
      ? `${CC4NC_SUBSCRIBE}?email=${encodeURIComponent(email)}`
      : CC4NC_SUBSCRIBE;
    window.open(url, '_blank', 'noreferrer');
  };

  return (
    <>
      <form className="sp-subscribe" onSubmit={handleSubscribe}>
        <input
          className="sp-subscribe__input"
          type="email"
          name="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@work.com"
          aria-label="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" className="btn sp-subscribe__btn">
          Subscribe <ArrowRight />
        </button>
      </form>
      {caption && <p className="sp-subscribe__caption">{caption}</p>}
    </>
  );
}
