'use client'

import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { motion, useScroll, useTransform, useSpring, AnimatePresence } from 'framer-motion'
import { ArrowRight, Zap, Calendar, Sparkles, Instagram, Mail, Users } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import Countdown from '@/components/Countdown'
import CircuitBackground from '@/components/CircuitBackground'
import ScrambleText from '@/components/ScrambleText'
import HUDBrackets from '@/components/HUDBrackets'
import HeistStats from '@/components/HeistStats'
import MoneyRain from '@/components/MoneyRain'
import Spotlight from '@/components/Spotlight'
import GlitchText from '@/components/GlitchText'
import ProfessorGlitch from '@/components/ProfessorGlitch'

// Glowing Text Component for Heist Theme
const GlowingText = ({ children, className = '' }: { children: React.ReactNode, className?: string }) => (
  <span className={`relative inline-block ${className}`}>
    <span className="absolute inset-0 blur-md text-heist-red opacity-50 select-none" aria-hidden="true">
      {children}
    </span>
    <span className="relative z-10 text-heist-white text-shadow-red">{children}</span>
  </span>
)

export default function Home() {
  const { scrollY } = useScroll()
  const springConfig = { stiffness: 100, damping: 30, restDelta: 0.001 }

  // Hero Parallax
  const logoTranslateY = useSpring(useTransform(scrollY, [0, 400], [0, 40]), springConfig)
  const logoScale = useSpring(useTransform(scrollY, [0, 400], [1, 0.9]), springConfig)

  const [isVaultOpen, setIsVaultOpen] = useState(false)
  const [isExiting, setIsExiting] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const handleBreach = () => {
    if (isExiting) return
    setIsExiting(true)
    setTimeout(() => {
      setIsVaultOpen(true)
      setIsExiting(false)
    }, 1500) // Longer delay for majestic opening
  }

  const showVaultOverlay = mounted && (!isVaultOpen || isExiting)

  // Vault opening overlay — portal to body so it's above navbar (Money Heist style)
  const vaultOverlay =
    typeof document !== 'undefined' &&
    showVaultOverlay &&
    createPortal(
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 z-[99999] flex min-h-screen min-w-full items-center justify-center bg-black cursor-wait overflow-hidden"
      >
        {/* Left Opening Panel */}
        <motion.div
          animate={{ x: isExiting ? '-100%' : '0%' }}
          transition={{ duration: 1.5, ease: [0.7, 0, 0.2, 1] }}
          className="absolute inset-0 w-1/2 left-0 h-full overflow-hidden z-0 border-r border-heist-red/30"
        >
          <div className="absolute inset-0 w-[200%] h-full">
            <Image
              src="/vault.png"
              alt="Vault Left"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            {/* Overlays on image */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
            <div className="absolute inset-0 bg-heist-red/[0.03]" />
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              <CircuitBackground />
            </div>

            {/* Animated Laser Beam */}
            <motion.div
              animate={{ opacity: [0.1, 0.5, 0.1], x: ['0%', '100%', '0%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-y-0 w-1 bg-gradient-to-r from-transparent via-heist-red to-transparent blur-sm"
            />

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-heist-red/10 to-transparent" />
            <div className="absolute left-0 top-0 h-full w-24 bg-gradient-to-r from-heist-red/10 to-transparent" />
          </div>
        </motion.div>

        {/* Right Opening Panel */}
        <motion.div
          animate={{ x: isExiting ? '100%' : '0%' }}
          transition={{ duration: 1.5, ease: [0.7, 0, 0.2, 1] }}
          className="absolute inset-0 w-1/2 left-1/2 h-full overflow-hidden z-0 border-l border-heist-red/30"
        >
          <div className="absolute inset-0 w-[200%] left-[-100%] h-full">
            <Image
              src="/vault.png"
              alt="Vault Right"
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            {/* Overlays on image */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />
            <div className="absolute inset-0 bg-heist-red/[0.03]" />
            <div className="absolute inset-0 opacity-40 pointer-events-none">
              <CircuitBackground />
            </div>

            {/* Animated Laser Beam Mirror */}
            <motion.div
              animate={{ opacity: [0.1, 0.5, 0.1], x: ['100%', '0%', '100%'] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="absolute inset-y-0 w-1 bg-gradient-to-r from-transparent via-heist-red to-transparent blur-sm"
            />

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-heist-red/10 to-transparent" />
            <div className="absolute right-0 top-0 h-full w-24 bg-gradient-to-l from-heist-red/10 to-transparent" />
          </div>
        </motion.div>

        {/* Breach Alarm Strobe */}
        <AnimatePresence>
          {isExiting && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 0.1, 0, 0.2, 0] }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2, repeat: Infinity }}
              className="absolute inset-0 bg-heist-red/40 z-20 pointer-events-none"
            />
          )}
        </AnimatePresence>

        {/* Centered Content - Scales and Fades */}
        <motion.div
          animate={{
            scale: isExiting ? 1.8 : 1,
            opacity: isExiting ? 0 : 1,
            filter: isExiting ? 'blur(30px) brightness(2)' : 'blur(0px) brightness(1)',
          }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          className="relative z-30 mx-6 max-w-2xl text-center"
          onClick={(e) => e.stopPropagation()}
        >
          <HUDBrackets className="group">
            <div
              className="rounded-none border-2 border-heist-red/50 bg-black/40 backdrop-blur-3xl md:px-14 md:py-16 shadow-[0_0_50px_rgba(226,35,26,0.3)] relative overflow-hidden"
              onClick={handleBreach}
            >
              {/* Scanning line effect */}
              <div className="absolute inset-0 pointer-events-none opacity-40">
                <div className="absolute top-0 left-0 w-full h-[2px] bg-heist-red shadow-[0_0_15px_#E2231A] animate-[scan_2s_linear_infinite]" />
              </div>

              <div className="relative z-10 mb-8 text-center space-y-4">
                <div className="flex items-center justify-center gap-3 mb-2">
                  <div className="w-2 h-2 bg-heist-red rounded-full animate-ping" />
                  <p className="text-[11px] font-heist text-heist-red font-bold tracking-[0.6em] uppercase">
                    {isExiting ? '[ BREACH_IN_PROGRESS ]' : 'SECURITY CLEARANCE REQUIRED'}
                  </p>
                  <div className="w-2 h-2 bg-heist-red rounded-full animate-ping" />
                </div>

                <h1 className="font-display text-4xl font-black uppercase leading-tight tracking-normal text-white drop-shadow-[0_0_30px_rgba(226,35,26,0.6)] sm:text-5xl md:text-6xl lg:text-7xl">
                  <GlitchText className="text-white">OPEN THE VAULT</GlitchText>
                  <span className="block text-2xl md:text-3xl mt-2 text-heist-silver tracking-[0.5em] font-heist">TO EXPLORE</span>
                </h1>
              </div>

              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [1, 0.8, 1],
                  boxShadow: [
                    '0 0 20px rgba(226, 35, 26, 0.4)',
                    '0 0 40px rgba(226, 35, 26, 0.8)',
                    '0 0 20px rgba(226, 35, 26, 0.4)'
                  ]
                }}
                transition={{
                  duration: 0.6, // Faster pulse
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="rounded-none inline-block"
              >
                <Button
                  type="button"
                  className="bg-heist-red hover:bg-heist-darkRed text-white px-20 py-10 text-3xl rounded-none font-display tracking-[0.5em] uppercase transition-all border-2 border-heist-red shadow-[12px_12px_0_rgba(179,0,0,0.5)] hover:shadow-none hover:translate-x-[6px] hover:translate-y-[6px] btn-heist-glitch mx-auto block relative overflow-hidden"
                  onClick={(e) => {
                    e.preventDefault()
                    e.stopPropagation()
                    handleBreach()
                  }}
                >
                  Enter
                </Button>
              </motion.div>

              <div className="mt-10 flex items-center justify-between text-[9px] font-heist text-heist-silver/40 uppercase tracking-[0.3em] border-t border-heist-white/10 pt-6">
                <div className="flex flex-col items-start gap-1">
                  <span>NODE: SVCE_V26</span>
                  <span>AUTH: OMEGA_LVL</span>
                </div>
                <div className="text-right flex flex-col items-end gap-1">
                  <span>SYS_STATUS: READY</span>
                  <span className="text-heist-red">CONNECTION: SECURE</span>
                </div>
              </div>
            </div>
          </HUDBrackets>
        </motion.div>
      </motion.div>,
      document.body
    )

  return (
    <div className="min-h-screen bg-heist-black text-heist-white overflow-hidden font-sans selection:bg-heist-red selection:text-white">
      {vaultOverlay}

      {/* Professional Scanline & Grain Overlay */}
      <div className="fixed inset-0 z-[100] pointer-events-none opacity-[0.03] mix-blend-overlay">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] brightness-100 contrast-150" />
      </div>
      <div className="fixed inset-0 z-[101] pointer-events-none scanline opacity-[0.1]" />

      <CircuitBackground />
      <MoneyRain />
      <Spotlight />

      {/* Red Ambient Light & Vignette */}
      <div className="fixed inset-0 bg-gradient-to-b from-heist-red/[0.03] via-transparent to-black/70 pointer-events-none z-10" />
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,transparent_0%,rgba(0,0,0,0.4)_100%)] pointer-events-none z-10" />

      {/* Navigation Padding */}
      <div className="h-16" />

      {/* Hero Section */}
      <section className="relative min-h-[calc(100vh-4rem)] flex items-center justify-center overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          <div className="absolute top-1/4 -left-20 w-96 h-96 bg-heist-red/5 rounded-full blur-[120px] animate-pulse-slow" />
          <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-heist-red/[0.02] rounded-full blur-[120px] animate-pulse-slow delay-1000" />
        </div>

        <div className="relative z-20 max-w-7xl mx-auto px-6 md:px-12 text-center py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="space-y-12"
          >
            {/* Institution Details - Technical HUD Style */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="relative max-w-4xl mx-auto"
            >
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 flex items-center gap-6 text-[9px] font-heist text-heist-red/40 uppercase tracking-[0.5em] whitespace-nowrap">
                <span className="flex items-center gap-2"><div className="w-1 h-1 bg-heist-red rounded-full animate-ping" /> SEC_LINK: STABLE</span>
                <span className="hidden sm:inline">Lat: 12.9853° N</span>
                <span className="w-1 h-1 bg-heist-red rounded-full opacity-30" />
                <span className="hidden sm:inline">Long: 79.9698° E</span>
                <span className="w-1 h-1 bg-heist-red rounded-full opacity-30" />
                <span>FREQ: 50Hz</span>
              </div>

              <HUDBrackets className="p-1 md:p-2 group">
                <div className="bg-heist-black/60 backdrop-blur-sm border border-heist-white/10 p-8 md:p-14 relative overflow-hidden shadow-2xl group/inst">
                  {/* High-Tech Background Layers */}
                  <div className="absolute inset-0 bg-blueprint opacity-[0.1] pointer-events-none z-0" />

                  {/* The Professor Background Element with Glitch Effect */}
                  <ProfessorGlitch />

                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-heist-red/40 to-transparent z-10" />
                  <div className="absolute bottom-0 left-0 w-full h-[1px] bg-heist-white/5 z-10" />

                  <div className="relative z-10 space-y-8">
                    {/* Security Status Header */}
                    <div className="flex items-center justify-between border-b border-heist-white/5 pb-4 mb-2">
                      <div className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-heist-red rounded-full animate-pulse shadow-[0_0_8px_#E2231A]" />
                        <span className="text-[10px] font-heist text-heist-red font-black tracking-[0.4em] uppercase">
                          [SYSTEM_ACCESS_GRANTED]
                        </span>
                      </div>
                      <div className="text-[9px] font-heist text-heist-silver/30 tracking-[0.2em] font-bold">
                        NODE_V26.AUTH_CORE
                      </div>
                    </div>

                    <div className="space-y-4">
                      <h2 className="text-3xl md:text-6xl uppercase tracking-[0.1em] text-white font-black font-display italic leading-none drop-shadow-2xl">
                        SRI VENKATESWARA <br />
                        <span className="text-heist-silver/80">COLLEGE OF ENGINEERING</span>
                      </h2>

                      <div className="flex items-center gap-6 py-2">
                        <div className="h-[1px] flex-1 bg-gradient-to-r from-heist-red/40 to-transparent" />
                        <Zap className="w-6 h-6 text-heist-red animate-pulse" />
                        <div className="h-[1px] flex-1 bg-gradient-to-l from-heist-red/40 to-transparent" />
                      </div>

                      <p className="text-lg md:text-3xl text-heist-gold font-display font-black uppercase tracking-[0.3em] drop-shadow-[0_0_15px_rgba(255,215,0,0.15)] leading-relaxed">
                        Department of Electrical <br className="sm:hidden" /> and Electronics Engineering
                      </p>
                    </div>

                    {/* Enhanced Operation Tag */}
                    <div className="pt-4">
                      <div className="inline-flex items-center gap-4 px-10 py-4 bg-heist-red/10 border border-heist-red/30 relative group/tag overflow-hidden">
                        <div className="absolute inset-0 bg-heist-red/5 translate-y-[100%] group-hover/tag:translate-y-0 transition-transform duration-300" />
                        <div className="w-2 h-2 bg-heist-red animate-ping" />
                        <p className="text-sm md:text-xl text-white tracking-[0.4em] font-heist uppercase relative z-10 transition-all group-hover/tag:text-heist-gold">
                          <ScrambleText text="OPERATION: PULSE'26" />
                        </p>
                        <div className="w-2 h-2 bg-heist-red animate-ping" />
                      </div>
                    </div>
                  </div>

                  {/* Corner Elements */}
                  <div className="absolute top-2 right-2 w-8 h-8 border-t border-r border-heist-white/10" />
                  <div className="absolute bottom-2 left-2 w-8 h-8 border-b border-l border-heist-white/10" />
                </div>
              </HUDBrackets>

              <div className="mt-4 flex items-center justify-center gap-8 text-[8px] font-heist text-heist-silver/30 uppercase tracking-[0.3em]">
                <span>SYS_TYPE: CORE_NODE</span>
                <span>AUTH_LVL: OMEGA</span>
                <span>STATUS: BREACH_READY</span>
              </div>
            </motion.div>

            {/* Logo */}
            <motion.div
              style={{ y: logoTranslateY, scale: logoScale }}
              initial={{ opacity: 0, scale: 0.8, filter: "brightness(0)" }}
              animate={{ opacity: 1, scale: 1, filter: "brightness(1.1)" }}
              transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
              className="relative py-12 px-4"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[30rem] h-[30rem] bg-heist-red/[0.03] rounded-full blur-[100px] animate-pulse-slow" />
              </div>

              <motion.div
                whileHover={{ rotateY: 15, rotateX: -10, perspective: 1000 }}
                className="relative cursor-pointer transition-all duration-500"
              >
                <div className="absolute -inset-4 bg-heist-red/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <motion.img
                  src="/images/logo3.png"
                  alt="PULSE 26"
                  className="relative mx-auto w-72 md:w-[500px] h-auto object-contain drop-shadow-[0_0_20px_rgba(226,35,26,0.3)] contrast-110 saturate-100"
                  whileHover={{
                    filter: [
                      'drop-shadow(0 0 30px rgba(226,35,26,0.5))',
                      'drop-shadow(0 0 15px rgba(226,35,26,0.8)) brightness(1.2)',
                      'drop-shadow(0 0 30px rgba(226,35,26,0.5))'
                    ]
                  }}
                  transition={{ duration: 0.2, repeat: Infinity, repeatType: "reverse" }}
                />
              </motion.div>
            </motion.div>

            {/* Tagline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="space-y-6"
            >
              <h2 className="text-6xl md:text-9xl font-black tracking-normal font-display text-white leading-none uppercase italic animate-pulse-slow">
                <GlitchText className="block text-heist-red drop-shadow-[4px_4px_0_rgba(0,0,0,0.8)] select-none">
                  BELLA CIAO
                </GlitchText>
                <span className="text-4xl md:text-6xl text-white font-heist tracking-[0.4em] block mt-4 animate-bounce">THE PLAN IS SET</span>
              </h2>
              <div className="flex items-center justify-center gap-4 text-heist-silver mt-8 font-heist">
                <div className="px-6 py-2 border border-heist-white/10 bg-heist-white/[0.02] rotate-[-2deg] text-lg shadow-[4px_4px_0_rgba(255,255,255,0.05)] uppercase tracking-[0.4em]">
                  TARGET DATE: FEB 19, 2026
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-6"
            >
              <Button asChild size="lg" className="bg-heist-red hover:bg-heist-darkRed text-white px-8 py-6 text-xl rounded-none font-display tracking-[0.4em] uppercase transition-all border-2 border-heist-red shadow-[8px_8px_0_rgba(179,0,0,0.3)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] btn-heist-glitch">
                <Link href="/register" className="flex items-center gap-2">
                  Join the Resistance
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-2 border-heist-white/10 hover:border-heist-red text-heist-white hover:bg-heist-red/10 px-8 py-6 text-xl rounded-none font-display tracking-[0.4em] uppercase transition-all shadow-[8px_8px_0_rgba(255,255,255,0.05)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px]">
                <Link href="/events">Explore Missions</Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Countdown Section */}
      <section className="relative py-32 px-6 md:px-12 border-y border-heist-red/20 bg-heist-black overflow-hidden group">
        {/* Background Grids */}
        <div className="absolute inset-0 bg-blueprint opacity-[0.03] pointer-events-none" />
        <div className="absolute top-0 left-0 w-64 h-64 bg-heist-red/5 blur-[120px] rounded-full pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-heist-red/5 blur-[120px] rounded-full pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center space-y-16 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="space-y-4"
          >
            <div className="inline-flex items-center gap-6 text-[10px] font-heist text-heist-red/60 tracking-[0.5em] uppercase mb-10">
              <span className="w-16 h-[1px] bg-gradient-to-r from-transparent via-heist-red/30 to-transparent" />
              <span className="animate-pulse flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-heist-red rounded-full" />
                TEMPORAL_SEQUENCE_LOCK
              </span>
              <span className="w-16 h-[1px] bg-gradient-to-l from-transparent via-heist-red/30 to-transparent" />
            </div>

            <h2 className="text-6xl md:text-9xl font-black tracking-normal font-display text-white uppercase italic leading-none">
              <span className="text-heist-red drop-shadow-[0_0_20px_rgba(226,35,26,0.2)]">MISSION</span> START
            </h2>
            <div className="max-w-xl mx-auto border-y border-heist-white/5 py-4 mt-6">
              <p className="text-heist-silver/40 text-[10px] md:text-xs tracking-[0.5em] font-heist uppercase">
                <ScrambleText text="TIME IS RUNNING OUT. POSITION YOUR SQUAD. EXECUTE THE PLAN." delay={0.5} />
              </p>
            </div>
          </motion.div>

          <div className="relative">
            <div className="absolute inset-0 bg-heist-red/5 blur-3xl rounded-full scale-150 group-hover:bg-heist-red/10 transition-colors duration-1000" />
            <Countdown targetISO="2026-02-19T09:00:00+05:30" />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-32 px-6 md:px-12 overflow-hidden">
        {/* Background circuit-like patterns only for this section */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-blueprint" />

        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-32 relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl md:text-[12rem] font-display font-black text-heist-red/[0.015] uppercase italic select-none tracking-normal w-full whitespace-nowrap overflow-hidden">
              INTEL_OVERVIEW_2026
            </div>

            <div className="relative z-10 flex flex-col items-center gap-6">
              <div className="flex items-center gap-4 px-6 py-2 bg-heist-red/5 border border-heist-red/20 font-heist text-[10px] tracking-[0.5em] text-heist-red/60 uppercase">
                <Users className="w-3.5 h-3.5" />
                Live Squad Metrics
              </div>
              <h2 className="text-5xl md:text-8xl font-black tracking-normal font-display text-white uppercase italic drop-shadow-2xl">
                THE <span className="text-heist-red drop-shadow-[0_0_15px_rgba(226,35,26,0.3)]">HEIST</span> STATS
              </h2>
              <div className="w-24 h-1.5 bg-heist-red mt-2" />
            </div>
          </motion.div>

          <HeistStats />
        </div>
      </section>

      {/* Timeline Section */}
      <section id="timeline" className="relative py-32 px-6 md:px-12 bg-heist-charcoal/20">
        <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-heist-black to-transparent" />

        <div className="max-w-7xl mx-auto relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="text-center mb-32 relative"
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-9xl md:text-[13rem] font-display font-black text-heist-white/[0.01] uppercase italic select-none tracking-normal w-full whitespace-nowrap overflow-hidden">
              STRATEGIC_PLAN
            </div>

            <div className="relative z-10 flex flex-col items-center gap-6">
              <div className="inline-flex items-center gap-3 px-8 py-2 bg-heist-red/10 border-2 border-heist-red/40 rotate-1 shadow-[8px_8px_0_rgba(179,0,0,0.2)] group hover:rotate-0 transition-all duration-500">
                <Zap className="w-5 h-5 text-heist-red fill-heist-red" />
                <span className="text-sm uppercase tracking-[0.5em] text-white font-heist font-black">
                  MISSION_CHRONOLOGY
                </span>
              </div>
              <h2 className="text-6xl md:text-[10rem] tracking-tight font-display font-black uppercase italic text-white leading-none drop-shadow-2xl">
                THE <span className="text-heist-red">PLAN</span>
              </h2>
              <div className="flex items-center justify-center gap-6 text-heist-silver/30 font-heist tracking-[0.6em] text-[10px] uppercase mt-4">
                <div className="w-2 h-2 bg-heist-red rounded-full animate-ping" />
                SYNC_STATUS: ENCRYPTED_SEQUENCE
                <div className="w-2 h-2 bg-heist-red rounded-full animate-ping" />
              </div>
            </div>
          </motion.div>

          {/* Timeline Container */}
          <div className="relative">
            {/* Center line with draw-in animation */}
            <motion.div
              initial={{ height: 0 }}
              whileInView={{ height: '100%' }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: "easeInOut" }}
              className="absolute left-8 md:left-1/2 top-0 w-[2px] bg-gradient-to-b from-heist-red via-heist-red/40 to-heist-red/10 pointer-events-none origin-top"
            />

            <div className="space-y-16 md:space-y-24">
              {[
                { title: "Inauguration", time: "09:30 AM", side: "left", description: "Official commencement of Operation PULSE'26. Professors and delegates brief the squad." },
                { title: "Project Presentation", time: "10:00 AM", side: "right", description: "Showcase innovative technical models. Prototypes must be ready for inspection." },
                { title: "Bid To Build", time: "10:00 - 12:30 PM", side: "left", description: "Strategic component auction followed by hardware assembly." },
                { title: "U(know)", time: "10:30 - 12:30 PM", side: "right", description: "Memory and logic-based evaluation for first & second-year recruits." },
                { title: "Electric Wordza", time: "12:30 - 2:00 PM", side: "left", description: "Linguistic decryption and technical crossword puzzles." },
                { title: "Sail The Circuit", time: "12:30 - 2:00 PM", side: "right", description: "Practical navigation through complex power distribution challenges." },
                { title: "Battleship", time: "12:45 - 2:30 PM", side: "left", description: "Tactical positioning and logic puzzles in the grid." },
                { title: "Valedictory", time: "02:30 PM", side: "right", description: "Final debriefing. Distribution of spoils and awards ceremony." }
              ].map((item, index) => {
                const isLeft = item.side === "left"
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, scale: 0.9, x: isLeft ? -50 : 50 }}
                    whileInView={{ opacity: 1, scale: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.7, delay: index * 0.1 }}
                    className={`relative flex ${isLeft ? "md:justify-start" : "md:justify-end"}`}
                  >
                    {/* Connector Diamond */}
                    <div className="absolute left-[1.875rem] md:left-1/2 top-8 md:top-12 w-4 h-4 bg-heist-black border-2 border-heist-red z-10 rotate-45 -translate-x-1.5 md:-translate-x-2 shadow-[0_0_15px_#B30000]" />

                    {/* Card container */}
                    <div className={`flex-1 md:max-w-[46%] pl-16 md:pl-0 ${isLeft ? "md:pr-16" : "md:pl-16"}`}>
                      <HUDBrackets className="group">
                        <div className="relative bg-heist-charcoal/80 backdrop-blur-md border border-heist-white/10 p-8 shadow-2xl group-hover:border-heist-red/40 transition-all duration-500 overflow-hidden">
                          {/* Scanning Line */}
                          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                            <div className="absolute top-0 left-0 w-full h-[1px] bg-heist-red/40 shadow-[0_0_15px_#E2231A] animate-[scan_3s_linear_infinite]" />
                          </div>

                          {/* Red Tag */}
                          <div className="absolute top-0 right-0 bg-heist-red text-white text-[9px] font-heist font-black px-4 py-1.5 uppercase tracking-[0.3em] z-20">
                            DATA_{index + 1}
                          </div>

                          <div className="space-y-4 relative z-10">
                            <h3 className="text-2xl md:text-4xl font-display text-white tracking-tight uppercase italic flex items-center gap-3">
                              <span className="text-heist-red font-black">/</span> {item.title}
                            </h3>

                            <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-heist-red/10 border border-heist-red/20 group-hover:border-heist-red/50 transition-colors">
                              <Calendar className="w-3.5 h-3.5 text-heist-red" />
                              <span className="text-[10px] md:text-xs text-heist-silver font-heist font-black tracking-[0.2em] uppercase">
                                T-MINUS: {item.time}
                              </span>
                            </div>

                            <p className="text-sm md:text-base text-heist-silver/90 leading-relaxed font-heist group-hover:text-heist-white transition-colors">
                              {item.description}
                            </p>

                            <div className="pt-4 border-t border-heist-white/5 flex items-center justify-between text-[8px] font-heist text-heist-silver/20 uppercase tracking-[0.4em]">
                              <span>Status: Programmed</span>
                              <span>Priority: High</span>
                            </div>
                          </div>
                        </div>
                      </HUDBrackets>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* About Sections */}
      <section id="about" className="relative py-32 px-6 md:px-12 bg-paper-texture bg-repeat overflow-hidden">
        <div className="max-w-7xl mx-auto relative space-y-32">

          {/* Mission Briefing */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-heist-red/5 blur-3xl opacity-20 pointer-events-none" />
            <HUDBrackets>
              <div className="relative bg-heist-charcoal/90 backdrop-blur-xl border border-heist-white/10 p-12 md:p-24 shadow-3xl overflow-hidden group">
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-heist-red/40 to-transparent" />

                <div className="relative z-10 space-y-16">
                  <div className="text-center space-y-6">
                    <h2 className="text-6xl md:text-9xl font-display font-black text-white italic uppercase leading-none">
                      THE <span className="text-heist-red underline decoration-heist-red/20 underline-offset-8">MISSION</span> BRIEFING
                    </h2>
                  </div>

                  <p className="text-2xl md:text-4xl text-heist-silver/90 font-display tracking-[0.2em] max-w-5xl mx-auto uppercase italic leading-tight text-center">
                    PULSE'26 is not just a symposium. <br className="hidden md:block" />
                    <span className="text-white">It is a movement of technical disruption.</span>
                  </p>

                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      { icon: Zap, title: "Innovate", color: "text-heist-red", desc: "Break the boundaries of conventional engineering through rapid prototyping." },
                      { icon: Sparkles, title: "Execute", color: "text-heist-gold", desc: "Turn theoretical blueprints into operational reality with laser precision." },
                      { icon: Users, title: "Disrupt", color: "text-white", desc: "Challenge the current status quo with your groundbreaking technical ideas." }
                    ].map((feature, i) => (
                      <div
                        key={feature.title}
                        className="p-8 border border-heist-white/10 bg-heist-red/[0.03] backdrop-blur-md hover:border-heist-red/40 transition-all duration-500 relative group/card flex flex-col h-full shadow-2xl"
                      >
                        <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-heist-red/30 group-hover/card:border-heist-red transition-colors" />
                        <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-heist-white/10 group-hover/card:border-heist-white/30 transition-colors" />

                        <feature.icon className={`w-12 h-12 mb-6 drop-shadow-[0_0_15px_rgba(226,35,26,0.4)] ${feature.color}`} />
                        <h4 className="font-display text-3xl uppercase mb-3 text-white tracking-wider group-hover:text-heist-red transition-colors duration-300">
                          {feature.title}
                        </h4>
                        <p className="text-sm text-heist-silver font-heist leading-relaxed group-hover:text-white transition-colors duration-300">
                          {feature.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </HUDBrackets>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative py-28 px-6 md:px-12 border-t-4 border-heist-red bg-heist-black overflow-hidden selection:bg-heist-red selection:text-white">
        {/* Background Atmosphere */}
        <div className="absolute inset-0 bg-radial-gradient from-heist-red/[0.05] to-transparent opacity-30 pointer-events-none" />
        <div className="absolute inset-0 noise-overlay opacity-[0.02]" />

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="space-y-6">
              <h3 className="text-2xl font-black font-display italic text-heist-red uppercase tracking-[0.2em] drop-shadow-[0_0_8px_rgba(226,35,26,0.3)]">
                PROFESSOR'S NOTES
              </h3>
              <div className="w-12 h-1 bg-heist-red" />
              <div className="space-y-4">
                <p className="text-heist-silver font-heist text-sm italic leading-relaxed">
                  "The plan is designed to be perfect. Execute it with precision. No one is left behind in the grid."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-[1px] bg-heist-gold/40" />
                  <p className="text-heist-gold font-display text-xl uppercase tracking-widest">SVCE - EEE</p>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-black font-display italic text-heist-red uppercase tracking-[0.2em] drop-shadow-[0_0_8px_rgba(226,35,26,0.3)]">
                HQ LOCATION
              </h3>
              <div className="w-12 h-1 bg-heist-red" />
              <HUDBrackets>
                <div className="rounded-none overflow-hidden border-2 border-heist-red/40 hover:border-heist-red transition-all duration-500 shadow-[0_0_20px_rgba(226,35,26,0.15)] group/map">
                  <iframe
                    src="https://www.google.com/maps?q=12.9853,79.9698&z=15&output=embed"
                    width="100%"
                    height="180"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="opacity-90 contrast-125 saturate-50 group-hover/map:saturate-100 transition-all duration-700"
                  ></iframe>
                </div>
              </HUDBrackets>
              <div className="text-heist-silver font-heist text-[11px] space-y-2 uppercase tracking-[0.2em] leading-relaxed">
                <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 bg-heist-red" /> SVCE, PENNALUR</div>
                <p className="text-heist-silver/60">Sriperumbudur, Tamil Nadu - 602 117</p>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-black font-display italic text-heist-red uppercase tracking-[0.2em] drop-shadow-[0_0_8px_rgba(226,35,26,0.3)]">
                CONTACT INTEL
              </h3>
              <div className="w-12 h-1 bg-heist-red" />
              <div className="space-y-4 font-heist text-sm text-heist-silver/80">
                <a href="mailto:aeee@svce.ac.in" className="flex items-center gap-3 hover:text-heist-red transition-colors group">
                  <div className="w-8 h-8 rounded-full border border-heist-white/10 flex items-center justify-center group-hover:border-heist-red/40">
                    <Mail className="w-4 h-4" />
                  </div>
                  aeee@svce.ac.in
                </a>
                <a href="https://instagram.com/aeee.svce" className="flex items-center gap-3 hover:text-heist-red transition-colors group">
                  <div className="w-8 h-8 rounded-full border border-heist-white/10 flex items-center justify-center group-hover:border-heist-red/40">
                    <Instagram className="w-4 h-4" />
                  </div>
                  @aeee.svce
                </a>
              </div>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-black font-display italic text-heist-red uppercase tracking-[0.2em] drop-shadow-[0_0_8px_rgba(226,35,26,0.3)]">
                OPERATIVES
              </h3>
              <div className="w-12 h-1 bg-heist-red" />
              <div className="space-y-8 text-sm font-heist">
                <div className="group">
                  <p className="text-heist-gold/40 text-[10px] uppercase mb-1 tracking-widest group-hover:text-heist-gold transition-colors">COORDINATOR</p>
                  <p className="text-white font-bold text-lg tracking-wide uppercase italic">THAMIZH</p>
                  <a href="tel:+919342597576" className="text-heist-silver/50 hover:text-heist-red transition-colors block mt-1">+91 93425 97576</a>
                </div>
                <div className="group">
                  <p className="text-heist-gold/40 text-[10px] uppercase mb-1 tracking-widest group-hover:text-heist-gold transition-colors">COORDINATOR</p>
                  <p className="text-white font-bold text-lg tracking-wide uppercase italic">NIMAL</p>
                  <a href="tel:+919500774210" className="text-heist-silver/50 hover:text-heist-red transition-colors block mt-1">+91 95007 74210</a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-heist-white/10 flex flex-col md:flex-row justify-between items-center gap-8 text-center md:text-left">
            <div className="space-y-2">
              <p className="text-heist-silver font-heist text-[11px] uppercase tracking-[0.5em] opacity-60">
                © 2026 PULSE. ALL RIGHTS RESERVED. NO ONE ESCAPES.
              </p>
              <p className="text-[9px] font-heist text-heist-red/40 tracking-[0.4em] uppercase">Auth_Node: 12.9853° N, 79.9698° E</p>
            </div>
            <div className="flex items-center gap-4 bg-heist-red/[0.03] border border-heist-red/10 px-6 py-3">
              <div className="w-2.5 h-2.5 bg-heist-red animate-ping rounded-full" />
              <p className="text-xs text-heist-gold font-display tracking-[0.5em] uppercase font-black">
                POWERED BY THE RESISTANCE
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}