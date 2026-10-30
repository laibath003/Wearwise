
import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

import type { Product } from '../data/products'
import { fetchProducts } from '../api/products'
import { useCart } from '../context/CartContext'

import ProductGallery from '../components/product/ProductGallery'
import ProductInfo from '../components/product/ProductInfo'
import RelatedProducts from '../components/product/RelatedProducts'

export default function ProductDetails() {
  const { id } = useParams()
  useEffect(() => {
  window.scrollTo(0, 0)
}, [id])
  const { addToCart } = useCart()

  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState('')

  const [size, setSize] = useState('')
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)
  const [wishlisted, setWishlisted] = useState(false)

  useEffect(() => {
    let cancelled = false

    async function loadProducts() {
      try {
        const data = await fetchProducts()

        if (!cancelled) {
          setProducts(data)
        }
      } catch (error) {
        if (!cancelled) {
          setLoadError(
            error instanceof Error
              ? error.message
              : 'Something went wrong while loading the product.',
          )
        }
      } finally {
        if (!cancelled) {
          setLoading(false)
        }
      }
    }

    loadProducts()

    return () => {
      cancelled = true
    }
  }, [])

  const product = products.find((item) => item.id === id)

  // Loading state
  if (loading) {
    return (
      <main className="px-6 py-24 text-center">
        <p className="text-sm text-gray-500">
          Loading product details...
        </p>
      </main>
    )
  }

  // Error state
  if (loadError) {
    return (
      <main className="px-6 py-24 text-center">
        <h1 className="text-3xl font-bold">
          Unable to load product
        </h1>

        <p role="alert" className="mt-3 text-sm text-red-600">
          {loadError}
        </p>

        <button
          type="button"
          onClick={() => window.location.reload()}
          className="mt-6 bg-black px-6 py-3 text-sm text-white transition hover:bg-[#E63946]"
        >
          TRY AGAIN
        </button>
      </main>
    )
  }

  // Product not found
  if (!product) {
    return (
      <main className="px-6 py-24 text-center">
        <h1 className="text-3xl font-bold">
          Product not found
        </h1>

        <p className="mt-3 text-gray-500">
          This product may no longer be available.
        </p>

        <Link
          to="/shop"
          className="mt-6 inline-block bg-black px-6 py-3 text-sm text-white transition hover:bg-[#E63946]"
        >
          BACK TO SHOP
        </Link>
      </main>
    )
  }

  // Available sizes
  const sizes = product.sizes?.length
    ? product.sizes
    : product.category === 'Footwear'
      ? ['40', '41', '42', '43', '44', '45']
      : ['S', 'M', 'L', 'XL']

  // Add product to cart
 function handleAddToCart() {
  if (!product || !size || product.inStock === false) return

  addToCart(product, size, quantity)

  setAdded(true)
}

  function handleSizeChange(newSize: string) {
    setSize(newSize)
    setAdded(false)
  }

  function decreaseQuantity() {
    setQuantity((value) => Math.max(1, value - 1))
    setAdded(false)
  }

  function increaseQuantity() {
    setQuantity((value) => value + 1)
    setAdded(false)
  }

  return (
    <main className="mx-auto max-w-7xl px-5 py-10 md:px-10 md:py-16">
      <Link
        to="/shop"
        className="mb-8 inline-flex items-center gap-2 text-sm text-gray-500 hover:text-black"
      >
        <ArrowLeft size={16} />
        Back to shop
      </Link>

      <div className="grid gap-10 md:grid-cols-2 md:gap-16">
        <ProductGallery product={product} />

        <ProductInfo
          product={product}
          sizes={sizes}
          selectedSize={size}
          onSizeChange={handleSizeChange}
          quantity={quantity}
          onDecrease={decreaseQuantity}
          onIncrease={increaseQuantity}
          onAddToCart={handleAddToCart}
          added={added}
          wishlisted={wishlisted}
          onToggleWishlist={() =>
            setWishlisted((value) => !value)
          }
        />
      </div>

      <RelatedProducts
        products={products}
        currentProduct={product}
      />
    </main>
  )
}
