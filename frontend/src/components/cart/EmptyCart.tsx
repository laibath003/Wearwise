import { Link } from 'react-router-dom'
import { ArrowLeft, ShoppingBag } from 'lucide-react'

export default function EmptyCart() {
  return (
    <div className="py-14 text-center">
      <ShoppingBag
        size={38}
        strokeWidth={1.3}
        className="mx-auto text-gray-400"
      />

      <h2 className="mt-5 text-xl font-bold">
        Your cart is empty
      </h2>

      <p className="mt-2 text-sm text-gray-500">
        Looks like you haven't found your next favourite piece yet.
      </p>

      <Link
        to="/shop"
        className="mt-6 inline-flex items-center gap-2 bg-[#111111] px-6 py-4 text-xs font-bold tracking-widest text-white transition hover:bg-[#E63946]"
      >
        CONTINUE SHOPPING
        <ArrowLeft size={15} />
      </Link>
    </div>
  )
}