
import { Link } from 'react-router-dom'
import type { Product } from '../../data/products'

type RelatedProductsProps = {
  products: Product[]
  currentProduct: Product
}

export default function RelatedProducts({
  products,
  currentProduct,
}: RelatedProductsProps) {
  const relatedProducts = products
    .filter(
      (item) =>
        item.category === currentProduct.category &&
        item.id !== currentProduct.id,
    )
    .slice(0, 4)

  if (relatedProducts.length === 0) {
    return null
  }

  return (
    <section className="mt-20">
      <h2 className="mb-7 text-2xl font-bold">
        You may also like
      </h2>

      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
        {relatedProducts.map((item) => (
          <Link
            key={item.id}
            to={`/products/${item.id}`}
            className="group"
          >
            <img
              src={item.image}
              alt={item.name}
              loading="lazy"
              className="aspect-[3/4] w-full bg-[#F5F4F1] object-cover transition group-hover:opacity-80"
            />

            <p className="mt-3 text-sm font-semibold">
              {item.name}
            </p>

            <p className="mt-1 text-sm text-gray-500">
              PKR {item.price.toLocaleString('en-PK')}
            </p>
          </Link>
        ))}
      </div>
    </section>
  )
}
