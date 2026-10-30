
import { useEffect, useState } from 'react'
import type { FormEvent } from 'react'
import { ArrowRight, LoaderCircle } from 'lucide-react'

import type { Product } from '../data/products'
import { fetchProducts } from '../api/products'
import { submitStyleAdvisorRequest } from '../api/styleAdvisor'
import type {
  StyleAdvisorRequest,
  StyleRecommendation,
} from '../api/styleAdvisor'

import AdvisorHero from '../components/style-advisor/AdvisorHero'
import ModeSelector from '../components/style-advisor/ModeSelector'
import StyleRequestFields from '../components/style-advisor/StyleRequestFields'
import RecommendationLoader from '../components/style-advisor/RecommendationLoader'
import RecommendationResults from '../components/style-advisor/RecommendationResults'
import AdvisorSidebar from '../components/style-advisor/AdvisorSidebar'

import { modes } from '../components/style-advisor/types'
import type {
  Mode,
  ProductCategory,
} from '../components/style-advisor/types'

export default function StyleAdvisor() {
  const [mode, setMode] = useState<Mode>('outfit')
  const [prompt, setPrompt] = useState('')
  const [ownedItem, setOwnedItem] = useState('')
  const [category, setCategory] =
    useState<ProductCategory>('Any category')
  const [color, setColor] = useState('')
  const [maxPrice, setMaxPrice] = useState('5000')

  const [products, setProducts] = useState<Product[]>([])
  const [productsLoading, setProductsLoading] = useState(true)
  const [productsError, setProductsError] = useState('')
  const [selectedProduct, setSelectedProduct] = useState('')

  const [occasion, setOccasion] = useState('Everyday')
  const [submitting, setSubmitting] = useState(false)
  const [responseMessage, setResponseMessage] = useState('')
  const [recommendation, setRecommendation] =
    useState<StyleRecommendation | null>(null)
  const [requestError, setRequestError] = useState('')
  const [resultVersion, setResultVersion] = useState(0)

  useEffect(() => {
    let cancelled = false

    async function loadProducts() {
      try {
        const data = await fetchProducts()

        if (!cancelled) {
          setProducts(data)

          setSelectedProduct((current) =>
            current && data.some((product) => product.id === current)
              ? current
              : data[0]?.id ?? '',
          )
        }
      } catch (error) {
        if (!cancelled) {
          setProductsError(
            error instanceof Error
              ? error.message
              : 'Unable to load products.',
          )
        }
      } finally {
        if (!cancelled) {
          setProductsLoading(false)
        }
      }
    }

    loadProducts()

    return () => {
      cancelled = true
    }
  }, [])

  function clearFeedback() {
    setResponseMessage('')
    setRecommendation(null)
    setRequestError('')
  }

  function handleModeChange(nextMode: Mode) {
    setMode(nextMode)
    clearFeedback()
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    clearFeedback()

    let request: StyleAdvisorRequest

    switch (mode) {
      case 'outfit':
        request = {
          mode: 'outfit',
          prompt: prompt.trim(),
        }
        break

      case 'owned-item':
        request = {
          mode: 'owned-item',
          itemDescription: ownedItem.trim(),
          occasion,
        }
        break

      case 'find-product':
        request = {
          mode: 'find-product',
          category,
          color: color.trim(),
          maxPrice: Number(maxPrice),
        }
        break

      case 'pair-product':
        if (!products.some((product) => product.id === selectedProduct)) {
          setRequestError('Please select a valid product from the catalog.')
          return
        }

        request = {
          mode: 'pair-product',
          productId: selectedProduct,
        }
        break

      case 'three-outfits':
        request = {
          mode: 'three-outfits',
          itemDescription: ownedItem.trim(),
          preferences: prompt.trim() || undefined,
        }
        break
    }

    setSubmitting(true)

    try {
      const result = await submitStyleAdvisorRequest(request)

      setResponseMessage(result.data?.message ?? result.message)
      setRecommendation(result.data ?? null)
      setResultVersion((current) => current + 1)
    } catch (error) {
      setRequestError(
        error instanceof Error
          ? error.message
          : 'Something went wrong. Please try again.',
      )
    } finally {
      setSubmitting(false)
    }
  }

  const selectedMode = modes.find((item) => item.id === mode)

  const recommendedProducts = recommendation
    ? recommendation.productIds
        .map((id) => products.find((product) => product.id === id))
        .filter((product): product is Product => Boolean(product))
    : []

  return (
    <main className="min-h-screen bg-white">
      <AdvisorHero />

      <section className="mx-auto max-w-6xl px-5 py-12 sm:py-16">
        <ModeSelector
          mode={mode}
          onModeChange={handleModeChange}
        />

        <div className="mt-10 grid gap-10 lg:grid-cols-[1fr_320px]">
          <div className="border border-gray-200 p-6 sm:p-8">
            <div className="mb-7">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#E63946]">
                Style request
              </p>

              <h3 className="mt-2 text-2xl font-bold text-[#111111]">
                {selectedMode?.title}
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                {selectedMode?.description}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <StyleRequestFields
                mode={mode}
                prompt={prompt}
                ownedItem={ownedItem}
                category={category}
                color={color}
                maxPrice={maxPrice}
                occasion={occasion}
                selectedProduct={selectedProduct}
                products={products}
                productsLoading={productsLoading}
                productsError={productsError}
                onPromptChange={setPrompt}
                onOwnedItemChange={setOwnedItem}
                onCategoryChange={setCategory}
                onColorChange={setColor}
                onMaxPriceChange={setMaxPrice}
                onOccasionChange={setOccasion}
                onSelectedProductChange={setSelectedProduct}
                onFieldChange={clearFeedback}
              />

              <button
                type="submit"
                disabled={
                  submitting ||
                  (mode === 'pair-product' &&
                    (productsLoading ||
                      !!productsError ||
                      !selectedProduct))
                }
                className="inline-flex w-full items-center justify-center gap-2 bg-[#E63946] px-6 py-4 text-sm font-semibold text-white transition hover:bg-[#c92d39] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
              >
                {submitting ? (
                  <>
                    <LoaderCircle size={17} className="animate-spin" />
                    Finding your style...
                  </>
                ) : (
                  <>
                    Prepare my request
                    <ArrowRight size={17} />
                  </>
                )}
              </button>

              {requestError && (
                <div
                  role="alert"
                  className="border border-red-200 bg-red-50 p-4 text-sm text-red-700"
                >
                  <p className="font-semibold">Request failed</p>
                  <p className="mt-1">{requestError}</p>
                </div>
              )}

              {submitting && <RecommendationLoader />}

              {!submitting && responseMessage && (
                <RecommendationResults
                  resultVersion={resultVersion}
                  responseMessage={responseMessage}
                  products={recommendedProducts}
                />
              )}
            </form>
          </div>

          <AdvisorSidebar />
        </div>
      </section>
    </main>
  )
}
