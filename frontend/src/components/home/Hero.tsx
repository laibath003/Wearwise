import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import { useState } from 'react'

const slides = [
  {
    eyebrow: 'NEW COLLECTION 2026',
    title: 'Style that speaks.',
    description:
      'Discover timeless essentials and modern classics designed to make every outfit count.',
    button: 'EXPLORE COLLECTION',
    image:
      'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&w=1200&q=85',
  },
  {
    eyebrow: 'THE ART OF LAYERING',
    title: 'Elevate your everyday.',
    description:
      'Effortless layers, refined colours, and versatile pieces for a wardrobe that works.',
    button: 'DISCOVER THE LOOK',
    image:
      'https://images.unsplash.com/photo-1618354691373-d851c5c3a990?auto=format&fit=crop&w=1200&q=85',
  },
  {
    eyebrow: 'DRESSED WITH PURPOSE',
    title: 'Less, but better.',
    description:
      'Build your signature style with understated essentials and thoughtful details.',
    button: 'SHOP THE EDIT',
    image:
      'https://images.unsplash.com/photo-1548883354-7622d03aca27?auto=format&fit=crop&w=1200&q=85',
  },
]

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)

  const nextSlide = () => {
    setActiveSlide((current) => (current + 1) % slides.length)
  }

  const previousSlide = () => {
    setActiveSlide(
      (current) => (current - 1 + slides.length) % slides.length
    )
  }

  return (
    <section className="relative overflow-hidden bg-[#F5F4F1]">
      {/* Decorative background circle */}
      <div className="absolute -right-20 top-16 h-72 w-72 rounded-full bg-[#f3dfe0] md:right-[10%] md:top-10 md:h-[440px] md:w-[440px]" />

      <div className="relative mx-auto grid min-h-[570px] max-w-7xl items-center gap-8 px-6 py-12 md:grid-cols-2 md:px-12 lg:min-h-[650px]">
        {/* Hero text */}
        <div
          key={activeSlide}
          className="z-10 max-w-xl animate-[heroTextIn_1000ms_ease_both]"
        >
          <p className="mb-5 text-xs font-semibold tracking-[0.3em] text-[#E63946]">
            {slides[activeSlide].eyebrow}
          </p>

          <h1 className="mb-6 text-5xl font-semibold leading-[1.1] tracking-tight text-[#111111] md:text-6xl lg:text-7xl">
            {slides[activeSlide].title}
          </h1>

          <p className="mb-8 max-w-md text-sm leading-7 text-gray-600 md:text-base">
            {slides[activeSlide].description}
          </p>

          <a
            href="/shop"
            className="inline-flex items-center gap-3 border-b border-black pb-2 text-xs font-semibold tracking-[0.15em] transition-colors duration-300 hover:border-[#E63946] hover:text-[#E63946]"
          >
            {slides[activeSlide].button}
            <ArrowRight size={16} />
          </a>

          {/* Slider controls */}
          <div className="mt-12 flex items-center gap-4">
            <span className="text-xs font-semibold tabular-nums">
              0{activeSlide + 1}
            </span>

            <div className="flex items-center gap-2">
              {slides.map((item, index) => (
                <button
                  key={item.eyebrow}
                  onClick={() => setActiveSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  aria-current={activeSlide === index ? 'true' : undefined}
                  className={`h-[2px] transition-all duration-500 ${
                    activeSlide === index
                      ? 'w-10 bg-[#E63946]'
                      : 'w-5 bg-gray-300 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>

            <span className="text-xs text-gray-500">0{slides.length}</span>

            <div className="ml-4 flex gap-2">
              <button
                onClick={previousSlide}
                aria-label="Previous slide"
                className="flex h-10 w-10 items-center justify-center border border-gray-300 transition-colors duration-300 hover:border-black hover:bg-black hover:text-white"
              >
                <ChevronLeft size={18} />
              </button>

              <button
                onClick={nextSlide}
                aria-label="Next slide"
                className="flex h-10 w-10 items-center justify-center border border-gray-300 transition-colors duration-300 hover:border-black hover:bg-black hover:text-white"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Hero images with slow crossfade */}
        <div className="relative mx-auto flex h-[360px] w-full max-w-md items-center justify-center md:h-[500px] lg:h-[560px]">
          <div className="absolute inset-4 border border-black/10" />

          {slides.map((item, index) => (
            <img
              key={item.image}
              src={item.image}
              alt={`Men's fashion — ${item.eyebrow.toLowerCase()}`}
              fetchPriority={index === 0 ? 'high' : 'auto'}
              aria-hidden={activeSlide !== index}
              className={`absolute inset-0 z-10 h-full w-full object-cover object-center transition-opacity duration-[1200ms] ease-in-out ${
                activeSlide === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}

          <span className="absolute -bottom-3 -right-3 z-20 bg-white px-5 py-3 text-xs font-semibold tracking-widest">
            WEARWISE — EST. 2026
          </span>
        </div>
      </div>
    </section>
  )
}
