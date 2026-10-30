
import type { Product } from '../../data/products'
import ProductCard from './ProductCard'
import RevealOnScroll from './RevealOnScroll'

type CategorySectionProps = {
  category: string
  products: Product[]
}

export default function CategorySection({
  category,
  products,
}: CategorySectionProps) {
  return (
    <section
      id={category.toLowerCase()}
      className="scroll-mt-8 pt-14"
    >
      <div className="mb-6 flex items-end justify-between border-b border-gray-200 pb-4">
        <div>
          <p className="text-[10px] font-bold tracking-[0.2em] text-[#E63946]">
            EXPLORE WEARWISE
          </p>

          <h2 className="mt-2 text-2xl font-bold">
            {category}
          </h2>
        </div>

        <span className="text-xs text-gray-500">
          {products.length} items
        </span>
      </div>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {products.map((product, index) => (
          <RevealOnScroll
            key={product.id}
            delay={(index % 4) * 100}
          >
            <ProductCard
              product={product}
              variant="compact"
            />
          </RevealOnScroll>
        ))}
      </div>
    </section>
  )
}
