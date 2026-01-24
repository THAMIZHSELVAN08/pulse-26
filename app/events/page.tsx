'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import BackToHome from '@/components/BackToHome'
import eventsData from '@/data/events.json'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function EventsPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <BackToHome />
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
              Events
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Explore our exciting technical competitions
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {eventsData.events.map((event, index) => (
            <motion.div
              key={event.slug}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Card className="glass neon-border hover-glow transition-all h-full flex flex-col">
                <CardHeader className="pb-4">
                  <div className="relative h-48 bg-gradient-to-br from-neon-blue/20 to-neon-cyan/20 rounded-lg overflow-hidden mb-4">
                    <img
                      src={event.poster}
                      alt={`${event.name} Poster`}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        target.nextElementSibling?.classList.remove('hidden');
                      }}
                    />
                    <div className="hidden w-full h-full flex items-center justify-center bg-dark-card/50">
                      <p className="text-gray-400 text-sm text-center px-4">
                        Event Poster
                        <br />
                        <span className="text-xs">({event.name})</span>
                      </p>
                    </div>
                  </div>
                  <CardTitle className="text-2xl font-bold text-neon-blue">
                    {event.name}
                  </CardTitle>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col">
                  <CardDescription className="text-gray-300 mb-4 line-clamp-2 flex-1">
                    {event.description}
                  </CardDescription>
                  <Button asChild variant="outline" className="w-full border-neon-blue text-neon-blue hover:bg-neon-blue hover:text-dark-bg">
                    <Link href={`/events/${event.slug}`}>
                      For Details
                      <span className="ml-2">→</span>
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
