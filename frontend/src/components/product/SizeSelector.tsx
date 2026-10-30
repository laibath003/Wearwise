
type SizeSelectorProps = {
  sizes: string[]
  selectedSize: string
  category: string
  onSizeChange: (size: string) => void
}

export default function SizeSelector({
  sizes,
  selectedSize,
  category,
  onSizeChange,
}: SizeSelectorProps) {
  return (
    <div className="mt-7">
      <p className="mb-3 text-sm font-semibold">
        Select {category === 'Footwear' ? 'shoe size' : 'size'}
      </p>

      <div className="flex flex-wrap gap-2">
        {sizes.map((item) => (
          <button
            type="button"
            key={item}
            onClick={() => onSizeChange(item)}
            className={`min-w-12 border px-4 py-3 text-sm transition ${
              selectedSize === item
                ? 'border-black bg-black text-white'
                : 'border-gray-200 hover:border-black'
            }`}
          >
            {item}
          </button>
        ))}
      </div>

      {!selectedSize && (
        <p className="mt-2 text-xs text-gray-500">
          Please select a size.
        </p>
      )}
    </div>
  )
}
