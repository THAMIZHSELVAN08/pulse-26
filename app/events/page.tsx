'use client'

import Link from 'next/link'
import eventsData from '@/data/events.json'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { motion } from 'framer-motion'

export default function EventsPage() {
  // Map each event slug to its cover image in public/cover
  const coverMap: Record<string, string> = {
    'bid-to-build': '/cover/bidtobuild.jpg',
    'sail-the-circuit': '/cover/sailthecircuit.jpg',
    'electric-wordza': '/cover/wordza.jpg',
    'greek-eee-heist': '/cover/uknow.jpg',
    'project-presentation': '/cover/paper.jpg',
    battleship: '/cover/battleship.jpg',
  }

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-navy-950">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-orbitron">
            <span className="bg-gradient-to-r from-electric-300 to-cyan-300 bg-clip-text text-transparent">
              Events
            </span>
          </h1>
          <p className="text-gray-300 text-lg">Explore our exciting technical competitions</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {eventsData.events.map((event) => {
            const coverSrc = coverMap[event.slug] ?? event.poster

            return (
              <motion.div
                key={event.slug}
                initial={{ opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45 }}
              >
                <Card className="glass-card neon-border hover-glow overflow-hidden h-full transition-transform duration-300 hover:-translate-y-2">
                  <Link href={`/events/${event.slug}`} className="group block h-full">
                    <div className="flex gap-6 p-6">
                      <div className="h-32 w-32 shrink-0 rounded-lg overflow-hidden border border-electric-500/20 bg-navy-900/40 flex items-center justify-center">
                        <img
                          src={coverSrc}
                          alt={`${event.name} Cover`}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement
                            target.style.display = 'none'
                            target.parentElement!.innerHTML =
                              '<span class="text-xs text-gray-500 text-center px-1">Image</span>'
                          }}
                        />
                      </div>
                      <div className="min-w-0 flex-1 flex flex-col justify-between">
                        <div>
                          <CardHeader className="p-0 mb-3">
                            <CardTitle className="text-xl md:text-2xl text-white truncate font-orbitron tracking-wide">
                              {event.name}
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="p-0">
                            <p className="text-gray-400 line-clamp-2 text-sm">{event.description}</p>
                          </CardContent>
                        </div>
                        <div className="mt-4 text-electric-300 font-medium group-hover:text-electric-200 transition-colors flex items-center text-sm font-orbitron tracking-wider">
                          View Details <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
                        </div>
                      </div>
                    </div>
                  </Link>
                </Card>
              </motion.div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
