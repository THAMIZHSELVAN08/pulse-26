'use client'

import { useParams, notFound } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import BackToHome from '@/components/BackToHome'
import eventsData from '@/data/events.json'
import { Phone, Calendar, Clock, MapPin, Users, Target } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function EventDetailPage() {
  const params = useParams()
  const slug = params?.slug as string
  const event = eventsData.events.find((e) => e.slug === slug)

  if (!event) {
    notFound()
  }

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <BackToHome />

        {/* Event Poster */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12"
        >
          <Card className="glass neon-border">
            <CardContent className="p-8">
              <div className="relative aspect-[3/4] max-w-md mx-auto rounded-lg overflow-hidden shadow-lg">
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
                <div className="hidden w-full h-full flex items-center justify-center bg-dark-card/50">
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
          className="text-center mb-8"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
              {event.name}
            </span>
          </h1>
        </motion.div>

        {/* Event Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="glass neon-border">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Calendar className="w-5 h-5 text-neon-blue" />
                  <div>
                    <p className="text-sm text-gray-400">Date</p>
                    <p className="text-lg font-semibold text-white">{event.date}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
          
          {event.time && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Card className="glass neon-border">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-neon-blue" />
                    <div>
                      <p className="text-sm text-gray-400">Time</p>
                      <p className="text-lg font-semibold text-white">{event.time}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {event.venue && (
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
            >
              <Card className="glass neon-border">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-neon-blue" />
                    <div>
                      <p className="text-sm text-gray-400">Venue</p>
                      <p className="text-lg font-semibold text-white">{event.venue}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Card className="glass neon-border">
              <CardContent className="p-4">
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-neon-blue" />
                  <div>
                    <p className="text-sm text-gray-400">Team Size</p>
                    <p className="text-lg font-semibold text-white">
                      {event.rules?.find(rule => rule.includes('Teams of'))?.match(/\d+/)?.[0] || 'Varies'}
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
          <Card className="glass neon-border mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-neon-blue">Description</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-lg text-gray-300 leading-relaxed">
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
            <Card className="glass neon-border mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-neon-blue">Focus Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {event.focusAreas.map((area, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <Target className="w-4 h-4 text-neon-blue flex-shrink-0" />
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
            <Card className="glass neon-border mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-neon-blue">Benefits</CardTitle>
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
            <Card className="glass neon-border mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-neon-blue">Rounds</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {event.rounds.map((round, index) => (
                    <div
                      key={index}
                      className="border-l-4 border-neon-blue pl-4 py-2"
                    >
                      <h3 className="text-xl font-semibold text-white mb-1">
                        {round.name}
                      </h3>
                      <p className="text-gray-300">{round.description}</p>
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
            <Card className="glass neon-border mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-neon-blue">Rules</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {event.rules.map((rule, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <span className="text-neon-blue mt-1">•</span>
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
            <Card className="glass neon-border mb-8">
              <CardHeader>
                <CardTitle className="text-2xl font-bold text-neon-blue">Contact</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {event.contacts.map((contact, index) => (
                    <div
                      key={index}
                      className="flex items-center space-x-3"
                    >
                      <Phone className="w-5 h-5 text-neon-blue" />
                      <div>
                        <p className="text-white font-semibold">{contact.name}</p>
                        {contact.phone && (
                          <a
                            href={`tel:${contact.phone}`}
                            className="text-neon-blue hover:text-neon-cyan transition-colors"
                          >
                            {contact.phone}
                          </a>
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
          className="text-center"
        >
          <Button asChild size="lg" className="bg-gradient-to-r from-neon-blue to-neon-cyan text-dark-bg hover-glow">
            <Link href="/register">
              Register for {event.name}
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
