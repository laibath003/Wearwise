
import type { Product } from '../../data/products'

type ProductGalleryProps = {
  product: Product
}

export default function ProductGallery({ product }: ProductGalleryProps) {
  return (
    <div className="mx-auto w-full max-w-[480px]">
      <div className="aspect-[4/5] w-full overflow-hidden bg-[#F5F4F1]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  )
}
