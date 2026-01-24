'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Instagram, Calendar, Users, Trophy } from 'lucide-react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-neon-blue/5 via-transparent to-transparent"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Logo */}
            <div className="mb-8">
              <img
                src="/images/logo.png"
                alt="PULSE'26 Logo"
                className="w-32 h-32 mx-auto mb-6 object-contain"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.style.display = 'none';
                  target.nextElementSibling?.classList.remove('hidden');
                }}
              />
              <div className="hidden">
                <div className="w-32 h-32 mx-auto mb-6 bg-neon-blue/20 rounded-full flex items-center justify-center">
                  <span className="text-neon-blue text-2xl font-bold">PULSE'26</span>
                </div>
              </div>
            </div>

            <motion.h1
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, type: 'spring', stiffness: 100 }}
              className="text-6xl md:text-8xl font-bold mb-6"
            >
              <span className="bg-gradient-to-r from-neon-blue via-neon-cyan to-neon-blue bg-clip-text text-transparent animate-pulse">
                PULSE
              </span>
              <span className="text-neon-blue">'26</span>
            </motion.h1>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <Badge className="mb-6 bg-gradient-to-r from-neon-blue to-neon-cyan text-dark-bg text-lg px-6 py-2">
                PowerPinnacle
              </Badge>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-gray-300 mb-8"
            >
              Where Sparks Become Solutions
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-lg text-gray-400 mb-12"
            >
              A National Level Technical Symposium
              <br />
              Department of Electrical and Electronics Engineering
              <br />
              February 19, 2026
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <Button asChild size="lg" className="bg-gradient-to-r from-neon-blue to-neon-cyan text-dark-bg hover-glow">
                <Link href="/register">
                  Register Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card className="glass neon-border hover-glow text-center">
                <CardContent className="p-6">
                  <Trophy className="w-12 h-12 text-neon-blue mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">6 Events</h3>
                  <p className="text-gray-300">Exciting technical competitions</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card className="glass neon-border hover-glow text-center">
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-neon-blue mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">500+ Participants</h3>
                  <p className="text-gray-300">From colleges across the nation</p>
                </CardContent>
              </Card>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <Card className="glass neon-border hover-glow text-center">
                <CardContent className="p-6">
                  <Calendar className="w-12 h-12 text-neon-blue mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-white mb-2">Feb 19, 2026</h3>
                  <p className="text-gray-300">One day technical extravaganza</p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Poster Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-dark-card/30">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass neon-border hover-glow">
              <CardHeader>
                <CardTitle className="text-3xl font-bold text-center text-neon-blue">
                  Symposium Poster
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="relative aspect-[3/4] max-w-md mx-auto rounded-lg overflow-hidden shadow-lg">
                  <img
                    src="/images/poster.jpg"
                    alt="PULSE'26 Symposium Poster"
                    className="w-full h-full object-contain"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.nextElementSibling?.classList.remove('hidden');
                    }}
                  />
                  <div className="hidden w-full h-full flex items-center justify-center bg-dark-card/50">
                    <p className="text-gray-400 text-center p-8">
                      Poster image will be displayed here
                      <br />
                      <span className="text-sm">(Add your poster image to /public/images/poster.jpg)</span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Card className="glass neon-border">
              <CardHeader>
                <CardTitle className="text-4xl font-bold text-neon-blue">About PULSE'26</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg text-gray-300 leading-relaxed">
                  PULSE'26, with the theme "Where Sparks Become Solutions," is a National Level Technical Symposium organized by the Department of Electrical and Electronics Engineering at Sri Venkateswara College of Engineering. It's a platform for young minds to explore, innovate, and showcase their talents in various domains of Electrical and Electronics Engineering.
                </p>
                <p className="text-lg text-gray-300 leading-relaxed">
                  Join us on February 19, 2026, for a day filled with exciting events, paper presentations, project expos, and challenging competitions designed to ignite your passion for engineering. PULSE'26 is an opportunity to learn, network, and contribute to the ever-evolving world of technology.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-neon-blue/20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center md:text-left"
            >
              <h3 className="text-neon-blue font-bold mb-4">Contact Us</h3>
              <div className="space-y-2">
                <p className="text-gray-300 text-sm">Sri Venkateswara College of Engineering</p>
                <p className="text-gray-300 text-sm">Department of EEE</p>
                <a
                  href="https://instagram.com/aeee.svce"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 text-gray-300 hover:text-neon-blue transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                  <span className="text-sm">@aeee.svce</span>
                </a>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-center md:text-left"
            >
              <h3 className="text-neon-blue font-bold mb-2">Event Date</h3>
              <p className="text-gray-300">February 19, 2026</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-center md:text-left"
            >
              <h3 className="text-neon-blue font-bold mb-2">Quick Links</h3>
              <div className="space-y-1">
                <Link href="/events" className="block text-gray-300 hover:text-neon-blue transition-colors text-sm">
                  Events
                </Link>
                <Link href="/register" className="block text-gray-300 hover:text-neon-blue transition-colors text-sm">
                  Register
                </Link>
                <Link href="/contact" className="block text-gray-300 hover:text-neon-blue transition-colors text-sm">
                  Contact
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-center md:text-left"
            >
              <h3 className="text-neon-blue font-bold mb-2">Follow Us</h3>
              <a
                href="https://instagram.com/aeee.svce"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 text-gray-300 hover:text-neon-blue transition-colors"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
            </motion.div>
          </div>
        </div>
      </footer>
    </div>
  )
}
