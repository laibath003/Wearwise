
export default function AnnouncementBar() {
  return (
    <div className="bg-[#111111] px-5 py-2 text-xs text-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <p className="hidden sm:block">
          Free shipping, 30-day return or refund guarantee.
        </p>

        <div className="ml-auto flex items-center gap-5">
          <a href="#" className="transition hover:text-red-400">
            Sign In
          </a>
          <a href="/about-contact" className="transition hover:text-red-400">
            FAQs
          </a>
          <button className="flex items-center gap-1">
            USD
            <span>⌄</span>
          </button>
        </div>
      </div>
    </div>
  )
}
