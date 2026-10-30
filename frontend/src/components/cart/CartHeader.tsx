type CartHeaderProps = {
  cartCount: number
}

export default function CartHeader({ cartCount }: CartHeaderProps) {
  return (
    <section className="bg-[#F5F4F1] px-6 py-12 text-center md:py-16">
      <p className="text-xs font-bold tracking-[0.25em] text-[#E63946]">
        YOUR SELECTION
      </p>

      <h1 className="mt-3 text-4xl font-extrabold tracking-tight">
        Shopping Cart
      </h1>

      <p className="mt-3 text-sm text-gray-500">
        {cartCount} {cartCount === 1 ? 'item' : 'items'} in your cart
      </p>
    </section>
  )
}