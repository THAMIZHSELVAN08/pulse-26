'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Download, ArrowLeft, CheckCircle2 } from 'lucide-react'

export default function RegisterPage() {
  const registrationUrl = "https://forms.gle/81sN5dpq7QSTtnBL9"

  const benefits = [
    "Certificate of Participation",
    "Hands-on Technical Experience",
    "Networking Opportunities",
    "Prize Money for Winners"
  ]

  return (
    <div className="min-h-screen bg-navy-950 text-white font-sans">
      <div className="h-16" />

      <div className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-8"
          >
            <a
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-electric-400 transition-colors group font-orbitron tracking-wide"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </a>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-5xl mb-4 tracking-wide font-orbitron font-bold">
              <span className="bg-gradient-to-r from-electric-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                Register for PULSE'26
              </span>
            </h1>
            <p className="text-gray-400 text-lg tracking-wide">Join us for an unforgettable technical experience</p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-8">
            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-light tracking-wide font-orbitron">
                    <span className="text-electric-400">
                      What You'll Get
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-center gap-3 p-3 rounded-lg bg-electric-500/5 border border-electric-500/10"
                      >
                        <CheckCircle2 className="w-5 h-5 text-electric-400 flex-shrink-0" />
                        <span className="text-gray-300 tracking-wide">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* QR Code Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Card className="glass-card">
                <CardHeader>
                  <CardTitle className="text-2xl font-light tracking-wide text-center font-orbitron">
                    <span className="text-electric-400">
                      Scan to Register
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* QR Code */}
                  <div className="mx-auto w-full max-w-sm">
                    <div className="relative p-6 bg-white rounded-xl shadow-xl">
                      <img
                        src="/images/registerqr.png"
                        alt="Registration QR Code"
                        className="w-full h-auto object-contain"
                      />
                      <div className="absolute inset-0 rounded-xl border-4 border-electric-400/20 pointer-events-none" />
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <Button
                      asChild
                      className="w-full bg-gradient-to-r from-electric-600 to-cyan-600 hover:from-electric-500 hover:to-cyan-500 text-white py-6 rounded-lg shadow-lg shadow-electric-500/30 hover:shadow-xl hover:shadow-electric-500/50 transition-all duration-300 border-0 font-medium tracking-wide font-orbitron"
                    >
                      <a href={registrationUrl} target="_blank" rel="noopener noreferrer">
                        <span className="flex items-center justify-center gap-2">
                          Open Registration Form
                          <ExternalLink className="w-5 h-5" />
                        </span>
                      </a>
                    </Button>

                    <Button
                      asChild
                      className="w-full bg-navy-800/50 hover:bg-navy-800 text-gray-300 hover:text-white border border-electric-500/20 hover:border-electric-400/40 py-6 rounded-lg transition-all duration-300 font-medium tracking-wide font-orbitron"
                    >
                      <a href="/rulebook.pdf" download>
                        <span className="flex items-center justify-center gap-2">
                          Download Rulebook
                          <Download className="w-5 h-5" />
                        </span>
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Important Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="bg-electric-500/5 backdrop-blur-xl border-electric-500/20">
                <CardContent className="p-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0">
                      <div className="w-2 h-2 bg-electric-400 rounded-full mt-2" />
                    </div>
                    <div>
                      <h3 className="text-white font-medium mb-2 tracking-wide font-orbitron">Important Information</h3>
                      <ul className="space-y-2 text-gray-400 text-sm tracking-wide">
                        <li>• Registration closes on February 15, 2026</li>
                        <li>• Participants will receive confirmation via email</li>
                        <li>• Bring your student ID on the event day</li>
                        <li>• For queries, contact us at aeee@svce.ac.in</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}