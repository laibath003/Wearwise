
import { supabase } from '../lib/supabase.js'

export type CatalogProduct = {
  id: string
  name: string
  category: 'Outerwear' | 'Tops' | 'Trousers' | 'Footwear'
  price: number
  oldPrice: number | null
  color: string
  badge: string | null
  image: string
  description: string | null
  sizes: string[]
  occasions: string[]
  styleTags: string[]
  inStock: boolean
}

export async function getAvailableProducts(): Promise<CatalogProduct[]> {
  const { data, error } = await supabase
    .from('products')
    .select(
      'id, name, category, price, old_price, color, badge, image_url, description, sizes, occasions, style_tags, in_stock'
    )
    .eq('in_stock', true)

  if (error) {
    throw new Error(`Failed to fetch catalog products: ${error.message}`)
  }

  return (data ?? []).map((product) => ({
    id: product.id,
    name: product.name,
    category: product.category,
    price: Number(product.price),
    oldPrice:
      product.old_price == null ? null : Number(product.old_price),
    color: product.color,
    badge: product.badge,
    image: product.image_url,
    description: product.description,
    sizes: product.sizes ?? [],
    occasions: product.occasions ?? [],
    styleTags: product.style_tags ?? [],
    inStock: product.in_stock,
  }))
}
