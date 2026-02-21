import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { HiMenu, HiX } from 'react-icons/hi'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Pricing', path: '/pricing' },
    { name: 'Contact', path: '/contact' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-[#0f1117]/80 backdrop-blur-xl border-b border-hyperspeed-cyan/20 shadow-lg shadow-hyperspeed-cyan/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
            {/* Icon Logo */}
            <img src="/logos/gi.png" alt="Ganexa Icon" className="h-8 w-8 sm:h-10 sm:w-10 object-contain" />
            {/* Typography Logo */}
            <img src="/logos/gt.png" alt="Ganexa" className="h-6 sm:h-8 object-contain" />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-hyperspeed-cyan font-semibold'
                    : 'text-white hover:text-hyperspeed-cyan hover:scale-105'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white text-2xl focus:outline-none hover:text-hyperspeed-cyan transition-colors duration-300"
          >
            {isOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-gray-800">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`block py-2 font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-hyperspeed-cyan font-semibold'
                    : 'text-white hover:text-hyperspeed-cyan hover:translate-x-2'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar
