
import { Sparkles } from 'lucide-react'
import type { Product } from '../../data/products'

type RecommendationResultsProps = {
  resultVersion: number
  responseMessage: string
  products: Product[]
}

export default function RecommendationResults({
  resultVersion,
  responseMessage,
  products,
}: RecommendationResultsProps) {
  return (
    <section
      key={resultVersion}
      className="animate-advisor-reveal mt-8"
      aria-live="polite"
    >
      <div className="border border-gray-200 bg-gray-50 p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center bg-[#E63946] text-white">
            <Sparkles size={20} />
          </span>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#E63946]">
              Wearwise AI Stylist
            </p>

            <h3 className="mt-1 font-bold text-[#111111]">
              Your style recommendations
            </h3>
          </div>
        </div>

        <p className="mt-5 whitespace-pre-line text-sm leading-7 text-gray-700">
          {responseMessage}
        </p>
      </div>

      <div className="mt-8">
        <div className="mb-5 flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#E63946]">
              Picked for your style
            </p>

            <h3 className="mt-2 text-xl font-bold text-[#111111]">
              Recommended pieces
            </h3>
          </div>

          <span className="text-xs text-gray-500">
            {products.length} {products.length === 1 ? 'product' : 'products'}
          </span>
        </div>

        {products.length > 0 ? (
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
            {products.map((product, index) => (
              <article
                key={`${resultVersion}-${product.id}`}
                style={{
                  animationDelay: `${index * 130}ms`,
                }}
                className="animate-advisor-reveal group min-w-0"
              >
                <div className="relative aspect-[4/5] overflow-hidden bg-[#F5F4F1]">
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />

                  {product.badge && (
                    <span className="absolute left-2 top-2 bg-white px-2 py-1 text-[9px] font-semibold tracking-wider text-[#111111]">
                      {product.badge}
                    </span>
                  )}
                </div>

                <div className="pt-3">
                  <p className="text-[10px] font-medium uppercase tracking-[0.12em] text-gray-400">
                    {product.category}
                  </p>

                  <h4 className="mt-1 text-sm font-semibold leading-5 text-[#111111]">
                    {product.name}
                  </h4>

                  <p className="mt-2 text-sm font-semibold text-[#111111]">
                    PKR {product.price.toLocaleString('en-PK')}
                  </p>

                  {product.oldPrice &&
                    product.oldPrice > product.price && (
                      <p className="mt-1 text-xs text-gray-400 line-through">
                        PKR {product.oldPrice.toLocaleString('en-PK')}
                      </p>
                    )}
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="border border-gray-200 bg-[#F9F8F6] p-5 text-sm leading-6 text-gray-600">
            No matching catalog products were returned for this
            recommendation. You can try adjusting your request.
          </div>
        )}
      </div>
    </section>
  )
}
