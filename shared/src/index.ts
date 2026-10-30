
export type StyleAdvisorMode =
  | 'outfit'
  | 'owned-item'
  | 'find-product'
  | 'pair-product'
  | 'three-outfits'

export type ProductCategory =
  | 'Outerwear'
  | 'Tops'
  | 'Trousers'
  | 'Footwear'

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
      category: ProductCategory | 'Any category'
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

export type ApiError = {
  success: false
  message: string
}
