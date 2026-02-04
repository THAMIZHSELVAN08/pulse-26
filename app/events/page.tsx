'use client'

import Link from 'next/link'
import eventsData from '@/data/events.json'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'
import { Calendar, Users, Zap, ArrowRight, Sparkles } from 'lucide-react'

// Background component for atmospheric effects
function EventsBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated grid */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(45, 212, 191, 0.02) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(45, 212, 191, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px'
      }} />
      
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-20 -left-40 w-96 h-96 bg-electric-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 -right-40 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950" />
    </div>
  )
}

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

  // Event icons mapping
  const eventIcons: Record<string, string> = {
    'bid-to-build': '⚡',
    'sail-the-circuit': '🔌',
    'electric-wordza': '📝',
    'greek-eee-heist': '🧠',
    'project-presentation': '💡',
    battleship: '🚢',
  }

  return (
    <div className="min-h-screen bg-navy-950 relative">
      <EventsBackground />
      
      <div className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center mb-20"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-electric-500/10 border border-electric-500/20 mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-electric-400" />
              <span className="text-xs uppercase tracking-[0.3em] text-electric-300 font-orbitron font-medium">
                PULSE&apos;26 Events
              </span>
            </motion.div>

            {/* Title */}
            <h1 className="text-5xl md:text-7xl font-bold mb-6 font-orbitron tracking-tight">
              <span className="bg-gradient-to-r from-electric-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                Technical Events
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-sans">
              Dive into electrifying competitions designed to challenge your technical prowess and innovative thinking
            </p>

            {/* Decorative line */}
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 0.6, duration: 1 }}
              className="h-px bg-gradient-to-r from-transparent via-electric-500/50 to-transparent max-w-md mx-auto mt-8"
            />
          </motion.div>

          {/* Events Grid - 2x3 layout (2 columns, 3 rows) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {eventsData.events.map((event, index) => {
              const coverSrc = coverMap[event.slug] ?? event.poster
              const eventIcon = eventIcons[event.slug] ?? '⚡'

              return (
                <motion.div
                  key={event.slug}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    delay: index * 0.1,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="group h-full"
                >
                  <Card className="glass-card neon-border overflow-hidden h-full transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-electric-500/20 relative">
                    {/* Hover glow effect */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-electric-500/0 via-electric-500/10 to-cyan-500/0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl" />
                    
                    <div className="relative">
                      <Link href={`/events/${event.slug}`} className="block h-full">
                    <div className="flex gap-5 p-5">
                      {/* Image Section - Compact square on left */}
                      <div className="relative h-28 w-28 lg:h-32 lg:w-32 shrink-0 rounded-lg overflow-hidden border border-electric-500/20 bg-navy-900/60 flex items-center justify-center">
                        {/* Event Icon Badge */}
                        <motion.div
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          className="absolute top-2 left-2 z-20 w-8 h-8 rounded-lg bg-electric-500/90 backdrop-blur-sm flex items-center justify-center text-base shadow-lg shadow-electric-500/30 border border-white/10"
                        >
                          {eventIcon}
                        </motion.div>

                        {/* Image */}
                        <img
                          src={coverSrc}
                          alt={`${event.name} Cover`}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                            const parent = target.parentElement
                            if (parent) {
                              parent.innerHTML = `
                                <div class="w-full h-full flex items-center justify-center bg-gradient-to-br from-electric-500/20 to-cyan-500/20">
                                  <span class="text-4xl">${eventIcon}</span>
                                </div>
                              `
                            }
                          }}
                        />
                      </div>

                      {/* Content Section - Right side */}
                      <div className="min-w-0 flex-1 flex flex-col justify-between">
                        <div>
                          <CardHeader className="p-0 mb-2">
                            <CardTitle className="text-lg lg:text-xl text-white font-orbitron tracking-wide group-hover:text-electric-300 transition-colors duration-300">
                              {event.name}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="p-0">
                            <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 font-sans">
                              {event.description}
                            </p>
                          </CardContent>
                        </div>

                        {/* Action footer */}
                        <div className="mt-3 pt-3 border-t border-electric-500/10 flex items-center justify-between">
                          <div className="flex items-center gap-2 text-xs text-gray-500">
                            <Zap className="w-3.5 h-3.5 text-electric-400/70" />
                            <span className="uppercase tracking-wider font-orbitron">Technical</span>
                          </div>
                          
                          <motion.div 
                            className="flex items-center gap-2 text-electric-300 font-medium text-sm font-orbitron tracking-wider"
                            whileHover={{ x: 5 }}
                            transition={{ duration: 0.2 }}
                          >
                            Explore
                            <ArrowRight className="w-4 h-4" />
                          </motion.div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </div>
              </Card>
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
            <div className="glass-card neon-border rounded-2xl p-8 md:p-12 max-w-3xl mx-auto relative overflow-hidden">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-br from-electric-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
              
              <div className="relative space-y-6">
                <h2 className="text-2xl md:text-3xl font-orbitron text-gradient">
                  Ready to Compete?
                </h2>
                <p className="text-gray-400 text-sm md:text-base max-w-xl mx-auto font-sans">
                  Register now for PULSE&apos;26 and showcase your technical expertise across multiple challenging events
                </p>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/register"
                    className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-electric-600 to-cyan-600 hover:from-electric-500 hover:to-cyan-500 text-white rounded-lg font-orbitron tracking-wider shadow-lg shadow-electric-500/30 hover:shadow-xl hover:shadow-electric-500/50 transition-all duration-300"
                  >
                    Register Now
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  )
}