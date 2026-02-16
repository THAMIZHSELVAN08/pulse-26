'use client'

import { useParams, notFound } from 'next/navigation'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import BackToEvents from '@/components/BackToEvents'
import eventsData from '@/data/events.json'
import { Phone, Calendar, Clock, MapPin, Users, Target, Award, Zap, ArrowRight, Activity, X } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import CircuitBackground from '@/components/CircuitBackground'
import ScrambleText from '@/components/ScrambleText'
import HUDBrackets from '@/components/HUDBrackets'
import { Event } from '@/types/events'

function getTeamSize(rules?: string[]) {
  if (!rules || rules.length === 0) return 'Varies'
  const text = rules.join(' ')

  const m1 = text.match(/Teams?\s+of\s+(\d+\s*-\s*\d+|\d+)/i)
  if (m1?.[1]) return m1[1].replace(/\s+/g, '')

  const m2 = text.match(/Teams?\s+must\s+consist\s+of\s+(\d+)/i)
  if (m2?.[1]) return m2[1]

  return 'Varies'
}

export default function EventDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const event = eventsData.events.find((e) => e.slug === slug) as unknown as Event
  const { scrollY } = useScroll()
  const posterY = useTransform(scrollY, [0, 300], [0, -50])

  if (!event) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-heist-black text-heist-white relative overflow-x-hidden">
      <CircuitBackground />

      {/* Red ambient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-heist-red/5 via-transparent to-transparent pointer-events-none" />

      {/* CRT Flicker Overlay */}
      <div className="fixed inset-0 pointer-events-none z-[60] bg-[rgba(18,16,16,0)] opacity-[0.03] animate-[flicker_0.15s_infinite]" />

      <div className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <BackToEvents />

          {/* Hero Section with Poster */}
          <div className="grid lg:grid-cols-2 gap-16 mb-24 items-start">
            {/* Event Poster */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="sticky top-32"
            >
              <HUDBrackets className="group">
                <div className="relative p-2 bg-gradient-to-br from-heist-charcoal/80 to-heist-black/95 backdrop-blur-md border border-heist-white/10 shadow-3xl overflow-hidden group-hover:border-heist-red/40 transition-all duration-500">
                  {/* High-Tech Overlays */}
                  <div className="absolute inset-0 bg-blueprint opacity-[0.05] pointer-events-none" />

                  {/* Tape Accent */}
                  <div className="absolute -top-6 left-1/2 transform -translate-x-1/2 w-48 h-12 bg-heist-red/20 rotate-[-2deg] backdrop-blur-md z-40 border-b-2 border-heist-red/40 flex items-center justify-center shadow-lg">
                    <span className="text-[11px] text-heist-red font-black uppercase tracking-[0.5em] font-heist">CLASSIFIED_FILE</span>
                  </div>

                  <div className="relative aspect-[3/4] overflow-hidden border border-heist-black/50 mt-4 mx-4 mb-4">
                    <img
                      src={event.poster}
                      alt={event.name}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-100 group-hover:scale-105"
                    />
                    {/* Scanning Line */}
                    <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-30">
                      <div className="absolute top-0 left-0 w-full h-[3px] bg-heist-red shadow-[0_0_30px_#E2231A] animate-[scan_4s_linear_infinite]" />
                    </div>
                  </div>

                  {/* Corner Bits */}
                  <div className="absolute bottom-4 left-4 flex gap-2">
                    <div className="w-2 h-2 bg-heist-red animate-pulse" />
                    <div className="w-2 h-2 bg-heist-red/40" />
                    <div className="w-2 h-2 bg-heist-red/10" />
                  </div>
                </div>
              </HUDBrackets>
            </motion.div>

            {/* Event Title and Quick Info */}
            <div className="space-y-12">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                {/* Tech Metadata Header */}
                <div className="flex items-center gap-6 mb-8">
                  <div className="h-[1px] w-12 bg-heist-red" />
                  <div className="flex items-center gap-3">
                    <Activity className="w-4 h-4 text-heist-red animate-pulse" />
                    <span className="text-[10px] font-heist text-heist-silver/40 uppercase tracking-[0.4em]">INIT_BREACH_SEQUENCE_v.26</span>
                  </div>
                </div>

                {/* Badge */}
                <div className="inline-flex items-center gap-3 px-8 py-3 bg-heist-red/10 border-2 border-heist-red/30 mb-8 relative group overflow-hidden">
                  <div className="absolute inset-0 bg-heist-red/5 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                  <Target className="w-5 h-5 text-heist-red relative z-10" />
                  <span className="text-sm uppercase tracking-[0.4em] text-white font-black font-heist relative z-10">
                    TARGET_ACQUIRED
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-6xl md:text-8xl font-black mb-10 font-display uppercase italic tracking-tighter text-white leading-tight drop-shadow-2xl">
                  <span className="text-heist-red block"><ScrambleText text={event.name.split(' ')[0]} /></span>
                  <span className="text-heist-silver/90">{event.name.split(' ').slice(1).join(' ')}</span>
                </h1>

                {/* Quick Stats Grid */}
                <div className="grid grid-cols-2 gap-6 mb-12">
                  {[
                    { icon: Calendar, label: "DATE_STAMP", value: event.date },
                    { icon: Clock, label: "EXECUTION_TIME", value: event.time || 'TBA' },
                    { icon: MapPin, label: "COORDINATES", value: event.venue || 'TBA' },
                    { icon: Users, label: "SQUAD_SIZE", value: getTeamSize(event.rules) }
                  ].map((stat, i) => (
                    <motion.div
                      key={i}
                      whileHover={{ scale: 1.02, x: 8 }}
                      className="bg-heist-charcoal/40 backdrop-blur-md border border-white/5 p-6 relative group transition-all"
                    >
                      <div className="absolute left-0 top-0 w-[2px] h-0 bg-heist-red group-hover:h-full transition-all duration-300" />
                      <div className="flex items-center gap-5">
                        <div className="w-12 h-12 bg-heist-black/50 border border-white/10 flex items-center justify-center group-hover:border-heist-red transition-colors">
                          <stat.icon className="w-6 h-6 text-heist-red group-hover:scale-110 transition-transform" />
                        </div>
                        <div>
                          <p className="text-[9px] text-heist-silver/30 uppercase tracking-[0.3em] font-heist mb-1">{stat.label}</p>
                          <p className="text-lg font-black text-white font-display tracking-wide uppercase italic">{stat.value}</p>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Main Action Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="pt-4"
                >
                  <Button asChild size="lg" className="w-full bg-heist-red hover:bg-heist-darkRed text-white py-14 text-3xl rounded-none font-display font-black tracking-[0.3em] uppercase transition-all border-4 border-heist-red shadow-[15px_15px_0_rgba(226,35,26,0.2)] hover:shadow-none hover:translate-x-[8px] hover:translate-y-[8px] group relative overflow-hidden btn-heist-glitch">
                    <Link href="/register" className="flex items-center justify-center gap-6 relative z-10">
                      INITIATE BREACH
                      <ArrowRight className="w-8 h-8 group-hover:translate-x-4 transition-transform" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Full Description Dossier */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="mb-24"
          >
            <div className="bg-gradient-to-br from-heist-white to-heist-silver p-10 md:p-20 border-l-[16px] border-heist-red relative shadow-[30px_30px_0_rgba(0,0,0,0.5)] group overflow-hidden">
              {/* Dossier Background Texture */}
              <div className="absolute inset-0 bg-blueprint opacity-[0.03] pointer-events-none mix-blend-multiply" />

              <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                <Target className="w-64 h-64 text-heist-black" />
              </div>

              <div className="relative z-10 space-y-12">
                <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 border-b-4 border-heist-black/10 pb-12">
                  <div className="space-y-4">
                    <div className="inline-flex items-center gap-4 bg-heist-black px-6 py-2">
                      <span className="text-heist-red font-black font-display text-xl italic tracking-[0.2em]">FILE//DOSSIER</span>
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black font-display uppercase italic text-heist-black tracking-tighter">
                      MISSION BRIEFING
                    </h2>
                  </div>
                  <div className="text-right hidden md:block">
                    <p className="text-heist-black/40 font-heist text-[10px] tracking-[0.4em] uppercase mb-1">Authorization_Required</p>
                    <p className="text-heist-red font-black font-heist text-base uppercase">OMEGA_LEVEL_SECURITY</p>
                  </div>
                </div>

                <div className="max-w-4xl">
                  <p className="text-2xl md:text-3xl text-heist-black font-heist font-bold leading-relaxed tracking-tight italic">
                    {event.fullDescription}
                  </p>
                </div>

                <div className="pt-12 flex flex-wrap gap-12 text-[11px] font-heist text-heist-black/60 font-bold uppercase tracking-[0.3em] border-t-2 border-heist-black/5">
                  <div className="flex items-center gap-3">
                    <span className="text-heist-red">[ASSET_ID]</span>
                    <span>EEE_REV_26_{event.slug.toUpperCase()}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-heist-red">[CLEARANCE]</span>
                    <span>RESTRICTED_ACCESS</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-heist-red">[LOC_STAMP]</span>
                    <span>SVCE_MAIN_RESERVE</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Focus Areas */}
          {event.focusAreas && event.focusAreas.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <h2 className="text-3xl font-black font-display uppercase italic text-white mb-6">
                TARGET <span className="text-heist-red">AREAS</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {event.focusAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 bg-heist-charcoal p-4 border-l-4 border-heist-red"
                  >
                    <Target className="w-5 h-5 text-heist-red" />
                    <span className="text-heist-silver font-heist uppercase text-sm">{area}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}

          {/* Benefits */}
          {event.benefits && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <div className="bg-heist-charcoal/90 backdrop-blur-md border-2 border-heist-gold/40 p-10 relative overflow-hidden group shadow-[0_0_40px_rgba(255,215,0,0.1)]">
                <div className="absolute top-0 right-0 w-48 h-48 bg-heist-gold/20 rounded-full blur-[60px] animate-pulse" />
                <div className="absolute -top-10 -right-10 text-[120px] font-display font-black text-heist-gold/5 rotate-12 select-none group-hover:rotate-0 transition-transform duration-1000">REWARD</div>
                <h2 className="text-4xl font-black font-display uppercase italic text-heist-gold mb-8 flex items-center gap-4 relative z-10">
                  <Award className="w-10 h-10 animate-bounce" />
                  <span className="tracking-[0.2em]">THE PAYOUT</span>
                </h2>
                <div className="relative z-10 bg-heist-black/40 border-l-4 border-heist-gold p-6">
                  <p className="text-xl md:text-2xl text-heist-silver leading-relaxed font-heist italic tracking-wide">"{event.benefits}"</p>
                </div>
                <div className="mt-8 flex gap-2 relative z-10">
                  {[1, 2, 3].map(i => <div key={i} className="w-8 h-2 bg-heist-gold/30 animate-pulse" />)}
                </div>
              </div>
            </motion.div>
          )}

          {/* Rounds & Rules Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Rounds */}
            {event.rounds && event.rounds.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-black font-display uppercase italic text-white mb-6">
                  OPERATION <span className="text-heist-red">STAGES</span>
                </h2>
                <div className="space-y-6">
                  {event.rounds.map((round, index) => (
                    <div key={index} className="relative pl-8">
                      {/* Connector */}
                      {index < event.rounds!.length - 1 && (
                        <div className="absolute left-[11px] top-8 bottom-0 w-0.5 bg-heist-red/30" />
                      )}
                      {/* Badge */}
                      <div className="absolute left-0 top-1 w-6 h-6 bg-heist-red flex items-center justify-center text-white font-bold text-xs font-heist border-2 border-heist-black">
                        {index + 1}
                      </div>

                      <div className="bg-heist-charcoal p-5 border border-heist-white/10 hover:border-heist-red transition-colors">
                        <h3 className="text-lg font-bold text-white mb-2 font-display uppercase tracking-wider">
                          {round.name}
                        </h3>
                        <p className="text-heist-silver text-sm font-heist">{round.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Rules */}
            {event.rules && event.rules.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-black font-display uppercase italic text-white mb-6">
                  <span className="text-heist-red">PROTOCOL</span>
                </h2>
                <div className="bg-heist-black border-2 border-heist-red p-6 shadow-[8px_8px_0_rgba(179,0,0,0.2)]">
                  <ul className="space-y-4">
                    {event.rules.map((rule, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <div className="mt-1.5 w-1.5 h-1.5 bg-heist-red rounded-full flex-shrink-0" />
                        <span className="text-heist-silver font-heist text-sm">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            )}
          </div>

          {/* Contact */}
          {event.contacts && event.contacts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mt-16 mb-12"
            >
              <h2 className="text-3xl font-black font-display uppercase italic text-white mb-6 text-center">
                FIELD <span className="text-heist-red">AGENTS</span>
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {event.contacts.map((contact, index) => (
                  <div key={index} className="bg-heist-charcoal border border-heist-white/10 p-5 flex items-center gap-4 group hover:border-heist-red transition-colors">
                    <div className="w-10 h-10 bg-heist-black border border-heist-red flex items-center justify-center text-heist-red group-hover:bg-heist-red group-hover:text-white transition-colors">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-white font-bold font-display uppercase tracking-widest">{contact.name}</p>
                      {contact.phone && <p className="text-heist-silver text-sm font-heist">{contact.phone}</p>}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  )
}