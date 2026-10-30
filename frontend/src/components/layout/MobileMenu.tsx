
import { NavLink } from 'react-router-dom'
import type { NavLinkRenderProps } from 'react-router-dom'

type MobileMenuProps = {
  onClose: () => void
}

const navigation = [
  { label: 'Home', path: '/' },
  { label: 'Shop', path: '/shop' },
  { label: 'AI Style Advisor', path: '/style-advisor' },
  { label: 'About & Contact', path: '/about-contact' },
  { label: 'Cart', path: '/cart' },
]

export default function MobileMenu({ onClose }: MobileMenuProps) {
  return (
    <nav className="flex flex-col border-t border-gray-100 py-3 lg:hidden">
      {navigation.map((item) => (
        <NavLink
          key={item.path}
          to={item.path}
          end={item.path === '/'}
          onClick={onClose}
          className={({ isActive }: NavLinkRenderProps) =>
            `px-2 py-3 text-sm ${
              isActive ? 'font-bold text-[#E63946]' : 'text-gray-700'
            }`
          }
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}
