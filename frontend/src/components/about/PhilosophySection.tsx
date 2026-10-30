import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function PhilosophySection() {
  return (
    <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-16 md:grid-cols-2 md:px-10 md:py-24">
      <div className="overflow-hidden bg-[#F5F4F1]">
        <img
          src="https://images.unsplash.com/photo-1516257984-b1b4d707412e?auto=format&fit=crop&w=1100&q=85"
          alt="Minimal contemporary menswear"
          className="aspect-[4/3] w-full object-cover"
          loading="lazy"
        />
      </div>

      <div>
        <p className="text-xs font-bold tracking-[0.2em] text-[#E63946]">
          THE WEARWISE PHILOSOPHY
        </p>

        <h2 className="mt-4 text-3xl font-bold leading-tight md:text-4xl">
          Less noise. More personal style.
        </h2>

        <p className="mt-6 text-sm leading-7 text-gray-600">
          Wearwise brings together timeless menswear essentials, versatile
          colours, and thoughtful styling. We believe building a wardrobe
          should be simple: choose pieces that work together, express your
          personal style, and make getting dressed effortless.
        </p>

        <p className="mt-4 text-sm leading-7 text-gray-600">
          With our AI Style Advisor, you can explore outfit ideas, discover
          complementary pieces, and find new ways to wear your favourite
          styles with confidence.
        </p>

        <Link
          to="/style-advisor"
          className="mt-7 inline-flex items-center gap-3 border-b border-[#E63946] pb-2 text-xs font-bold tracking-widest transition hover:text-[#E63946]"
        >
          MEET YOUR AI STYLIST
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  )
}