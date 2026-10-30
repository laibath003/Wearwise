
import { useMemo, useEffect, useState } from 'react'
import type { Product } from '../data/products'
import { fetchProducts } from '../api/products'

import ShopHero from '../components/shop/ShopHero'
import CategoryNavigation from '../components/shop/CategoryNavigation'
import ShopToolbar from '../components/shop/ShopToolbar'
import ProductGrid from '../components/shop/ProductGrid'
import CategorySection from '../components/shop/CategorySection'

const categories = ['Outerwear', 'Tops', 'Trousers', 'Footwear'] as const

export default function Shop() {
  const [search, setSearch] = useState('')
  const [sort, setSort] = useState('featured')
  const [maxPrice, setMaxPrice] = useState('15000')
  const [wishlist, setWishlist] = useState<string[]>([])
  const [products, setProducts] = useState<Product[]>([])
  const [loading, setLoading] = useState(true)
  const [loadError, setLoadError] = useState('')

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
              : 'Something went wrong while loading products.',
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

  const filteredProducts = useMemo(() => {
    const result = products.filter((product) => {
      const matchesSearch =
        `${product.name} ${product.category} ${product.color}`
          .toLowerCase()
          .includes(search.toLowerCase())

      return matchesSearch && product.price <= Number(maxPrice)
    })

    if (sort === 'price-low') {
      result.sort((a, b) => a.price - b.price)
    }

    if (sort === 'price-high') {
      result.sort((a, b) => b.price - a.price)
    }

    if (sort === 'name') {
      result.sort((a, b) => a.name.localeCompare(b.name))
    }

    return result
  }, [products, search, sort, maxPrice])

  function toggleWishlist(id: string) {
    setWishlist((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : [...current, id],
    )
  }

  return (
    <main className="min-h-screen bg-white">
      <ShopHero />

      <div className="mx-auto max-w-7xl px-5 py-10 md:px-10">
        <CategoryNavigation categories={categories} />

        <ShopToolbar
          search={search}
          onSearchChange={setSearch}
          maxPrice={maxPrice}
          onMaxPriceChange={setMaxPrice}
          sort={sort}
          onSortChange={setSort}
          productCount={filteredProducts.length}
          loading={loading}
        />

        {/* Loading state */}
        {loading && (
          <p className="py-12 text-center text-gray-500">
            Loading products...
          </p>
        )}

        {/* Error state */}
        {!loading && loadError && (
          <div role="alert" className="py-12 text-center">
            <h3 className="text-xl font-bold">
              Unable to load products
            </h3>

            <p className="mt-2 text-sm text-red-600">
              {loadError}
            </p>

            <button
              onClick={() => window.location.reload()}
              className="mt-5 bg-[#111111] px-5 py-3 text-xs font-bold tracking-widest text-white transition-colors hover:bg-[#E63946]"
            >
              TRY AGAIN
            </button>
          </div>
        )}

        {!loading && !loadError && (
          <>
            {/* Main product grid */}
            <ProductGrid
              products={filteredProducts}
              wishlist={wishlist}
              onToggleWishlist={toggleWishlist}
            />

            {/* Empty search results */}
            {filteredProducts.length === 0 && (
              <div className="py-20 text-center">
                <h3 className="text-xl font-bold">
                  No products found
                </h3>

                <p className="mt-2 text-sm text-gray-500">
                  Try another search or increase your maximum price.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setSearch('')
                    setMaxPrice('15000')
                    setSort('featured')
                  }}
                  className="mt-5 bg-[#111111] px-5 py-3 text-xs font-bold tracking-widest text-white transition-colors hover:bg-[#E63946]"
                >
                  CLEAR FILTERS
                </button>
              </div>
            )}

            {/* Category collections */}
            {categories.map((category) => {
              const categoryProducts = filteredProducts.filter(
                (product) => product.category === category,
              )

              return (
                <CategorySection
                  key={category}
                  category={category}
                  products={categoryProducts}
                />
              )
            })}
          </>
        )}
      </div>
    </main>
  )
}
