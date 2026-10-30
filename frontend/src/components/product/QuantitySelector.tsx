
type QuantitySelectorProps = {
  quantity: number
  onDecrease: () => void
  onIncrease: () => void
}

export default function QuantitySelector({
  quantity,
  onDecrease,
  onIncrease,
}: QuantitySelectorProps) {
  return (
    <div className="flex items-center border border-gray-200">
      <button
        type="button"
        onClick={onDecrease}
        className="px-4 py-3"
        aria-label="Decrease quantity"
      >
        −
      </button>

      <span className="min-w-8 text-center text-sm">
        {quantity}
      </span>

      <button
        type="button"
        onClick={onIncrease}
        className="px-4 py-3"
        aria-label="Increase quantity"
      >
        +
      </button>
    </div>
  )
}
