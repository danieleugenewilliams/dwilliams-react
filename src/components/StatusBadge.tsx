type ProductStatus = 'live' | 'beta' | 'dev' | 'pre-pilot';

interface StatusBadgeProps {
  status: ProductStatus;
  version?: string;
}

const statusConfig: Record<ProductStatus, { label: string; className: string }> = {
  live: { label: 'LIVE', className: 'status-live' },
  beta: { label: 'BETA', className: 'status-beta' },
  dev: { label: 'IN DEV', className: 'status-dev' },
  'pre-pilot': { label: 'PRE-PILOT', className: 'status-dev' },
};

export function StatusBadge({ status, version }: StatusBadgeProps) {
  const config = statusConfig[status];
  
  return (
    <span className="inline-flex items-center gap-2">
      <span className={`status-badge ${config.className}`}>
        [{config.label}]
      </span>
      {version && (
        <span className="font-mono text-xs text-muted-foreground">
          {version}
        </span>
      )}
    </span>
  );
}

export type { ProductStatus };
