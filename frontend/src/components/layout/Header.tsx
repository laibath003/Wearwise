
import { useState } from 'react'
import AnnouncementBar from './AnnouncementBar'
import Navbar from './Navbar'
import MobileMenu from './MobileMenu'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  function toggleMenu() {
    setMenuOpen((current) => !current)
  }

  function closeMenu() {
    setMenuOpen(false)
  }

  return (
    <header className="w-full bg-white">
      <AnnouncementBar />

      <Navbar
        menuOpen={menuOpen}
        onMenuToggle={toggleMenu}
      />

      {menuOpen && <MobileMenu onClose={closeMenu} />}
    </header>
  )
}
