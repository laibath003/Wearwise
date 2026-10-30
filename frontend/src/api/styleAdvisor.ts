
const API_BASE_URL = import.meta.env.VITE_API_URL ?? 'http://localhost:4000'

export type StyleAdvisorRequest =
  | {
      mode: 'outfit'
      prompt: string
    }
  | {
      mode: 'owned-item'
      itemDescription: string
      occasion: string
    }
  | {
      mode: 'find-product'
      category: 'Outerwear' | 'Tops' | 'Trousers' | 'Footwear' | 'Any category'
      color: string
      maxPrice: number
    }
  | {
      mode: 'pair-product'
      productId: string
    }
  | {
      mode: 'three-outfits'
      itemDescription: string
      preferences?: string
    }

export type StyleRecommendation = {
  message: string
  productIds: string[]
}

export type StyleAdvisorResponse = {
  success: boolean
  message: string
  data?: StyleRecommendation
}

export async function submitStyleAdvisorRequest(
  request: StyleAdvisorRequest,
): Promise<StyleAdvisorResponse> {
  const response = await fetch(`${API_BASE_URL}/api/style-advisor`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(request),
  })

  const result = (await response.json()) as StyleAdvisorResponse

  if (!response.ok || !result.success) {
    throw new Error(result.message || 'Unable to generate recommendations.')
  }

  return result
}
