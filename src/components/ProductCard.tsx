import { StatusBadge, ProductStatus } from './StatusBadge';

export interface Product {
  id: string;
  name: string;
  tagline: string;
  description: string;
  status: ProductStatus;
  version?: string;
  url?: string;
  launchDate?: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const isClickable = product.status === 'live' && product.url;
  
  const CardWrapper = isClickable ? 'a' : 'div';
  const cardProps = isClickable 
    ? { href: product.url, target: '_blank', rel: 'noopener noreferrer' }
    : {};
  
  return (
    <CardWrapper
      {...cardProps}
      className={`product-card flex flex-col h-full animate-fade-in-${Math.min(index + 1, 4)} ${
        isClickable ? 'cursor-pointer' : ''
      }`}
    >
      {/* Header */}
      <div className="flex items-start justify-between gap-4 mb-4">
        <h3 className="font-mono text-lg font-semibold text-foreground mb-0">
          {product.name}
        </h3>
        <StatusBadge status={product.status} version={product.version} />
      </div>

      {/* Tagline */}
      <p className="font-mono text-sm text-terminal-cyan mb-3">
        {product.tagline}
      </p>

      {/* Description */}
      <p className="text-sm text-muted-foreground leading-relaxed flex-grow">
        {product.description}
      </p>

      {/* Footer */}
      <div className="mt-auto pt-4 border-t border-border flex items-center justify-between">
        {product.launchDate && (
          <span className="font-mono text-xs text-muted-foreground">
            {product.status === 'live' ? 'Launched' : 'Expected'}: {product.launchDate}
          </span>
        )}
        {isClickable && (
          <span className="font-mono text-xs text-terminal-cyan">
            Visit →
          </span>
        )}
        {product.status === 'dev' && (
          <span className="font-mono text-xs text-muted-foreground">
            In development
          </span>
        )}
        {product.status === 'pre-pilot' && (
          <span className="font-mono text-xs text-muted-foreground">
            Pre-pilot
          </span>
        )}
      </div>
    </CardWrapper>
  );
}
