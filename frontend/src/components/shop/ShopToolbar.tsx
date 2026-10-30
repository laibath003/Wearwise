
import { Search, SlidersHorizontal } from 'lucide-react'

type ShopToolbarProps = {
  search: string
  onSearchChange: (value: string) => void
  maxPrice: string
  onMaxPriceChange: (value: string) => void
  sort: string
  onSortChange: (value: string) => void
  productCount: number
  loading: boolean
}

export default function ShopToolbar({
  search,
  onSearchChange,
  maxPrice,
  onMaxPriceChange,
  sort,
  onSortChange,
  productCount,
  loading,
}: ShopToolbarProps) {
  return (
    <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
      <div>
        <h2 className="text-2xl font-bold">Shop the collection</h2>
        <p className="mt-1 text-sm text-gray-500">
          {loading
            ? 'Loading products...'
            : `${productCount} products found`}
        </p>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="flex items-center gap-2 border border-gray-200 px-3">
          <Search size={17} className="text-gray-400" />

          <input
            value={search}
            onChange={(event) => onSearchChange(event.target.value)}
            placeholder="Search products..."
            aria-label="Search products"
            className="w-full py-3 text-sm outline-none sm:w-48"
          />
        </label>

        <label className="flex items-center gap-2 border border-gray-200 px-3">
          <SlidersHorizontal size={16} className="text-gray-500" />

          <span className="text-sm text-gray-500">Max PKR</span>

          <select
            value={maxPrice}
            onChange={(event) => onMaxPriceChange(event.target.value)}
            aria-label="Maximum price"
            className="bg-white py-3 text-sm outline-none"
          >
            <option value="3000">3,000</option>
            <option value="5000">5,000</option>
            <option value="7500">7,500</option>
            <option value="10000">10,000</option>
            <option value="15000">15,000</option>
          </select>
        </label>

        <select
          value={sort}
          onChange={(event) => onSortChange(event.target.value)}
          aria-label="Sort products"
          className="border border-gray-200 bg-white px-3 py-3 text-sm outline-none"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name: A to Z</option>
        </select>
      </div>
    </div>
  )
}
