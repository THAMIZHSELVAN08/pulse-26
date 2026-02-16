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
    { name: 'Timeline', href: '/#timeline' },
    { name: 'Missions', href: '/events' },
    { name: 'Crew', href: '/crew' },
    { name: 'Rulebook', href: "/Pulse'26 Rulebook.pdf" },
  ]

  return (
    <>
      <motion.nav
        style={{
          opacity: navOpacity,
          backdropFilter: navBlur,
          WebkitBackdropFilter: navBlur,
        }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-heist-black/80 border-b border-heist-red/30 py-2 shadow-[0_4px_30px_rgba(226,35,26,0.1)]'
          : 'bg-transparent py-6'
          }`}
      >
        <div className="w-full px-6 md:px-12">
          <div className="flex items-center justify-between h-20">
            {/* Logo - Left Corner */}
            <Link href="/" className="flex items-center group relative">
              <div className="absolute inset-0 bg-heist-red/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <motion.div className="relative">
                <motion.img
                  src="/images/logo3.png"
                  alt="PULSE"
                  className="h-16 w-16 object-contain transition-all duration-500 group-hover:scale-110 drop-shadow-[0_0_12px_rgba(226,35,26,0.5)]"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                />
                {/* Micro Scanline on Logo */}
                <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity">
                  <div className="absolute top-0 left-0 w-full h-[1px] bg-heist-red animate-[scan_2s_linear_infinite]" />
                </div>
              </motion.div>
            </Link>

            {/* Desktop Navigation - Right Corner */}
            <div className="hidden md:flex items-center gap-6">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  {item.href.endsWith('.pdf') ? (
                    <a
                      href={item.href}
                      download="Pulse26_Rulebook.pdf"
                      className="relative text-lg font-display tracking-[0.3em] text-heist-silver hover:text-heist-red transition-colors duration-300 group uppercase"
                    >
                      <span className="relative z-10">{item.name}</span>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-heist-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </a>
                  ) : (
                    <Link
                      href={item.href}
                      className="relative text-lg font-display tracking-[0.3em] text-heist-silver hover:text-heist-red transition-colors duration-300 group uppercase"
                    >
                      <span className="relative z-10">{item.name}</span>
                      <span className="absolute bottom-0 left-0 w-full h-0.5 bg-heist-red scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    </Link>
                  )}
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
                  className="ml-4 bg-heist-red hover:bg-heist-darkRed text-white px-8 py-2 rounded-none shadow-[4px_4px_0px_0px_rgba(179,0,0,0.4)] hover:shadow-none hover:translate-x-[2px] hover:translate-y-[2px] transition-all duration-200 border border-heist-red font-display tracking-[0.3em] text-xl uppercase btn-heist-glitch"
                >
                  <Link href="/register">JOIN THE RESISTANCE</Link>
                </Button>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-lg text-heist-silver hover:text-heist-red hover:bg-heist-red/10 transition-all duration-300"
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
                    <X className="w-8 h-8" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-8 h-8" />
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
              className="fixed inset-0 bg-black/90 backdrop-blur-sm z-40 md:hidden"
            />

            {/* Mobile Menu Panel */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed right-0 top-0 bottom-0 w-72 bg-heist-black border-l-4 border-heist-red z-50 md:hidden shadow-2xl"
            >
              <div className="flex flex-col h-full bg-blueprint bg-cover bg-center">
                <div className="absolute inset-0 bg-heist-black/90 pointer-events-none" />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Mobile Header */}
                  <div className="flex items-center justify-between p-6 border-b border-heist-red/30">
                    <span className="text-2xl font-display tracking-widest text-heist-gold uppercase">
                      PLAN ROOM
                    </span>
                    <button
                      onClick={() => setIsOpen(false)}
                      className="p-2 rounded-lg text-heist-silver hover:text-heist-red transition-all"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  {/* Mobile Navigation Items */}
                  <div className="flex-1 overflow-y-auto p-6">
                    <div className="space-y-6">
                      {navItems.map((item, index) => (
                        <motion.div
                          key={item.name}
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: index * 0.1, duration: 0.3 }}
                        >
                          {item.href.endsWith('.pdf') ? (
                            <a
                              href={item.href}
                              download="Pulse26_Rulebook.pdf"
                              onClick={() => setIsOpen(false)}
                              className="block text-xl text-heist-white hover:text-heist-red transition-all duration-300 font-display tracking-[0.3em] uppercase group"
                            >
                              <span className="flex items-center justify-between">
                                {item.name}
                                <span className="w-2 h-2 rounded-full bg-heist-red opacity-0 group-hover:opacity-100 transition-opacity" />
                              </span>
                            </a>
                          ) : (
                            <Link
                              href={item.href}
                              onClick={() => setIsOpen(false)}
                              className="block text-xl text-heist-white hover:text-heist-red transition-all duration-300 font-display tracking-[0.3em] uppercase group"
                            >
                              <span className="flex items-center justify-between">
                                {item.name}
                                <span className="w-2 h-2 rounded-full bg-heist-red opacity-0 group-hover:opacity-100 transition-opacity" />
                              </span>
                            </Link>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Mobile CTA */}
                  <div className="p-6 border-t border-heist-red/30">
                    <Button
                      asChild
                      className="w-full bg-heist-red hover:bg-heist-darkRed text-white rounded-none shadow-lg border border-heist-red font-display tracking-[0.3em] text-xl h-14 uppercase"
                    >
                      <Link href="/register" onClick={() => setIsOpen(false)}>
                        JOIN THE RESISTANCE
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}