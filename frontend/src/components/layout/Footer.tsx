
import { Send } from 'lucide-react'
import { Link } from 'react-router-dom'
import NewsletterForm from './NewsletterForm'

export default function Footer() {
  return (
    <footer className="bg-[#111111] text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:grid-cols-2 lg:grid-cols-4 lg:px-12">
        {/* Brand */}
        <div>
          <Link to="/" className="text-2xl font-extrabold tracking-tight">
            Male fashion
            <span className="ml-1 inline-block h-2 w-2 bg-[#E63946]" />
          </Link>

          <p className="mt-5 max-w-xs text-sm leading-6 text-gray-400">
            Timeless essentials. Modern silhouettes. Discover your personal
            style with Wearwise.
          </p>

          <div className="mt-6 flex gap-4">
            <a
              href="https://www.facebook.com/"
              aria-label="Facebook"
              className="text-sm font-bold text-gray-400 transition hover:text-white"
            >
              f
            </a>

            <a
              href="https://www.instagram.com/"
              aria-label="Instagram"
              className="text-sm font-bold text-gray-400 transition hover:text-white"
            >
              ig
            </a>

            <a
              href="https://x.com/"
              aria-label="X"
              className="text-gray-400 transition hover:text-white"
            >
              <Send size={18} />
            </a>
          </div>

          <p className="mt-7 text-xs text-gray-500">
            We accept major credit and debit cards.
          </p>
        </div>

        {/* Shopping links */}
        <div>
          <h2 className="mb-5 text-xs font-bold tracking-[0.2em]">
            SHOPPING
          </h2>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <Link to="/shop" className="transition hover:text-white">
                All Products
              </Link>
            </li>
            <li>
              <Link
                to="/shop#new-arrivals"
                className="transition hover:text-white"
              >
                New Arrivals
              </Link>
            </li>
            <li>
              <Link
                to="/shop#best-sellers"
                className="transition hover:text-white"
              >
                Best Sellers
              </Link>
            </li>
            <li>
              <Link to="/cart" className="transition hover:text-white">
                Shopping Cart
              </Link>
            </li>
          </ul>
        </div>

        {/* Customer service */}
        <div>
          <h2 className="mb-5 text-xs font-bold tracking-[0.2em]">
            CUSTOMER SERVICE
          </h2>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <Link
                to="/about-contact"
                className="transition hover:text-white"
              >
                Contact Us
              </Link>
            </li>
            <li>
              <Link
                to="/about-contact"
                className="transition hover:text-white"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/about-contact"
                className="transition hover:text-white"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="/about-contact"
                className="transition hover:text-white"
              >
                Returns & Shipping
              </Link>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <NewsletterForm />
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 px-6 py-5 text-xs text-gray-500 sm:flex-row sm:items-center sm:justify-between lg:px-12">
          <p>© 2026 Wearwise. All rights reserved.</p>
          <p>Designed for a more considered wardrobe.</p>
        </div>
      </div>
    </footer>
  )
}
