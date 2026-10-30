
import type { Product } from '../../data/products'
import ProductCard from './ProductCard'
import RevealOnScroll from './RevealOnScroll'

type ProductGridProps = {
  products: Product[]
  wishlist: string[]
  onToggleWishlist: (id: string) => void
}

export default function ProductGrid({
  products,
  wishlist,
  onToggleWishlist,
}: ProductGridProps) {
  return (
    <div
      id="all-products"
      className="grid grid-cols-2 gap-x-4 gap-y-9 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-6"
    >
      {products.map((product, index) => (
        <RevealOnScroll
          key={product.id}
          delay={(index % 4) * 100}
        >
          <ProductCard
            product={product}
            isWishlisted={wishlist.includes(product.id)}
            onToggleWishlist={onToggleWishlist}
          />
        </RevealOnScroll>
      ))}
    </div>
  )
}
