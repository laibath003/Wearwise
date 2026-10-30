import { Minus, Plus } from 'lucide-react'

type CartQuantityControlProps = {
  quantity: number
  onDecrease: () => void
  onIncrease: () => void
  compact?: boolean
}

export default function CartQuantityControl({
  quantity,
  onDecrease,
  onIncrease,
  compact = false,
}: CartQuantityControlProps) {
  return (
    <div
      className={`flex items-center border border-gray-200 ${
        compact ? '' : ''
      }`}
    >
      <button
        type="button"
        onClick={onDecrease}
        disabled={quantity <= 1}
        aria-label="Decrease quantity"
        className={`py-2 disabled:opacity-30 ${
          compact ? 'px-3' : 'px-2'
        }`}
      >
        <Minus size={13} />
      </button>

      <span
        className={`text-center text-sm ${
          compact ? 'min-w-8' : 'min-w-7'
        }`}
      >
        {quantity}
      </span>

      <button
        type="button"
        onClick={onIncrease}
        aria-label="Increase quantity"
        className={`py-2 ${compact ? 'px-3' : 'px-2'}`}
      >
        <Plus size={13} />
      </button>
    </div>
  )
}