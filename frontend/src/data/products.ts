
export type Product = {
  id: string
  name: string
  category: 'Outerwear' | 'Tops' | 'Trousers' | 'Footwear'
  price: number
  oldPrice?: number
  color: string
  badge?: string
  image: string
  description?: string
sizes?: string[]
occasions?: string[]
styleTags?: string[]
inStock?: boolean
}

export const products: Product[] = [
  {
    id: 'classic-brown-jacket',
    name: 'Classic Brown Jacket',
    category: 'Outerwear',
    price: 7499,
    oldPrice: 8999,
    color: 'Brown',
    badge: 'BESTSELLER',
    image: 'https://images.unsplash.com/photo-1551028719-00167b16eac5?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'olive-utility-jacket',
    name: 'Olive Utility Jacket',
    category: 'Outerwear',
    price: 6299,
    color: 'Olive Green',
    image: 'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'minimal-cream-sweater',
    name: 'Minimal Cream Sweater',
    category: 'Tops',
    price: 3499,
    color: 'Cream',
    badge: 'NEW',
    image: 'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'essential-white-shirt',
    name: 'Essential White Shirt',
    category: 'Tops',
    price: 2499,
    color: 'White',
    image: 'https://images.unsplash.com/photo-1598033129183-c4f50c736f10?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'tailored-taupe-trousers',
    name: 'Tailored Taupe Trousers',
    category: 'Trousers',
    price: 3999,
    color: 'Taupe',
    image: 'https://images.unsplash.com/photo-1473966968600-fa801b869a1a?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'classic-black-trousers',
    name: 'Classic Black Trousers',
    category: 'Trousers',
    price: 3699,
    color: 'Black',
    image: 'https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'everyday-white-sneakers',
    name: 'Everyday White Sneakers',
    category: 'Footwear',
    price: 5499,
    color: 'White',
    badge: 'POPULAR',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=700&q=80',
  },
  {
    id: 'minimal-leather-sneakers',
    name: 'Minimal Leather Sneakers',
    category: 'Footwear',
    price: 6499,
    color: 'Cream',
    image: 'https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=700&q=80',
  },
]
