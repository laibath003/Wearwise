
import { createContext, useContext, useEffect, useState } from 'react'
import type { ReactNode } from 'react'
import type { Product } from '../data/products'

export type CartItem = {
  product: Product
  quantity: number
  size: string
}

type CartContextType = {
  items: CartItem[]
  addToCart: (product: Product, size: string, quantity: number) => void
  removeFromCart: (productId: string, size: string) => void
  updateQuantity: (productId: string, size: string, quantity: number) => void
  cartCount: number
  cartTotal: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => {
    try {
      const saved = localStorage.getItem('wearwise-cart')
      return saved ? JSON.parse(saved) as CartItem[] : []
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem('wearwise-cart', JSON.stringify(items))
  }, [items])

  function addToCart(product: Product, size: string, quantity: number) {
    setItems((current) => {
      const existing = current.find(
        (item) => item.product.id === product.id && item.size === size,
      )

      if (existing) {
        return current.map((item) =>
          item.product.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item,
        )
      }

      return [...current, { product, size, quantity }]
    })
  }

  function removeFromCart(productId: string, size: string) {
    setItems((current) =>
      current.filter(
        (item) => !(item.product.id === productId && item.size === size),
      ),
    )
  }

  function updateQuantity(productId: string, size: string, quantity: number) {
    if (quantity < 1) return

    setItems((current) =>
      current.map((item) =>
        item.product.id === productId && item.size === size
          ? { ...item, quantity }
          : item,
      ),
    )
  }

  const cartCount = items.reduce((total, item) => total + item.quantity, 0)
  const cartTotal = items.reduce(
    (total, item) => total + item.product.price * item.quantity,
    0,
  )

  return (
    <CartContext.Provider
      value={{
        items,
        addToCart,
        removeFromCart,
        updateQuantity,
        cartCount,
        cartTotal,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)

  if (!context) {
    throw new Error('useCart must be used inside CartProvider')
  }

  return context
}
