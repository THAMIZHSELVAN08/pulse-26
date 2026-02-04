'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, Instagram, Sparkles, Calendar, Mail, ChevronDown } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { useState, useEffect } from 'react'
import Link from 'next/link'

function Countdown({ targetISO }: { targetISO: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const target = new Date(targetISO).getTime()
      const difference = target - now

      if (difference > 0) {
        return {
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000)
        }
      }
      return { days: 0, hours: 0, minutes: 0, seconds: 0 }
    }

    // Set initial time immediately
    setTimeLeft(calculateTimeLeft())

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(interval)
  }, [targetISO])

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="relative group perspective">
      <div className="absolute inset-0 bg-gradient-to-br from-electric-500/20 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
      <div className="relative glass-card rounded-2xl p-6 border border-white/10 group-hover:border-electric-500/30 transition-all duration-300 transform group-hover:-translate-y-1">
        <div className="text-5xl md:text-6xl font-bold text-gradient tabular-nums font-orbitron">
          {value.toString().padStart(2, '0')}
        </div>
        <div className="text-xs md:text-sm text-gray-400 uppercase tracking-[0.2em] mt-3 font-medium">{label}</div>
      </div>
    </div>
  )

  if (!mounted) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 opacity-0">
        <TimeBlock value={0} label="Days" />
        <TimeBlock value={0} label="Hours" />
        <TimeBlock value={0} label="Minutes" />
        <TimeBlock value={0} label="Seconds" />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      <TimeBlock value={timeLeft.days} label="Days" />
      <TimeBlock value={timeLeft.hours} label="Hours" />
      <TimeBlock value={timeLeft.minutes} label="Minutes" />
      <TimeBlock value={timeLeft.seconds} label="Seconds" />
    </div>
  )
}

function GridBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(45, 212, 191, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(45, 212, 191, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px'
      }} />
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950" />
    </div>
  )
}

function FloatingOrbs() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(5)].map((_, i) => {
        const size = 300 + Math.random() * 200
        const randomX = Math.random() * 100
        const randomY = Math.random() * 100
        const randomDuration = 20 + Math.random() * 10

        return (
          <motion.div
            key={i}
            className="absolute rounded-full blur-3xl opacity-30"
            style={{
              width: size,
              height: size,
              left: `${randomX}%`,
              top: `${randomY}%`,
              background: i % 2 === 0
                ? 'radial-gradient(circle, rgba(45, 212, 191, 0.1) 0%, transparent 70%)'
                : 'radial-gradient(circle, rgba(20, 184, 166, 0.1) 0%, transparent 70%)',
            }}
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: randomDuration,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )
      })}
    </div>
  )
}

