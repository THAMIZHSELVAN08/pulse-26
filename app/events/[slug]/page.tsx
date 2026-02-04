'use client'

import { useParams, notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import BackToEvents from '@/components/BackToEvents'
import eventsData from '@/data/events.json'
import { Phone, Calendar, Clock, MapPin, Users, Target } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

function getTeamSize(rules?: string[]) {
  if (!rules || rules.length === 0) return 'Varies'
  const text = rules.join(' ')

  const m1 = text.match(/Teams?\s+of\s+(\d+\s*-\s*\d+|\d+)/i)
  if (m1?.[1]) return m1[1].replace(/\s+/g, '')

  const m2 = text.match(/Teams?\s+must\s+consist\s+of\s+(\d+)/i)
  if (m2?.[1]) return m2[1]

  return 'Varies'
}

import { Event } from '@/types/events'

export default function EventDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const event = eventsData.events.find((e) => e.slug === slug) as unknown as Event

  if (!event) {
    notFound()
  }

  return (
    <div className="min-h-screen py-24 px-4 sm:px-6 lg:px-8 bg-navy-950">
      <div className="max-w-5xl mx-auto">
        <BackToEvents />

        {/* Event Poster */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Card className="glass-card overflow-hidden">
            <CardContent className="p-8">
              <div className="relative aspect-[3/4] max-w-md mx-auto rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={event.poster}
                  alt={`${event.name} Poster`}
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-full items-center justify-center bg-gray-900/50">
                  <p className="text-gray-400 text-center px-8">
                    {event.name} Poster
                    <br />
                    <span className="text-sm">(Add poster image)</span>
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Event Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 font-orbitron">
            <span className="text-gradient">
              {event.name}
            </span>
          </h1>
        </motion.div>

        {/* Event Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="glass-card h-full">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 text-electric-400" />
                  <div>
                    <p className="text-sm text-gray-400">Date</p>
                    <p className="text-lg font-semibold text-white">{event.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <Card className="glass-card h-full">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-electric-400" />
                  <div>
                    <p className="text-sm text-gray-400">Time</p>
                    <p className="text-lg font-semibold text-white">{event.time || 'TBA'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5 }}
          >
            <Card className="glass-card h-full">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 text-electric-400" />
                  <div>
                    <p className="text-sm text-gray-400">Venue</p>
                    <p className="text-lg font-semibold text-white">{event.venue || '-'}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="glass-card h-full">
              <CardContent className="p-6">
                <div className="flex items-center space-x-3">
                  <Users className="w-6 h-6 text-electric-400" />
                  <div>
                    <p className="text-sm text-gray-400">Team Size</p>
                    <p className="text-lg font-semibold text-white">
                      {getTeamSize(event.rules)}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
        >
          <Card className="glass-card mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-electric-400 font-orbitron tracking-wide">Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-300 leading-relaxed font-light">
                {event.fullDescription}
              </p>
            </CardContent>
          </Card>
        </motion.div>

        {/* Focus Areas */}
        {event.focusAreas && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
          >
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-electric-400 font-orbitron tracking-wide">Focus Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {event.focusAreas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg border border-white/5">
                      <Target className="w-4 h-4 text-electric-400 flex-shrink-0" />
                      <span className="text-gray-300">{area}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Benefits */}
        {event.benefits && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
          >
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-electric-400 font-orbitron tracking-wide">Benefits</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-lg text-gray-300">{event.benefits}</p>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Rounds */}
        {event.rounds && event.rounds.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
          >
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-electric-400 font-orbitron tracking-wide">Rounds</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {event.rounds.map((round, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-electric-500 pl-6 py-2"
                    >
                      <h3 className="text-xl font-semibold text-white mb-2 font-orbitron tracking-wide">
                        {round.name}
                      </h3>
                      <p className="text-gray-300 font-light">{round.description}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Rules */}
        {event.rules && event.rules.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
          >
            <Card className="glass-card mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-electric-400 font-orbitron tracking-wide">Rules</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {event.rules.map((rule, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-electric-400 mt-1.5 h-1.5 w-1.5 rounded-full bg-electric-400 flex-shrink-0" />
                      <span className="text-gray-300">{rule}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Contact */}
        {event.contacts && event.contacts.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
          >
            <Card className="glass-card mb-12">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-electric-400 font-orbitron tracking-wide">Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {event.contacts.map((contact, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-4 bg-white/5 p-4 rounded-xl border border-white/5"
                    >
                      <div className="bg-electric-500/10 p-3 rounded-full">
                        <Phone className="w-5 h-5 text-electric-400" />
                      </div>
                      <div>
                        <p className="text-white font-semibold">{contact.name}</p>
                        {/* {contact.phone && (
                          <a
                            href={`tel:${contact.phone}`}
                            className="text-electric-300 hover:text-electric-200 transition-colors text-sm"
                          >
                            {contact.phone}
                          </a>
                        )} */}
                        {contact.phone && (
                          <p className="text-gray-400 text-sm">{contact.phone}</p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Register Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.3 }}
          className="text-center pb-12"
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-electric-600 to-cyan-600 hover:from-electric-500 hover:to-cyan-500 text-white shadow-lg shadow-electric-500/20 px-8 py-6 text-lg rounded-full font-orbitron tracking-wide">
            <Link href="/register">
              Register for {event.name}
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
