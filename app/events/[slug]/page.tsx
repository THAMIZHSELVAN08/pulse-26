'use client'

import { useParams, notFound } from 'next/navigation'
import { motion, useScroll, useTransform } from 'framer-motion'
import Link from 'next/link'
import BackToEvents from '@/components/BackToEvents'
import eventsData from '@/data/events.json'
import { Phone, Calendar, Clock, MapPin, Users, Target, Award, Zap, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react'
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

// Background component for atmospheric effects
function DetailBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-30" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(45, 212, 191, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(45, 212, 191, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '40px 40px'
      }} />
      
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-40 -left-40 w-96 h-96 bg-electric-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 80, 0],
          y: [0, 40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-40 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -80, 0],
          y: [0, -40, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950" />
    </div>
  )
}

import { Event } from '@/types/events'

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
    <div className="min-h-screen bg-navy-950 relative">
      <DetailBackground />
      
      <div className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <BackToEvents />

          {/* Hero Section with Poster */}
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            {/* Event Poster */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              style={{ y: posterY }}
            >
              <div className="relative group">
                {/* Glow effect */}
                <div className="absolute -inset-4 bg-gradient-to-r from-electric-500/20 via-cyan-500/20 to-teal-500/20 rounded-2xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <Card className="glass-card neon-border overflow-hidden relative">
                  <CardContent className="p-6">
                    <div className="relative aspect-[3/4] rounded-xl overflow-hidden shadow-2xl shadow-electric-500/20">
                      <img
                        src={event.poster}
                        alt={`${event.name} Poster`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = 'none';
                          target.nextElementSibling?.classList.remove('hidden');
                        }}
                      />
                      <div className="hidden w-full h-full items-center justify-center bg-gradient-to-br from-electric-500/20 to-cyan-500/20">
                        <div className="text-center px-8">
                          <Sparkles className="w-16 h-16 mx-auto mb-4 text-electric-400" />
                          <p className="text-gray-400 text-lg font-orbitron">
                            {event.name}
                          </p>
                        </div>
                      </div>
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-navy-950/80 via-transparent to-transparent pointer-events-none" />
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>

            {/* Event Title and Quick Info */}
            <div className="flex flex-col justify-center space-y-8">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Badge */}
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-electric-500/10 border border-electric-500/20 mb-4">
                  <Zap className="w-4 h-4 text-electric-400" />
                  <span className="text-xs uppercase tracking-[0.25em] text-electric-300 font-orbitron font-medium">
                    Technical Event
                  </span>
                </div>

                {/* Title */}
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-orbitron tracking-tight">
                  <span className="text-gradient">
                    {event.name}
                  </span>
                </h1>

                {/* Description preview */}
                <p className="text-lg text-gray-300 leading-relaxed mb-8 font-sans">
                  {event.description}
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="glass-card rounded-xl p-4 border border-electric-500/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-electric-500/10 flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-electric-400" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-orbitron">Date</p>
                        <p className="text-sm font-semibold text-white">{event.date}</p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card rounded-xl p-4 border border-electric-500/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-electric-500/10 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-electric-400" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-orbitron">Time</p>
                        <p className="text-sm font-semibold text-white">{event.time || 'TBA'}</p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card rounded-xl p-4 border border-electric-500/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-electric-500/10 flex items-center justify-center">
                        <MapPin className="w-5 h-5 text-electric-400" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-orbitron">Venue</p>
                        <p className="text-sm font-semibold text-white">{event.venue || 'TBA'}</p>
                      </div>
                    </div>
                  </div>

                  <div className="glass-card rounded-xl p-4 border border-electric-500/10">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-electric-500/10 flex items-center justify-center">
                        <Users className="w-5 h-5 text-electric-400" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 uppercase tracking-wider font-orbitron">Team</p>
                        <p className="text-sm font-semibold text-white">
                          {getTeamSize(event.rules)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* CTA Button */}
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-8"
                >
                  <Button asChild size="lg" className="w-full bg-gradient-to-r from-electric-600 to-cyan-600 hover:from-electric-500 hover:to-cyan-500 text-white shadow-lg shadow-electric-500/30 hover:shadow-xl hover:shadow-electric-500/50 px-8 py-6 text-base rounded-xl font-orbitron tracking-wider transition-all duration-300">
                    <Link href="/register" className="flex items-center justify-center gap-2">
                      Register Now
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>

          {/* Full Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Card className="glass-card neon-border">
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-1 h-8 bg-gradient-to-b from-electric-400 to-cyan-400 rounded-full" />
                  <CardTitle className="text-2xl md:text-3xl font-bold text-white font-orbitron tracking-wide">
                    About This Event
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-base md:text-lg text-gray-300 leading-relaxed font-sans">
                  {event.fullDescription}
                </p>
              </CardContent>
            </Card>
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
              <Card className="glass-card neon-border">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-1 h-8 bg-gradient-to-b from-electric-400 to-cyan-400 rounded-full" />
                    <CardTitle className="text-2xl md:text-3xl font-bold text-white font-orbitron tracking-wide">
                      Focus Areas
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {event.focusAreas.map((area, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-3 bg-electric-500/5 hover:bg-electric-500/10 p-4 rounded-xl border border-electric-500/10 hover:border-electric-500/30 transition-all duration-300 group"
                      >
                        <div className="w-8 h-8 rounded-lg bg-electric-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Target className="w-4 h-4 text-electric-400" />
                        </div>
                        <span className="text-gray-300 font-sans">{area}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
              <Card className="glass-card neon-border bg-gradient-to-br from-electric-500/5 to-cyan-500/5">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-1 h-8 bg-gradient-to-b from-electric-400 to-cyan-400 rounded-full" />
                    <CardTitle className="text-2xl md:text-3xl font-bold text-white font-orbitron tracking-wide flex items-center gap-3">
                      <Award className="w-7 h-7 text-electric-400" />
                      Benefits
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-base md:text-lg text-gray-300 leading-relaxed font-sans">{event.benefits}</p>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Rounds */}
          {event.rounds && event.rounds.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <Card className="glass-card neon-border">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-1 h-8 bg-gradient-to-b from-electric-400 to-cyan-400 rounded-full" />
                    <CardTitle className="text-2xl md:text-3xl font-bold text-white font-orbitron tracking-wide">
                      Competition Rounds
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {event.rounds.map((round, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="relative pl-8 pb-6 last:pb-0"
                      >
                        {/* Timeline connector */}
                        {index < event.rounds!.length - 1 && (
                          <div className="absolute left-[15px] top-8 bottom-0 w-0.5 bg-gradient-to-b from-electric-500/50 to-transparent" />
                        )}
                        
                        {/* Round number badge */}
                        <div className="absolute left-0 top-1 w-8 h-8 rounded-full bg-electric-500 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-electric-500/50">
                          {index + 1}
                        </div>

                        <div className="glass-card rounded-xl p-5 border border-electric-500/10 hover:border-electric-500/30 transition-all duration-300 group hover:translate-x-2">
                          <h3 className="text-lg md:text-xl font-semibold text-white mb-2 font-orbitron tracking-wide group-hover:text-electric-300 transition-colors">
                            {round.name}
                          </h3>
                          <p className="text-gray-300 font-sans leading-relaxed">{round.description}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Rules */}
          {event.rules && event.rules.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <Card className="glass-card neon-border">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-1 h-8 bg-gradient-to-b from-electric-400 to-cyan-400 rounded-full" />
                    <CardTitle className="text-2xl md:text-3xl font-bold text-white font-orbitron tracking-wide">
                      Rules & Guidelines
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {event.rules.map((rule, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.05 }}
                        className="flex items-start gap-4 group"
                      >
                        <div className="mt-1 w-5 h-5 rounded-full bg-electric-500/20 flex items-center justify-center flex-shrink-0 group-hover:bg-electric-500/30 transition-colors">
                          <CheckCircle2 className="w-3 h-3 text-electric-400" />
                        </div>
                        <span className="text-gray-300 font-sans leading-relaxed">{rule}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Contact */}
          {event.contacts && event.contacts.length > 0 && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="mb-12"
            >
              <Card className="glass-card neon-border">
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-1 h-8 bg-gradient-to-b from-electric-400 to-cyan-400 rounded-full" />
                    <CardTitle className="text-2xl md:text-3xl font-bold text-white font-orbitron tracking-wide">
                      Get In Touch
                    </CardTitle>
                  </div>
                  <CardDescription className="text-gray-400 mt-2">
                    Have questions? Reach out to our event coordinators
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {event.contacts.map((contact, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        whileHover={{ y: -4 }}
                        className="glass-card rounded-xl p-5 border border-electric-500/10 hover:border-electric-500/30 transition-all duration-300 group"
                      >
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-electric-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <Phone className="w-5 h-5 text-electric-400" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="text-white font-semibold font-orbitron mb-1">{contact.name}</p>
                            {contact.phone && (
                              <p className="text-gray-400 text-sm font-sans">{contact.phone}</p>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}

          {/* Register CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <Card className="glass-card neon-border bg-gradient-to-br from-electric-500/10 via-cyan-500/5 to-teal-500/10 relative overflow-hidden">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-electric-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
              
              <CardContent className="relative p-8 md:p-12 text-center">
                <motion.div
                  initial={{ scale: 0.9 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                >
                  <Sparkles className="w-12 h-12 mx-auto mb-4 text-electric-400" />
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 font-orbitron">
                    <span className="text-gradient">Ready to Compete?</span>
                  </h2>
                  <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto font-sans">
                    Join us for {event.name} and showcase your technical prowess. Register now to secure your spot!
                  </p>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button asChild size="lg" className="bg-gradient-to-r from-electric-600 to-cyan-600 hover:from-electric-500 hover:to-cyan-500 text-white shadow-2xl shadow-electric-500/40 hover:shadow-electric-500/60 px-12 py-7 text-lg rounded-xl font-orbitron tracking-wider transition-all duration-300">
                      <Link href="/register" className="flex items-center gap-3">
                        Register for {event.name}
                        <ArrowRight className="w-6 h-6" />
                      </Link>
                    </Button>
                  </motion.div>
                </motion.div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}