
import { Link, NavLink, useLocation } from 'react-router-dom'
import type { NavLinkRenderProps } from 'react-router-dom'
import { Search, Heart, ShoppingBag, Menu, X } from 'lucide-react'
import { useCart } from '../../context/CartContext'

type NavbarProps = {
  menuOpen: boolean
  onMenuToggle: () => void
}

const navigation = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'AI Style Advisor', path: '/style-advisor' },
  { label: 'About & Contact', path: '/about-contact' },
  { label: 'Cart', path: '/cart' },
]

export default function Navbar({
  menuOpen,
  onMenuToggle,
}: NavbarProps) {
  const location = useLocation()
  const isShopPage = location.pathname === '/shop'
  const { cartCount, cartTotal } = useCart()

  return (
    <div className="border-b border-gray-100 px-5">
      <div className="mx-auto flex min-h-[70px] max-w-7xl items-center justify-between gap-6">
        <Link
          to="/"
          className="shrink-0 text-[25px] font-extrabold tracking-tight"
        >
          Male fashion
          <span className="ml-1 inline-block h-2 w-2 bg-[#E63946]" />
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navigation.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }: NavLinkRenderProps) =>
                `relative py-3 text-[13px] font-semibold transition ${
                  isActive
                    ? 'text-black after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:bg-[#E63946]'
                    : 'text-[#444444] hover:text-black'
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-4">
          {isShopPage && (
            <Link to="/shop" aria-label="Search products">
              <Search size={19} strokeWidth={1.8} />
            </Link>
          )}

          <button
            aria-label="Wishlist"
            className="transition hover:text-[#E63946]"
          >
            <Heart size={19} strokeWidth={1.8} />
          </button>

          <Link
            to="/cart"
            aria-label={`Shopping cart, ${cartCount} items`}
            className="flex items-center gap-1.5"
          >
            <ShoppingBag size={19} strokeWidth={1.8} />

            {cartCount > 0 && (
              <span className="text-[10px] font-bold text-[#E63946]">
                {cartCount}
              </span>
            )}

            <span className="hidden text-xs sm:inline">
              PKR {cartTotal.toLocaleString('en-PK')}
            </span>
          </Link>

          <button
            className="lg:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={onMenuToggle}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
    </div>
  )
}
