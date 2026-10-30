
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'

import MainLayout from './components/layout/MainLayout'
import Hero from './components/home/Hero'

import Shop from './pages/Shop'
import ProductDetails from './pages/ProductDetails'
import Cart from './pages/Cart'
import AboutContact from './pages/AboutContact'
import StyleAdvisor from './pages/StyleAdvisor'

function Home() {
  return <Hero />
}

function NotFound() {
  return (
    <main className="flex min-h-[65vh] items-center justify-center">
      <h1 className="text-3xl font-bold">Page not found</h1>
    </main>
  )
}

export default function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/style-advisor" element={<StyleAdvisor />} />
            <Route path="/about-contact" element={<AboutContact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </CartProvider>
  )
}
