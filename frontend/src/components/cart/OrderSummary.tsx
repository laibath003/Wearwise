type OrderSummaryProps = {
  cartTotal: number
  shipping: number
  total: number
}

export default function OrderSummary({
  cartTotal,
  shipping,
  total,
}: OrderSummaryProps) {
  return (
    <aside className="h-fit border border-gray-200 p-6">
      <h2 className="text-lg font-bold">
        Order summary
      </h2>

      <div className="mt-6 space-y-4 text-sm">
        <div className="flex justify-between gap-3">
          <span className="text-gray-500">Subtotal</span>

          <span className="font-semibold">
            PKR {cartTotal.toLocaleString('en-PK')}
          </span>
        </div>

        <div className="flex justify-between gap-3">
          <span className="text-gray-500">Estimated shipping</span>

          <span className="font-semibold">
            {shipping === 0
              ? 'FREE'
              : `PKR ${shipping.toLocaleString('en-PK')}`}
          </span>
        </div>

        <p className="text-xs leading-5 text-gray-500">
          {cartTotal >= 10000
            ? 'Your order qualifies for free shipping.'
            : 'Free shipping on orders of PKR 10,000 or more.'}
        </p>

        <div className="border-t border-gray-200 pt-4">
          <div className="flex justify-between gap-3">
            <span className="font-bold">Total</span>

            <span className="text-lg font-bold">
              PKR {total.toLocaleString('en-PK')}
            </span>
          </div>
        </div>
      </div>

      <button
        type="button"
        onClick={() =>
          alert('Checkout will be implemented later. No payment has been taken.')
        }
        className="mt-7 w-full bg-[#111111] px-5 py-4 text-xs font-bold tracking-widest text-white transition hover:bg-[#E63946]"
      >
        PROCEED TO CHECKOUT
      </button>

      <p className="mt-4 text-center text-xs leading-5 text-gray-500">
        Secure checkout will be available when payment integration is added.
      </p>
    </aside>
  )
}