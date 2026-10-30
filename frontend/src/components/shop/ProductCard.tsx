
import { Heart } from 'lucide-react'
import { Link } from 'react-router-dom'
import type { Product } from '../../data/products'

type ProductCardProps = {
  product: Product
  variant?: 'default' | 'compact'
  isWishlisted?: boolean
  onToggleWishlist?: (id: string) => void
}

export default function ProductCard({
  product,
  variant = 'default',
  isWishlisted = false,
  onToggleWishlist,
}: ProductCardProps) {
  if (variant === 'compact') {
    return (
      <Link
        to={`/products/${product.id}`}
        className="group block text-sm font-semibold"
      >
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="aspect-[3/4] w-full bg-[#F5F4F1] object-cover transition-opacity duration-500 group-hover:opacity-80"
        />

        <p className="mt-3">{product.name}</p>

        <p className="mt-1 text-gray-500">
          PKR {product.price.toLocaleString('en-PK')}
        </p>
      </Link>
    )
  }

  return (
    <article className="group min-w-0">
      <div className="relative overflow-hidden bg-[#F5F4F1]">
        <Link
          to={`/products/${product.id}`}
          aria-label={`View ${product.name}`}
        >
          <img
            src={product.image}
            alt={product.name}
            loading="lazy"
            className="aspect-[3/4] w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </Link>

        {product.badge && (
          <span className="absolute left-2 top-2 bg-white px-2 py-1 text-[9px] font-bold tracking-wider sm:left-3 sm:top-3">
            {product.badge}
          </span>
        )}

        <button
          type="button"
          onClick={() => onToggleWishlist?.(product.id)}
          aria-label={
            isWishlisted
              ? 'Remove from wishlist'
              : 'Add to wishlist'
          }
          className="absolute right-2 top-2 rounded-full bg-white p-2 transition-colors hover:text-[#E63946] sm:right-3 sm:top-3"
        >
          <Heart
            size={17}
            fill={isWishlisted ? '#E63946' : 'none'}
            color={isWishlisted ? '#E63946' : 'currentColor'}
          />
        </button>
      </div>

      <div className="pt-4">
        <p className="text-[10px] uppercase tracking-widest text-gray-500">
          {product.category} · {product.color}
        </p>

        <Link
          to={`/products/${product.id}`}
          className="mt-2 block text-sm font-semibold transition-colors hover:text-[#E63946]"
        >
          {product.name}
        </Link>

        <div className="mt-2 flex flex-wrap items-center gap-2">
          <span className="text-sm font-bold">
            PKR {product.price.toLocaleString('en-PK')}
          </span>

          {product.oldPrice && (
            <span className="text-xs text-gray-400 line-through">
              PKR {product.oldPrice.toLocaleString('en-PK')}
            </span>
          )}
        </div>
      </div>
    </article>
  )
}
