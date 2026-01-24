'use client'

import { useState } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/#about' },
    { name: 'Events', href: '/events' },
    { name: 'Register', href: '/register' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-neon-blue/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Left Sidebar - Desktop */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link
                href="/"
                className="text-sm font-medium text-gray-300 hover:text-neon-blue transition-colors relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/#about"
                className="text-sm font-medium text-gray-300 hover:text-neon-blue transition-colors relative group"
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>

            {/* Hamburger Menu - Mobile */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-neon-blue/10 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="w-6 h-6 text-neon-blue" />
              ) : (
                <Menu className="w-6 h-6 text-neon-blue" />
              )}
            </button>

            {/* Logo - Center */}
            <Link href="/" className="flex-1 flex justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center space-x-2"
              >
                <span className="text-2xl font-bold bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
                  PULSE
                </span>
                <span className="text-2xl font-bold text-neon-blue">'26</span>
              </motion.div>
            </Link>

            {/* Right Side Navigation */}
            <div className="hidden lg:flex items-center space-x-6">
              <Link
                href="/events"
                className="text-sm font-medium text-gray-300 hover:text-neon-blue transition-colors relative group"
              >
                Events
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/register"
                className="text-sm font-medium text-gray-300 hover:text-neon-blue transition-colors relative group"
              >
                Register
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-gray-300 hover:text-neon-blue transition-colors relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-neon-blue group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>

            {/* Placeholder for mobile - keeps logo centered */}
            <div className="lg:hidden w-10"></div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            />
            <motion.div
              initial={{ x: -300 }}
              animate={{ x: 0 }}
              exit={{ x: -300 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed left-0 top-0 bottom-0 w-64 glass border-r border-neon-blue/30 z-50 lg:hidden"
            >
              <div className="flex flex-col p-6 space-y-4 mt-20">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block py-3 px-4 rounded-lg text-gray-300 hover:text-neon-blue hover:bg-neon-blue/10 transition-all"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
