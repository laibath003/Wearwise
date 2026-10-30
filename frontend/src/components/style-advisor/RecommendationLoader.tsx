
import { Sparkles, LoaderCircle } from 'lucide-react'

export default function RecommendationLoader() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="mt-8 overflow-hidden border border-gray-200 bg-[#F9F8F6] p-6 sm:p-8"
    >
      <div className="flex flex-col items-center text-center">
        <div className="relative flex h-28 w-28 items-center justify-center">
          <div className="absolute inset-0 rounded-full border border-[#E63946]/20" />

          <div className="absolute inset-2 animate-spin rounded-full border-2 border-transparent border-t-[#E63946] motion-reduce:animate-none" />

          <div className="absolute inset-5 animate-spin rounded-full border-2 border-transparent border-b-gray-400 motion-reduce:animate-none [animation-direction:reverse] [animation-duration:3s]" />

          <div className="animate-advisor-float flex h-14 w-14 items-center justify-center rounded-full bg-[#E63946] text-white shadow-lg">
            <Sparkles size={27} />
          </div>

          <Sparkles
            size={15}
            className="absolute right-1 top-3 animate-advisor-pulse text-[#E63946]"
          />

          <Sparkles
            size={12}
            className="absolute bottom-3 left-1 animate-advisor-pulse text-gray-500 [animation-delay:500ms]"
          />
        </div>

        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-[#E63946]">
          Wearwise AI Stylist
        </p>

        <h3 className="mt-2 text-xl font-bold text-[#111111]">
          Putting your look together
        </h3>

        <p className="mt-2 max-w-md text-sm leading-6 text-gray-500">
          We're exploring your request and matching it with pieces from the
          Wearwise collection.
        </p>
      </div>

      <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3">
        {[0, 1, 2].map((item) => (
          <div
            key={item}
            className={`${item === 2 ? 'hidden sm:block' : ''} space-y-3`}
          >
            <div className="aspect-[4/5] animate-advisor-shimmer" />
            <div className="h-3 w-3/4 animate-advisor-shimmer" />
            <div className="h-3 w-1/2 animate-advisor-shimmer" />
          </div>
        ))}
      </div>

      <p className="mt-5 flex items-center justify-center gap-2 text-xs text-gray-400">
        <LoaderCircle size={14} className="animate-spin" />
        This may take a few moments...
      </p>
    </div>
  )
}
