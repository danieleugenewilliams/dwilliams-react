export function Logo({ className = '' }: { className?: string }) {
  return (
    <span className={`inline-flex items-center font-mono text-sm ${className}`} aria-hidden="true">
      {/* Desktop: D. E. Williams + Company */}
      <span className="hidden md:inline">
        <span className="font-semibold">D. E. Williams</span>
        <span style={{ color: 'hsl(var(--terminal-cyan))' }}> + </span>
        <span>Company</span>
      </span>
      {/* Mobile: DEW+Co */}
      <span className="md:hidden">
        <span className="font-semibold">DEW</span>
        <span style={{ color: 'hsl(var(--terminal-cyan))' }}>+</span>
        <span>Co</span>
      </span>
    </span>
  );
}
