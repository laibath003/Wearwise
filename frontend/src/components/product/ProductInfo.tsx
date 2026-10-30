
import { Heart, ShoppingBag } from 'lucide-react'
import type { Product } from '../../data/products'
import SizeSelector from './SizeSelector'
import QuantitySelector from './QuantitySelector'

type ProductInfoProps = {
  product: Product
  sizes: string[]
  selectedSize: string
  onSizeChange: (size: string) => void
  quantity: number
  onDecrease: () => void
  onIncrease: () => void
  onAddToCart: () => void
  added: boolean
  wishlisted: boolean
  onToggleWishlist: () => void
}

export default function ProductInfo({
  product,
  sizes,
  selectedSize,
  onSizeChange,
  quantity,
  onDecrease,
  onIncrease,
  onAddToCart,
  added,
  wishlisted,
  onToggleWishlist,
}: ProductInfoProps) {
  const inStock = product.inStock !== false

  const colorValue = {
    'olive green': '#708238',
    taupe: '#B5A18A',
    cream: '#F5F0E1',
  }[product.color.toLowerCase()] ?? product.color.toLowerCase()

  return (
    <div className="py-2 md:py-8">
      <p className="text-xs font-bold tracking-[0.2em] text-[#E63946]">
        {product.category.toUpperCase()}
      </p>

      <h1 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">
        {product.name}
      </h1>

      <div className="mt-5 flex items-center gap-3">
        <span className="text-xl font-semibold">
          PKR {product.price.toLocaleString('en-PK')}
        </span>

        {product.oldPrice && (
          <span className="text-sm text-gray-400 line-through">
            PKR {product.oldPrice.toLocaleString('en-PK')}
          </span>
        )}
      </div>

      <p className="mt-6 text-sm leading-7 text-gray-600">
        {product.description ||
          'A versatile wardrobe essential with a refined silhouette and timeless appeal. Easy to style for everyday wear and smart-casual occasions.'}
      </p>

      {/* Colour */}
      <div className="mt-7">
        <div className="mb-3 flex justify-between text-sm">
          <span className="font-semibold">Colour</span>
          <span className="text-gray-500">{product.color}</span>
        </div>

        <div className="h-8 w-8 rounded-full border border-gray-300 p-1">
          <div
            className="h-full w-full rounded-full"
            style={{ backgroundColor: colorValue }}
          />
        </div>
      </div>

      {/* Size */}
      <SizeSelector
        sizes={sizes}
        selectedSize={selectedSize}
        category={product.category}
        onSizeChange={onSizeChange}
      />

      {/* Quantity and cart actions */}
      <div className="mt-7 flex flex-wrap gap-3">
        <QuantitySelector
          quantity={quantity}
          onDecrease={onDecrease}
          onIncrease={onIncrease}
        />

        <button
          type="button"
          onClick={onAddToCart}
          disabled={!inStock}
          className="flex flex-1 items-center justify-center gap-3 bg-[#111111] px-5 py-3 text-xs font-bold tracking-widest text-white transition hover:bg-[#E63946] disabled:cursor-not-allowed disabled:bg-gray-400"
        >
          <ShoppingBag size={17} />
          {inStock ? 'ADD TO CART' : 'OUT OF STOCK'}
        </button>

        <button
          type="button"
          onClick={onToggleWishlist}
          aria-label="Toggle wishlist"
          className={`border border-gray-200 px-4 transition hover:border-[#E63946] ${
            wishlisted ? 'text-[#E63946]' : ''
          }`}
        >
          <Heart
            size={19}
            fill={wishlisted ? '#E63946' : 'none'}
          />
        </button>
      </div>

      {!inStock && (
        <p className="mt-4 text-sm text-red-600">
          This product is currently unavailable.
        </p>
      )}

      {inStock && added && (
        <p role="status" className="mt-4 text-sm text-green-700">
          Added to cart successfully!
        </p>
      )}

      {/* Shipping information */}
      <div className="mt-8 border-t border-gray-200 pt-5 text-sm leading-7 text-gray-500">
        <p>✓ Free shipping on eligible orders</p>
        <p>✓ 30-day return or refund guarantee</p>
      </div>
    </div>
  )
}
