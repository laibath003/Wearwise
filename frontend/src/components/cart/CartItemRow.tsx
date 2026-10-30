import { Link } from 'react-router-dom'
import { Trash2 } from 'lucide-react'
import type { Product } from '../../data/products'
import CartQuantityControl from './CartQuantityControl'

type CartItemRowProps = {
  product: Product
  size: string
  quantity: number
  onRemove: () => void
  onQuantityChange: (newQuantity: number) => void
}

export default function CartItemRow({
  product,
  size,
  quantity,
  onRemove,
  onQuantityChange,
}: CartItemRowProps) {
  const productLink = `/products/${product.id}`

  const decreaseQuantity = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1)
    }
  }

  const increaseQuantity = () => {
    onQuantityChange(quantity + 1)
  }

  return (
    <article className="grid grid-cols-[90px_1fr] gap-4 py-6 sm:grid-cols-[110px_1fr_120px_120px] sm:items-center">
      <Link to={productLink}>
        <img
          src={product.image}
          alt={product.name}
          className="aspect-[3/4] w-full bg-[#F5F4F1] object-cover"
        />
      </Link>

      <div>
        <Link
          to={productLink}
          className="text-sm font-semibold hover:text-[#E63946]"
        >
          {product.name}
        </Link>

        <p className="mt-2 text-xs text-gray-500">
          Colour: {product.color}
        </p>

        <p className="mt-1 text-xs text-gray-500">
          Size: {size}
        </p>

        <p className="mt-2 text-sm font-semibold">
          PKR {product.price.toLocaleString('en-PK')}
        </p>

        <button
          type="button"
          onClick={onRemove}
          className="mt-3 inline-flex items-center gap-1 text-xs text-gray-500 transition hover:text-[#E63946]"
        >
          <Trash2 size={13} />
          Remove
        </button>

        {/* Mobile quantity control */}
        <div className="mt-4 w-fit sm:hidden">
          <CartQuantityControl
            quantity={quantity}
            onDecrease={decreaseQuantity}
            onIncrease={increaseQuantity}
            compact
          />
        </div>
      </div>

      {/* Desktop quantity control */}
      <div className="hidden justify-center sm:flex">
        <CartQuantityControl
          quantity={quantity}
          onDecrease={decreaseQuantity}
          onIncrease={increaseQuantity}
        />
      </div>

      <p className="col-start-2 text-sm font-bold sm:col-start-auto sm:text-right">
        PKR {(product.price * quantity).toLocaleString('en-PK')}
      </p>
    </article>
  )
}