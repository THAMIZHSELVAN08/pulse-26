'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollY } = useScroll()

  const navOpacity = useTransform(scrollY, [0, 100], [0.9, 1])
  const navBlur = useTransform(scrollY, [0, 100], ["blur(0px)", "blur(16px)"])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/#about' },
    { name: 'Events', href: '/events' },
  ]

  return (
    <>
      <motion.nav
        style={{
          opacity: navOpacity,
          backdropFilter: navBlur,
          WebkitBackdropFilter: navBlur,
        }}
        className={`fixed top-4 left-4 right-4 z-50 rounded-2xl transition-all duration-300 ${scrolled
          ? 'glass py-2'
          : 'bg-transparent py-4'
          }`}
      >
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo - Left Corner */}
            <Link href="/" className="flex items-center group">
              <motion.img
                src="/images/logo3.png"
                alt="PULSE"
                className="h-14 w-14 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(45,212,191,0.5)]"
                whileHover={{ rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              />
            </Link>

            {/* Desktop Navigation - Right Corner */}
            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    href={item.href}
                    className="relative px-5 py-2 text-sm font-medium text-gray-300 hover:text-electric-300 transition-colors duration-300 group font-orbitron tracking-wider"
                  >
                    <span className="relative z-10">{item.name}</span>
                    <motion.span
                      className="absolute inset-0 bg-electric-500/10 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      layoutId="navbar-hover"
                    />
                    <span className="absolute bottom-1 left-5 right-5 h-0.5 bg-gradient-to-r from-electric-400 to-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                  </Link>
                </motion.div>
              ))}

              {/* CTA Button - Inline with nav items */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
              >
                <Button
                  asChild
                  className="ml-1 bg-gradient-to-r from-electric-600 to-cyan-600 hover:from-electric-500 hover:to-cyan-500 text-white px-6 py-2 rounded-lg shadow-lg shadow-electric-500/20 hover:shadow-electric-500/40 transition-all duration-300 border-0 font-medium tracking-wide font-orbitron"
                >
                  <Link href="/register">Register Now</Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-gray-300 hover:text-electric-300 hover:bg-electric-500/10 transition-all duration-300"
              aria-label="Toggle menu"
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-64 bg-navy-950/98 backdrop-blur-xl border-l border-electric-500/20 z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full">
                {/* Mobile Header */}
                <div className="flex items-center justify-between p-4 border-b border-electric-500/20">
                  <span className="text-lg font-medium tracking-wider bg-gradient-to-r from-electric-300 to-cyan-300 bg-clip-text text-transparent font-orbitron">
                    Menu
                  </span>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="p-2 rounded-lg text-gray-300 hover:text-electric-300 hover:bg-electric-500/10 transition-all"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                {/* Mobile Navigation Items */}
                <div className="flex-1 overflow-y-auto p-4">
                  <div className="space-y-2">
                    {navItems.map((item, index) => (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <Link
                          href={item.href}
                          onClick={() => setIsOpen(false)}
                          className="block py-3 px-4 rounded-lg text-gray-300 hover:text-electric-300 hover:bg-electric-500/10 transition-all duration-300 font-medium tracking-wide group font-orbitron"
                        >
                          <span className="flex items-center justify-between">
                            {item.name}
                            <span className="w-1.5 h-1.5 rounded-full bg-electric-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </span>
                        </Link>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Mobile CTA */}
                <div className="p-4 border-t border-electric-500/20">
                  <Button
                    asChild
                    className="w-full bg-gradient-to-r from-electric-600 to-cyan-600 hover:from-electric-500 hover:to-cyan-500 text-white rounded-lg shadow-lg shadow-electric-500/20 border-0 font-medium tracking-wide font-orbitron"
                  >
                    <Link href="/register" onClick={() => setIsOpen(false)}>
                      Register Now
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}