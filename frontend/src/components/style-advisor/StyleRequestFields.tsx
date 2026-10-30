
import type { Product } from '../../data/products'
import type { Mode, ProductCategory } from './types'

type StyleRequestFieldsProps = {
  mode: Mode
  prompt: string
  ownedItem: string
  category: ProductCategory
  color: string
  maxPrice: string
  occasion: string
  selectedProduct: string
  products: Product[]
  productsLoading: boolean
  productsError: string
  onPromptChange: (value: string) => void
  onOwnedItemChange: (value: string) => void
  onCategoryChange: (value: ProductCategory) => void
  onColorChange: (value: string) => void
  onMaxPriceChange: (value: string) => void
  onOccasionChange: (value: string) => void
  onSelectedProductChange: (value: string) => void
  onFieldChange: () => void
}

export default function StyleRequestFields({
  mode,
  prompt,
  ownedItem,
  category,
  color,
  maxPrice,
  occasion,
  selectedProduct,
  products,
  productsLoading,
  productsError,
  onPromptChange,
  onOwnedItemChange,
  onCategoryChange,
  onColorChange,
  onMaxPriceChange,
  onOccasionChange,
  onSelectedProductChange,
  onFieldChange,
}: StyleRequestFieldsProps) {
  return (
    <>
      {mode === 'outfit' && (
        <div>
          <label className="mb-2 block text-sm font-medium">
            Describe your ideal outfit
          </label>

          <textarea
            required
            minLength={1}
            maxLength={1000}
            rows={5}
            value={prompt}
            onChange={(event) => {
              onPromptChange(event.target.value)
              onFieldChange()
            }}
            placeholder="For example: Create an understated old-money look with taupe trousers and a brown jacket."
            className="w-full resize-y border border-gray-300 px-4 py-3 text-sm outline-none transition focus:border-[#E63946]"
          />
        </div>
      )}

      {mode === 'owned-item' && (
        <>
          <div>
            <label className="mb-2 block text-sm font-medium">
              Describe the item you own
            </label>

            <textarea
              required
              maxLength={500}
              rows={3}
              value={ownedItem}
              onChange={(event) => {
                onOwnedItemChange(event.target.value)
                onFieldChange()
              }}
              placeholder="For example: A cream quarter-zip sweater with a relaxed fit."
              className="w-full resize-y border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#E63946]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Where will you wear it?
            </label>

            <select
              value={occasion}
              onChange={(event) => {
                onOccasionChange(event.target.value)
                onFieldChange()
              }}
              className="w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#E63946]"
            >
              <option>Everyday</option>
              <option>University</option>
              <option>Work</option>
              <option>Date night</option>
              <option>Formal event</option>
              <option>Weekend outing</option>
            </select>
          </div>
        </>
      )}

      {mode === 'find-product' && (
        <>
          <div>
            <label className="mb-2 block text-sm font-medium">
              Product category
            </label>

            <select
              value={category}
              onChange={(event) => {
                onCategoryChange(event.target.value as ProductCategory)
                onFieldChange()
              }}
              className="w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#E63946]"
            >
              <option>Any category</option>
              <option>Outerwear</option>
              <option>Tops</option>
              <option>Trousers</option>
              <option>Footwear</option>
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Preferred color
            </label>

            <input
              maxLength={100}
              value={color}
              onChange={(event) => {
                onColorChange(event.target.value)
                onFieldChange()
              }}
              placeholder="e.g. Cream, olive green, black"
              className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#E63946]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Maximum budget (PKR)
            </label>

            <input
              required
              min="0"
              type="number"
              value={maxPrice}
              onChange={(event) => {
                onMaxPriceChange(event.target.value)
                onFieldChange()
              }}
              className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#E63946]"
            />
          </div>
        </>
      )}

      {mode === 'pair-product' && (
        <div>
          <label
            htmlFor="advisor-product"
            className="mb-2 block text-sm font-medium"
          >
            Choose a Wearwise product
          </label>

          <select
            id="advisor-product"
            required
            disabled={
              productsLoading ||
              !!productsError ||
              products.length === 0
            }
            value={selectedProduct}
            onChange={(event) => {
              onSelectedProductChange(event.target.value)
              onFieldChange()
            }}
            className="w-full border border-gray-300 bg-white px-4 py-3 text-sm outline-none focus:border-[#E63946] disabled:bg-gray-100"
          >
            {productsLoading ? (
              <option value="">Loading products...</option>
            ) : productsError ? (
              <option value="">Products could not be loaded</option>
            ) : products.length === 0 ? (
              <option value="">No products available</option>
            ) : (
              products.map((product) => (
                <option key={product.id} value={product.id}>
                  {product.name} — PKR{' '}
                  {product.price.toLocaleString('en-PK')}
                </option>
              ))
            )}
          </select>

          {productsError && (
            <p role="alert" className="mt-2 text-sm text-red-600">
              {productsError}
            </p>
          )}

          <p className="mt-2 text-xs leading-5 text-gray-500">
            We’ll use the selected catalog item as the starting point
            for matching recommendations.
          </p>
        </div>
      )}

      {mode === 'three-outfits' && (
        <>
          <div>
            <label className="mb-2 block text-sm font-medium">
              Describe an item to style
            </label>

            <textarea
              required
              maxLength={500}
              rows={3}
              value={ownedItem}
              onChange={(event) => {
                onOwnedItemChange(event.target.value)
                onFieldChange()
              }}
              placeholder="For example: Brown leather jacket or cream quarter-zip."
              className="w-full resize-y border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#E63946]"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">
              Any style preferences? (optional)
            </label>

            <input
              maxLength={500}
              value={prompt}
              onChange={(event) => {
                onPromptChange(event.target.value)
                onFieldChange()
              }}
              placeholder="e.g. Minimalist, smart casual, old money"
              className="w-full border border-gray-300 px-4 py-3 text-sm outline-none focus:border-[#E63946]"
            />
          </div>
        </>
      )}
    </>
  )
}
