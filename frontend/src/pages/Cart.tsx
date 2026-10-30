import { Link } from 'react-router-dom'
import { ArrowLeft } from 'lucide-react'

import { useCart } from '../context/CartContext'

import CartHeader from '../components/cart/CartHeader'
import EmptyCart from '../components/cart/EmptyCart'
import CartItemRow from '../components/cart/CartItemRow'
import OrderSummary from '../components/cart/OrderSummary'

export default function Cart() {
  const {
    items,
    removeFromCart,
    updateQuantity,
    cartTotal,
    cartCount,
  } = useCart()

  const shipping = cartTotal >= 10000 || cartTotal === 0 ? 0 : 300
  const total = cartTotal + shipping

  return (
    <main className="min-h-[60vh] bg-white">
      <CartHeader cartCount={cartCount} />

      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:px-10 lg:grid-cols-[1fr_350px]">
        <section>
          {items.length === 0 ? (
            <EmptyCart />
          ) : (
            <>
              {/* Cart table headings */}
              <div className="hidden grid-cols-[1fr_120px_120px] border-b border-gray-200 pb-4 text-xs font-bold tracking-widest text-gray-500 sm:grid">
                <span>PRODUCT</span>

                <span className="text-center">QUANTITY</span>

                <span className="text-right">TOTAL</span>
              </div>

              {/* Cart items */}
              <div className="divide-y divide-gray-200">
                {items.map((item) => (
                  <CartItemRow
                    key={`${item.product.id}-${item.size}`}
                    product={item.product}
                    size={item.size}
                    quantity={item.quantity}
                    onRemove={() =>
                      removeFromCart(item.product.id, item.size)
                    }
                    onQuantityChange={(newQuantity) =>
                      updateQuantity(
                        item.product.id,
                        item.size,
                        newQuantity,
                      )
                    }
                  />
                ))}
              </div>

              {/* Continue shopping */}
              <Link
                to="/shop"
                className="mt-6 inline-flex items-center gap-2 text-sm text-gray-500 transition hover:text-black"
              >
                <ArrowLeft size={15} />
                Continue shopping
              </Link>
            </>
          )}
        </section>

        {/* Order summary */}
        {items.length > 0 && (
          <OrderSummary
            cartTotal={cartTotal}
            shipping={shipping}
            total={total}
          />
        )}
      </div>
    </main>
  )
}