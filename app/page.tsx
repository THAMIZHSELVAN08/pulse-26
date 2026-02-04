'use client'

import { motion, useScroll, useTransform, useSpring } from 'framer-motion'
import { ArrowRight, Instagram, Sparkles, Calendar, Mail, ChevronDown, Zap } from 'lucide-react'
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

  // Keep the hero text readable while giving the logo a subtle parallax feel
  const logoTranslateY = useSpring(useTransform(scrollY, [0, 400], [0, 40]), springConfig)
  const logoScale = useSpring(useTransform(scrollY, [0, 400], [1, 0.9]), springConfig)

  return (
    <div className="min-h-screen bg-navy-950 text-white overflow-hidden font-sans">
      <GridBackground />
      <FloatingOrbs />

      {/* Add padding top to account for fixed navbar */}
      <div className="h-16" />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-20">
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
              className="space-y-4"
            >
              <p className="text-sm md:text-lg uppercase tracking-[0.35em] text-electric-300 font-semibold font-orbitron">
                Sri Venkateswara College of Engineering
              </p>
              <div className="flex items-center justify-center gap-3">
                <div className="h-px w-16 bg-gradient-to-r from-transparent via-electric-500/60 to-transparent" />
                <Sparkles className="w-5 h-5 text-electric-400/80" />
                <div className="h-px w-16 bg-gradient-to-l from-transparent via-electric-500/60 to-transparent" />
              </div>
              <p className="text-xs md:text-base text-gray-300 tracking-[0.25em] font-orbitron">
                Department of Electrical and Electronics Engineering
              </p>
              <p className="text-[0.7rem] md:text-sm text-electric-200 tracking-[0.35em] font-orbitron">
                In Association With AEEE
              </p>
            </motion.div>

            {/* Logo */}
            <motion.div
              style={{ y: logoTranslateY, scale: logoScale }}
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

            {/* CTA Buttons - Updated with increased gap and new color */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Button
                asChild
                className="relative group bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-500 hover:to-purple-500 text-white px-10 py-7 text-base rounded-lg shadow-lg shadow-violet-500/30 hover:shadow-xl hover:shadow-violet-500/50 transition-all duration-300 border-0 font-orbitron tracking-wider"
              >
                <Link href="/events">
                  <span className="relative z-10 flex items-center gap-3 font-medium">
                    Explore Events
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                  </span>
                </Link>
              </Button>
              
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

          
          </motion.div>
        </div>
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

      {/* Enhanced Schedule Timeline Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <div className="inline-flex items-center gap-3 px-6 py-2 rounded-full bg-electric-500/10 border border-electric-500/20 mb-6">
              <Zap className="w-4 h-4 text-electric-400" />
              <span className="text-xs uppercase tracking-[0.3em] text-electric-300 font-orbitron">
                February 19, 2026
              </span>
            </div>
            <h2 className="text-3xl md:text-5xl mb-4 tracking-tight font-orbitron">
              <span className="text-gradient">Event Timeline</span>
            </h2>
            <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto">
              Experience a full day of innovation, competition, and technical excellence at PULSE&apos;26
            </p>
          </motion.div>

          {/* Timeline Container with improved mobile layout */}
          <div className="relative">
            {/* Center line - adjusted for better mobile view */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-electric-500/20 via-electric-500/50 to-electric-500/20 pointer-events-none" />

            <div className="space-y-12 md:space-y-16">
              {[
                {
                  title: "Project Presentation",
                  time: "10:00 AM",
                  side: "left" as const,
                  accent: "from-violet-500/90 to-purple-600/90",
                  description: "Showcase innovative projects and technical solutions",
                  icon: "💡"
                },
                {
                  title: "Bid To Build",
                  time: "10:00 - 12:30 PM",
                  side: "right" as const,
                  accent: "from-emerald-500/80 to-teal-500/80",
                  description: "Strategic auction-based circuit building challenge",
                  icon: "⚡"
                },
                {
                  title: "U(know)",
                  time: "10:30 - 12:30 PM",
                  side: "left" as const,
                  accent: "from-cyan-500/80 to-sky-500/80",
                  description: "Test your electrical engineering knowledge",
                  icon: "🧠"
                },
                {
                  title: "Electric Wordza",
                  time: "12:30 - 2:00 PM",
                  side: "right" as const,
                  accent: "from-amber-400/90 to-orange-500/90",
                  description: "Technical crossword puzzle competition",
                  icon: "📝"
                },
                {
                  title: "Sail The Circuit",
                  time: "12:30 - 2:00 PM",
                  side: "left" as const,
                  accent: "from-teal-400/90 to-emerald-500/90",
                  description: "Navigate through complex circuit challenges",
                  icon: "🔌"
                },
                {
                  title: "Battleship",
                  time: "12:45 - 2:30 PM",
                  side: "right" as const,
                  accent: "from-slate-400/90 to-blue-500/90",
                  description: "Strategic naval warfare meets electronics",
                  icon: "🚢"
                }
              ].map((item, index) => {
                const isLeft = item.side === "left"
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ 
                      duration: 0.6, 
                      delay: index * 0.1,
                      ease: [0.22, 1, 0.36, 1]
                    }}
                    className={`relative flex ${isLeft ? "md:justify-start" : "md:justify-end"}`}
                  >
                    {/* Timeline connector dot - improved positioning */}
                    <div className={`absolute left-[1.875rem] md:left-1/2 top-6 md:top-8 w-3 h-3 md:w-4 md:h-4 rounded-full bg-electric-400 border-2 md:border-4 border-navy-950 shadow-[0_0_20px_rgba(45,212,191,0.8)] z-10 ${isLeft ? "md:-translate-x-2" : "md:-translate-x-2"}`} />

                    {/* Card container */}
                    <div className={`flex-1 md:max-w-[45%] pl-16 md:pl-0 ${isLeft ? "md:pr-12" : "md:pl-12"}`}>
                      <motion.div
                        whileHover={{ scale: 1.02, y: -4 }}
                        transition={{ duration: 0.2 }}
                        className="relative group"
                      >
                        {/* Glow effect */}
                        <div className="absolute -inset-1 bg-gradient-to-r from-electric-500/20 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Card */}
                        <div className="relative glass-card rounded-2xl overflow-hidden border border-white/10 group-hover:border-electric-500/40 transition-all duration-300">
                          {/* Colored accent bar */}
                          <div className={`absolute inset-y-0 ${isLeft ? "left-0" : "right-0"} w-1.5 bg-gradient-to-b ${item.accent}`} />
                          
                          {/* Content */}
                          <div className="p-6 md:p-7">
                            {/* Header */}
                            <div className="flex items-start justify-between mb-3">
                              <div className="flex-1">
                                <p className="text-[0.65rem] md:text-xs uppercase tracking-[0.3em] text-electric-300/80 mb-2 font-orbitron font-medium">
                                  PULSE&apos;26 EVENT
                                </p>
                                <h3 className="text-xl md:text-2xl font-orbitron text-white tracking-wide mb-2 flex items-center gap-2">
                                  <span className="text-2xl">{item.icon}</span>
                                  {item.title}
                                </h3>
                              </div>
                            </div>

                            {/* Time badge */}
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-electric-500/10 border border-electric-500/20 mb-3">
                              <Calendar className="w-3.5 h-3.5 text-electric-400" />
                              <span className="text-xs md:text-sm text-electric-200 font-orbitron tracking-wider">
                                {item.time}
                              </span>
                            </div>

                            {/* Description */}
                            <p className="text-sm text-gray-400 leading-relaxed font-sans">
                              {item.description}
                            </p>

                            {/* Decorative corner */}
                            <div className={`absolute ${isLeft ? "bottom-0 right-0" : "bottom-0 left-0"} w-16 h-16 opacity-5`}>
                              <div className={`w-full h-full bg-gradient-to-${isLeft ? "tl" : "tr"} from-electric-400 to-transparent`} />
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* End marker */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="flex justify-center mt-12"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-electric-500/20 rounded-full blur-xl animate-pulse" />
                <div className="relative w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br from-electric-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-electric-500/50">
                  <Sparkles className="w-6 h-6 md:w-8 md:h-8 text-white" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* About Sections */}
      <section id="about" className="relative py-32 px-4 sm:px-6 lg:px-8">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-navy-900/50 to-transparent pointer-events-none" />
        <div className="max-w-6xl mx-auto relative space-y-24">
          {/* About SVCE / Department */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-3xl glass-card neon-border p-8 md:p-10"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-electric-500/8 via-transparent to-cyan-500/10 pointer-events-none" />
            <div className="relative space-y-6 text-center md:text-left md:max-w-3xl">
              <div className="flex items-center gap-3 justify-center md:justify-start">
                <div className="w-1 h-10 rounded-full bg-gradient-to-b from-electric-400 to-cyan-400 shadow-[0_0_18px_rgba(45,212,191,0.7)]" />
                <p className="text-sm md:text-base uppercase tracking-[0.45em] text-electric-50 font-semibold">
                  About SVCE - EEE
                </p>
              </div>
              <h2 className="text-3xl md:text-5xl tracking-tight font-orbitron">
                <span className="text-gradient">Shaping Future-ready Engineers</span>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-electric-500 to-cyan-500 rounded-full mx-auto md:mx-0" />
              <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed font-sans">
                <p>
                  The Department of Electrical and Electronics Engineering at Sri Venkateswara College of Engineering
                  is dedicated to experiential learning, strong fundamentals, and industry collaboration.
                </p>
                <p>
                  Through AEEE, the student association, we enable learners to work on real-time projects,
                  hands-on workshops, and technical forums that bridge classroom concepts with practical engineering.
                </p>
              </div>
              <div className="mt-4 border-l-2 border-electric-500/70 pl-4 text-sm md:text-base text-gray-300 italic mx-auto md:mx-0">
                &quot;Our goal is to ignite curiosity and empower students to engineer solutions for tomorrow.&quot;
                <div className="mt-2 text-electric-300 not-italic font-medium">
                  – SVCE EEE Faculty
                </div>
              </div>
            </div>
          </motion.div>

          {/* About PULSE */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="glass-card neon-border rounded-3xl p-8 md:p-10 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-electric-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
            <div className="relative space-y-6">
              <div className="flex items-center gap-3">
                <div className="w-1 h-10 rounded-full bg-gradient-to-b from-electric-400 to-cyan-400 shadow-[0_0_18px_rgba(45,212,191,0.7)]" />
                <p className="text-sm md:text-base uppercase tracking-[0.45em] text-electric-50 font-semibold">
                  About PULSE&apos;26
                </p>
              </div>
              <h2 className="text-3xl md:text-4xl tracking-tight font-orbitron">
                <span className="text-gradient-primary">A National Level Technical Symposium</span>
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-electric-500 to-cyan-500 rounded-full" />
              <div className="space-y-4 text-gray-300 text-sm md:text-base leading-relaxed font-sans max-w-3xl">
                <p>
                  PULSE&apos;26 is a flagship national symposium by the Department of Electrical and Electronics
                  Engineering, bringing together innovators, problem-solvers, and enthusiasts under one electrifying roof.
                </p>
                <p>
                  Featuring circuit design challenges, auctions, team puzzles, technical quizzes, and project showcases,
                  PULSE creates a platform where creativity meets engineering precision.
                </p>
                <p>
                  Be part of a milestone event on February 19, 2026 and experience the surge of technology,
                  collaboration, and innovation.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="relative py-20 px-4 sm:px-6 lg:px-8 border-t border-electric-500/20 bg-gradient-to-b from-navy-950/95 to-navy-900/95 backdrop-blur-xl mt-20">
        {/* Decorative top border glow */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-electric-500/50 to-transparent" />
        
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* AEEE Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-5"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-bold tracking-wide font-orbitron">
                  <span className="bg-gradient-to-r from-electric-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                    AEEE
                  </span>
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-electric-500 to-cyan-500 rounded-full" />
              </div>
              <div className="space-y-3 text-gray-400 text-sm font-sans">
                <p className="tracking-wide leading-relaxed">Association of Electrical and Electronics Engineering</p>
                <p className="tracking-wide text-gray-500">SVCE - EEE</p>
                <a
                  href="https://instagram.com/aeee.svce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-gray-400 hover:text-electric-400 transition-all duration-300 group mt-3"
                >
                  <Instagram className="w-4 h-4 group-hover:scale-110 group-hover:rotate-12 transition-transform" />
                  <span className="tracking-wide">@aeee.svce</span>
                </a>
              </div>
            </motion.div>

            {/* Address Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-5"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-bold tracking-wide font-orbitron">
                  <span className="bg-gradient-to-r from-electric-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                    Address
                  </span>
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-electric-500 to-cyan-500 rounded-full" />
              </div>
              <div className="space-y-3 text-sm text-gray-400 font-sans leading-relaxed">
                <p className="font-semibold text-gray-300">Sri Venkateswara College of Engineering</p>
                <div className="space-y-1.5">
                  <p>Post Bag No.1</p>
                  <p>Pennalur Village</p>
                  <p>Chennai - Bengaluru Highways</p>
                  <p>Sriperumbudur (off Chennai) Tk. - 602 117</p>
                  <p>Tamil Nadu, India</p>
                </div>
              </div>
            </motion.div>

            {/* Contact Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-5"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-bold tracking-wide font-orbitron">
                  <span className="bg-gradient-to-r from-electric-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                    Contact Us
                  </span>
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-electric-500 to-cyan-500 rounded-full" />
              </div>
              <div className="space-y-4 text-sm text-gray-400 font-sans">
                <a 
                  href="mailto:aeee@svce.ac.in"
                  className="flex items-start gap-3 group hover:text-electric-400 transition-colors"
                >
                  <Mail className="w-4 h-4 mt-0.5 group-hover:text-electric-400 transition-colors flex-shrink-0" />
                  <span className="tracking-wide">aeee@svce.ac.in</span>
                </a>
                <a
                  href="https://instagram.com/aeee.svce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 group hover:text-electric-400 transition-colors"
                >
                  <Instagram className="w-4 h-4 group-hover:text-electric-400 transition-colors flex-shrink-0" />
                  <span className="tracking-wide">@aeee.svce</span>
                </a>
              </div>
            </motion.div>

            {/* Registration Support Column */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-5"
            >
              <div className="space-y-3">
                <h3 className="text-xl font-bold tracking-wide font-orbitron">
                  <span className="bg-gradient-to-r from-electric-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                    Registration Support
                  </span>
                </h3>
                <div className="w-12 h-1 bg-gradient-to-r from-electric-500 to-cyan-500 rounded-full" />
              </div>
              <div className="space-y-4 text-sm font-sans">
                <div className="group">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1.5">Coordinator</p>
                  <a 
                    href="tel:+919342597576"
                    className="flex items-center gap-2 text-gray-400 hover:text-electric-400 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-electric-400 group-hover:scale-125 transition-transform" />
                    <div>
                      <p className="font-medium text-white">Thamizh</p>
                      <p className="text-gray-400 tracking-wider">+91 93425 97576</p>
                    </div>
                  </a>
                </div>
                <div className="group">
                  <p className="text-gray-500 text-xs uppercase tracking-wider mb-1.5">Coordinator</p>
                  <a 
                    href="tel:+919500774210"
                    className="flex items-center gap-2 text-gray-400 hover:text-electric-400 transition-colors"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                    <div>
                      <p className="font-medium text-white">Nimal</p>
                      <p className="text-gray-400 tracking-wider">+91 95007 74210</p>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Section */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-16 pt-8 border-t border-electric-500/10"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-gray-500 font-sans tracking-wider">
                © 2026 PULSE. All rights reserved.
              </p>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-electric-400/50" />
                <p className="text-xs text-gray-600 font-sans tracking-wide">
                  Powered by Innovation & Excellence
                </p>
              </div>
            </div>
          </motion.div>

          {/* Decorative Elements */}
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-electric-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        </div>
      </footer>
    </div>
  )
}