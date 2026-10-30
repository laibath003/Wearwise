
import type { Product } from '../data/products'

const API_BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:4000'

type ProductsResponse = {
  success: boolean
  count: number
  data: Product[]
}

export async function fetchProducts(): Promise<Product[]> {
  const response = await fetch(`${API_BASE_URL}/api/products`)

  if (!response.ok) {
    throw new Error('Unable to load products. Please try again.')
  }

  const result: ProductsResponse = await response.json()

  if (!result.success) {
    throw new Error('The server could not load products.')
  }

  return result.data
}