export default function Home() {
  const { scrollY } = useScroll()
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }

  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0])
  const heroScale = useTransform(scrollY, [0, 400], [1, 0.95])
  const smoothOpacity = useSpring(heroOpacity, springConfig)
  const smoothScale = useSpring(heroScale, springConfig)

  return (
    <div className="min-h-screen bg-navy-950 text-white overflow-hidden font-sans">
      <GridBackground />
      <FloatingOrbs />

      {/* Add padding top to account for fixed navbar */}
      <div className="h-16" />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <motion.div
          style={{ opacity: smoothOpacity, scale: smoothScale }}
          className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="space-y-8"
          >
            {/* Institution Details */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-3"
            >
              <p className="text-xs md:text-sm uppercase tracking-[0.3em] text-electric-400/90 font-medium font-orbitron">
                Sri Venkateswara College of Engineering
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-electric-500/50 to-transparent" />
                <Sparkles className="w-4 h-4 text-electric-400/70" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent via-electric-500/50 to-transparent" />
              </div>
              <p className="text-xs md:text-sm text-gray-400 tracking-wide font-sans">
                Department of Electrical and Electronics Engineering
              </p>
              <p className="text-xs text-gray-500 tracking-wider">In Association with AEEE</p>
            </motion.div>

            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: "easeOut" }}
              className="relative py-12"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-96 h-96 bg-gradient-to-r from-electric-500/10 via-cyan-500/10 to-teal-500/10 rounded-full blur-3xl animate-pulse" />
              </div>
              <motion.img
                src="/images/logo3.png"
                alt="PULSE 26"
                className="relative mx-auto w-72 md:w-[450px] h-auto object-contain drop-shadow-[0_0_15px_rgba(45,212,191,0.3)]"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-3xl md:text-5xl font-light tracking-wide font-orbitron">
                <span className="text-gradient">
                  A National Level Technical Symposium
                </span>
              </h2>
              <div className="flex items-center justify-center gap-3 text-gray-300">
                <Calendar className="w-5 h-5 text-electric-400" />
                <span className="text-lg md:text-xl font-light tracking-widest uppercase font-orbitron">February 19, 2026</span>
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="pt-8"
            >
              <Button
                asChild
                className="relative group bg-gradient-to-r from-electric-600 to-cyan-600 hover:from-electric-500 hover:to-cyan-500 text-white px-10 py-7 text-base rounded-lg shadow-lg shadow-electric-500/30 hover:shadow-xl hover:shadow-electric-500/50 transition-all duration-300 border-0 font-orbitron tracking-wider"
              >
                <Link href="/register">
                  <span className="relative z-10 flex items-center gap-3 font-medium">
                    Register Now
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
              </Button>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
              className="pt-16"
            >
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="inline-flex flex-col items-center gap-2 text-gray-500"
              >
                <span className="text-xs uppercase tracking-widest">Scroll</span>
                <ChevronDown className="w-5 h-5" />
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </section>

      {/* Countdown */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-5xl font-light mb-3 tracking-wide font-orbitron">
              <span className="bg-gradient-to-r from-electric-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                Event Countdown
              </span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base tracking-wide font-sans">Mark your calendars for the innovation</p>
          </motion.div>
          <Countdown targetISO="2026-02-19T09:00:00+05:30" />
        </div>
      </section>

      {/* Poster Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative group"
          >
            <div className="absolute -inset-6 bg-gradient-to-r from-electric-500/20 via-cyan-500/20 to-teal-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative overflow-hidden rounded-xl border border-electric-500/20 shadow-2xl backdrop-blur-sm bg-navy-900/30">
              <motion.img
                src="/images/poster.jpg"
                alt="PULSE Poster"
                className="w-full h-full object-contain"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/50 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl mb-6 tracking-tight font-orbitron">
              About <span className="text-gradient font-bold">The Event</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-electric-500 to-cyan-500 mx-auto rounded-full" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            {[
              {
                title: "SVCE - EEE Department",
                content: [
                  "The Department of Electrical and Electronics Engineering at Sri Venkateswara College of Engineering is committed to fostering excellence through strong fundamentals and industry-relevant learning experiences.",
                  "Through the Association of Electrical and Electronics Engineering (AEEE), we cultivate a vibrant technical culture that emphasizes teamwork, innovation, and real-world problem solving."
                ]
              },
              {
                title: "PULSE'26 Symposium",
                content: [
                  "PULSE'26 is a prestigious National Level Technical Symposium designed to bring together young innovators, researchers, and industry professionals for an enriching day of technical competitions, presentations, and hands-on challenges.",
                  "Join us on February 19, 2026 for an exceptional opportunity to learn, network, and showcase your innovative ideas on a national platform."
                ]
              }
            ].map((section, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8, delay: idx * 0.2 }}
                className="group"
              >
                <div className="relative h-full">
                  <div className="absolute inset-0 bg-gradient-to-br from-electric-500/10 to-cyan-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative h-full glass-card rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
                    <h3 className="text-2xl md:text-3xl font-light mb-6 font-orbitron">
                      <span className="text-gradient-primary">
                        {section.title}
                      </span>
                    </h3>
                    <div className="space-y-4 text-gray-300 leading-relaxed text-base md:text-lg font-light font-sans">
                      {section.content.map((text, i) => (
                        <p key={i}>{text}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-16 px-4 sm:px-6 lg:px-8 border-t border-electric-500/10 bg-navy-950/80 backdrop-blur-xl mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-medium tracking-wide font-orbitron">
                <span className="bg-gradient-to-r from-electric-300 to-cyan-300 bg-clip-text text-transparent">
                  AEEE
                </span>
              </h3>
              <div className="space-y-2 text-gray-400 text-sm font-sans">
                <p className="tracking-wide">Association of Electrical and Electronics Engineering</p>
                <p className="tracking-wide">SVCE - EEE</p>
                <a
                  href="https://instagram.com/aeee.svce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-electric-400 transition-colors group mt-2"
                >
                  <Instagram className="w-4 h-4 group-hover:scale-110 transition-transform" />
                  <span className="tracking-wide">@aeee.svce</span>
                </a>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-medium tracking-wide font-orbitron">
                <span className="bg-gradient-to-r from-electric-300 to-cyan-300 bg-clip-text text-transparent">
                  Quick Links
                </span>
              </h3>
              <div className="space-y-2 font-sans">
                {[
                  { href: "/events", label: "Events" },
                  { href: "/register", label: "Register" },
                  { href: "/contact", label: "Contact" }
                ].map((link, i) => (
                  <a
                    key={i}
                    href={link.href}
                    className="block text-gray-400 hover:text-electric-400 transition-colors text-sm group tracking-wide"
                  >
                    <span className="group-hover:translate-x-1 inline-block transition-transform">
                      {link.label}
                    </span>
                  </a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-4"
            >
              <h3 className="text-lg font-medium tracking-wide font-orbitron">
                <span className="bg-gradient-to-r from-electric-300 to-cyan-300 bg-clip-text text-transparent">
                  Contact Us
                </span>
              </h3>
              <div className="space-y-3 text-sm text-gray-400 font-sans">
                <div className="flex items-center gap-3 group">
                  <Mail className="w-4 h-4 group-hover:text-electric-400 transition-colors" />
                  <span className="tracking-wide">aeee@svce.ac.in</span>
                </div>
                <div className="flex items-center gap-3 group">
                  <Instagram className="w-4 h-4 group-hover:text-electric-400 transition-colors" />
                  <span className="tracking-wide">@aeee.svce</span>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 pt-8 border-t border-electric-500/10 text-center text-sm text-gray-500 font-sans"
          >
            <p className="tracking-wider">© 2026 PULSE. All rights reserved.</p>
          </motion.div>
        </div>
      </footer>
    </div>
  )
}