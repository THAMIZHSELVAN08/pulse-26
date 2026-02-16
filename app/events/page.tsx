'use client'

import Link from 'next/link'
import Image from 'next/image'
import eventsData from '@/data/events.json'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Calendar, Zap, ArrowRight, Target, AlertTriangle } from 'lucide-react'
import CircuitBackground from '@/components/CircuitBackground'
import ScrambleText from '@/components/ScrambleText'
import HUDBrackets from '@/components/HUDBrackets'

export default function EventsPage() {
  // Map each event slug to its cover image in public/cover
  const coverMap: Record<string, string> = {
    'bid-to-build': '/cover/bidtobuild.jpg',
    'sail-the-circuit': '/cover/sailthecircuit.jpg',
    'electric-wordza': '/cover/wordza.jpg',
    'greek-eee-heist': '/cover/uknow.jpg',
    'project-presentation': '/cover/paper.png',
    battleship: '/cover/battleship.jpg',
  }

  // Event icons mapping - Heist Themed
  const eventIcons: Record<string, string> = {
    'bid-to-build': '🔨',
    'sail-the-circuit': '🔌',
    'electric-wordza': '🧩',
    'greek-eee-heist': '💰',
    'project-presentation': '📋',
    battleship: '💣',
  }

  function getTeamSize(rules?: string[]) {
    if (!rules || rules.length === 0) return 'Varies'
    const text = rules.join(' ')
    const m1 = text.match(/Teams?\s+of\s+(\d+\s*-\s*\d+|\d+)/i)
    if (m1?.[1]) return m1[1].replace(/\s+/g, '')
    const m2 = text.match(/Teams?\s+must\s+consist\s+of\s+(\d+)/i)
    if (m2?.[1]) return m2[1]
    return '1-3'
  }

  return (
    <div className="min-h-screen bg-heist-black text-heist-white relative overflow-x-hidden">
      <CircuitBackground />

      {/* Red ambient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-heist-red/5 via-transparent to-transparent pointer-events-none" />

      {/* CRT Flicker Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[60] bg-[rgba(18,16,16,0)] opacity-[0.03] animate-[flicker_0.15s_infinite]" />

      <div className="relative z-10 py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20 relative px-4"
          >
            {/* Terminal Decorations */}
            <div className="absolute top-0 left-0 w-full flex justify-between px-10 opacity-40 pointer-events-none hidden md:flex">
              <div className="text-[10px] font-heist text-heist-red uppercase tracking-[0.5em] leading-relaxed">
                <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 2, repeat: Infinity }}>
                  SYS_STATUS: OPTIMAL<br />
                  ENC_LEVEL: 4096-RSA<br />
                  SIGNAL: ENCRYPTED_STABLE
                </motion.div>
              </div>
              <div className="text-[10px] font-heist text-heist-silver uppercase tracking-[0.5em] text-right leading-relaxed">
                <motion.div animate={{ opacity: [0.4, 1, 0.4] }} transition={{ duration: 3, repeat: Infinity }}>
                  PLAN_ROME: ACTIVE<br />
                  NODE: 12.9853° N, 79.9698° E<br />
                  SYST: BELLA_CIAO_v2.0
                </motion.div>
              </div>
            </div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-3 px-8 py-3 bg-heist-red/10 border-2 border-heist-red/50 mb-10 relative overflow-hidden group shadow-[0_0_30px_rgba(226,35,26,0.2)]"
            >
              <div className="absolute inset-0 bg-heist-red/5 animate-pulse" />
              <Target className="w-5 h-5 text-heist-red relative z-10 animate-[spin_4s_linear_infinite]" />
              <span className="text-sm uppercase tracking-[0.4em] text-white font-heist font-black relative z-10">
                ROYAL_MINT_RESERVES
              </span>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 border-b-2 border-r-2 border-heist-red z-20" />
            </motion.div>

            {/* Title */}
            <h1 className="text-6xl md:text-9xl font-black mb-8 font-display uppercase italic tracking-tighter text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              <span className="text-chromatic"><ScrambleText text="MISSION" className="inline" /></span> <span className="text-heist-red">OVERVIEW</span>
            </h1>

            {/* Subtitle */}
            <div className="max-w-2xl mx-auto space-y-4">
              <p className="text-heist-silver text-lg md:text-xl leading-relaxed font-heist uppercase tracking-[0.3em]">
                Review the tactical operations. Choose your role. Execute with extreme precision.
              </p>
              <div className="flex items-center justify-center gap-6 text-heist-red/40 text-[10px] font-heist uppercase tracking-[0.4em]">
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-heist-red rounded-full animate-pulse" />
                  Live Feed Stable
                </span>
                <span className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-heist-gold rounded-full animate-pulse" />
                  SVCE_HQ Infiltration Open
                </span>
              </div>
            </div>

            {/* Decorative line */}
            <div className="flex items-center justify-center gap-6 mt-12">
              <div className="h-[2px] w-32 bg-gradient-to-r from-transparent via-heist-red to-transparent" />
              <div className="w-3 h-3 border-2 border-heist-red rotate-45 animate-spin-slow" />
              <div className="h-[2px] w-32 bg-gradient-to-l from-transparent via-heist-red to-transparent" />
            </div>
          </motion.div>

          {/* Events Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {eventsData.events.map((event, index) => {
              const coverSrc = coverMap[event.slug] ?? event.poster
              const eventIcon = eventIcons[event.slug] ?? '⚡'

              return (
                <motion.div
                  key={event.slug}
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                  }}
                  className="group"
                >
                  <Link href={`/events/${event.slug}`} className="block h-full">
                    <HUDBrackets className="h-full">
                      <div className="bg-gradient-to-br from-heist-charcoal/80 to-heist-black/95 backdrop-blur-md border border-heist-white/10 p-1 relative overflow-hidden group-hover:border-heist-red/40 transition-all duration-500 shadow-2xl h-full">

                        {/* High-Tech Overlays */}
                        <div className="absolute inset-0 bg-blueprint opacity-[0.05] pointer-events-none" />

                        <div className="p-8 space-y-8 relative z-10">
                          {/* Event Poster Area */}
                          <div className="relative aspect-video overflow-hidden border border-heist-white/10 group-hover:border-heist-red/30 transition-colors duration-500">
                            <div className="absolute inset-0 bg-heist-red/10 mix-blend-overlay z-10" />
                            <Image
                              src={coverSrc}
                              alt={event.name}
                              fill
                              className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-110"
                            />
                            {/* Scanning Line */}
                            <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                              <div className="absolute top-0 left-0 w-full h-[2px] bg-heist-red shadow-[0_0_15px_#E2231A] animate-[scan_3s_linear_infinite]" />
                            </div>

                            {/* Prize Pool Tag */}
                            <div className="absolute top-4 left-4 z-30">
                              <div className="bg-heist-gold text-black text-[10px] font-display font-black px-4 py-1.5 uppercase tracking-[0.2em] shadow-xl italic rotate-[-2deg]">
                                PRIZE: LAKHS_WORTH
                              </div>
                            </div>
                          </div>

                          {/* Event info */}
                          <div className="space-y-6">
                            <div className="space-y-2">
                              <div className="flex items-center gap-3">
                                <span className="text-heist-red text-2xl group-hover:animate-pulse">{eventIcon}</span>
                                <div className="h-[1px] flex-1 bg-gradient-to-r from-heist-red/40 to-transparent" />
                                <span className="text-[10px] font-heist text-heist-silver/40 uppercase tracking-[0.4em]">INITIATED_v2.0</span>
                              </div>
                              <h3 className="text-3xl md:text-5xl font-black font-display text-white uppercase italic tracking-tight group-hover:text-heist-red transition-all duration-300">
                                {event.name}
                              </h3>
                            </div>

                            <p className="text-heist-silver/80 font-heist text-sm leading-relaxed line-clamp-3 group-hover:text-heist-white transition-colors">
                              {event.description}
                            </p>

                            <div className="pt-6 border-t border-heist-white/5 flex items-center justify-between">
                              <div className="flex items-center gap-6">
                                <div className="flex flex-col">
                                  <span className="text-[8px] text-heist-silver/30 uppercase tracking-widest mb-1">Status</span>
                                  <div className="text-heist-red text-[10px] font-heist font-black uppercase tracking-widest flex items-center gap-2">
                                    <div className="w-1.5 h-1.5 bg-heist-red rounded-full animate-ping" />
                                    OPERATIONAL
                                  </div>
                                </div>
                                <div className="flex flex-col">
                                  <span className="text-[8px] text-heist-silver/30 uppercase tracking-widest mb-1">Squad</span>
                                  <span className="text-white text-[10px] font-heist font-black uppercase tracking-widest">
                                    {getTeamSize(event.rules)} OPERATIVES
                                  </span>
                                </div>
                              </div>
                              <div className="w-12 h-12 bg-heist-red/10 border border-heist-red/30 flex items-center justify-center group-hover:bg-heist-red group-hover:text-white transition-all transform group-hover:rotate-45">
                                <ArrowRight className="w-6 h-6 transform group-hover:-rotate-45 transition-transform" />
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Corner Accents */}
                        <div className="absolute top-2 left-2 w-8 h-8 border-t border-l border-heist-white/10 group-hover:border-heist-red/40" />
                        <div className="absolute bottom-2 right-2 w-8 h-8 border-b border-r border-heist-white/10 group-hover:border-heist-gold/40" />
                      </div>
                    </HUDBrackets>
                  </Link>
                </motion.div>
              )
            })}
          </div>

          {/* Call to action section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="mt-20 text-center"
          >
            <div className="bg-heist-black border-2 border-heist-white/10 p-12 max-w-4xl mx-auto relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-heist-red" />
              <div className="absolute bottom-0 right-0 w-full h-1 bg-heist-red" />

              <div className="relative space-y-8">
                <h2 className="text-4xl md:text-5xl font-black font-display uppercase italic text-white">
                  ARE YOU <span className="text-heist-red">READY?</span>
                </h2>
                <p className="text-heist-silver max-w-xl mx-auto font-heist tracking-[0.3em] uppercase mb-8">
                  The plan is set. The targets are identified. Join the team.
                </p>

                <Link
                  href="/register"
                  className="inline-flex items-center gap-3 px-10 py-5 bg-heist-red hover:bg-heist-darkRed text-white text-xl font-display tracking-[0.3em] uppercase transition-all shadow-[8px_8px_0_rgba(179,0,0,0.4)] hover:shadow-none hover:translate-x-[4px] hover:translate-y-[4px] border-2 border-heist-red btn-heist-glitch"
                >
                  JOIN THE RESISTANCE
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}