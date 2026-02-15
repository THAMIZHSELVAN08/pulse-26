'use client'

import { motion } from 'framer-motion'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { ExternalLink, Download, ArrowLeft, CheckCircle2, Sparkles, Calendar, Mail, Award, Users } from 'lucide-react'

// Background component for atmospheric effects
function RegisterBackground() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Animated grid */}
      <div className="absolute inset-0 opacity-20" style={{
        backgroundImage: `
          linear-gradient(to right, rgba(45, 212, 191, 0.03) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(45, 212, 191, 0.03) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }} />
      
      {/* Gradient orbs */}
      <motion.div
        className="absolute top-20 -left-40 w-96 h-96 bg-electric-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute top-1/2 -right-40 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute bottom-20 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl"
        animate={{
          x: [0, 80, 0],
          y: [0, -80, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Vignette effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-navy-950 via-transparent to-navy-950" />
    </div>
  )
}

export default function RegisterPage() {
  const registrationUrl = "https://forms.gle/81sN5dpq7QSTtnBL9"

  const benefits = [
    { icon: Award, text: "Certificate of Participation" },
    { icon: Sparkles, text: "Hands-on Technical Experience" },
    { icon: Users, text: "Networking Opportunities" },
    { icon: Award, text: "Prize Money for Winners" }
  ]

  const steps = [
    { number: "01", title: "Scan QR Code", desc: "Use your phone camera to scan" },
    { number: "02", title: "Fill Details", desc: "Complete the registration form" },
    { number: "03", title: "Get Confirmation", desc: "Receive email confirmation" }
  ]

  return (
    <div className="min-h-screen bg-navy-950 text-white font-sans relative">
      <RegisterBackground />
      
      <div className="h-16" />

      <div className="relative z-10 py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Back Button */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="mb-12"
          >
            <a
              href="/"
              className="inline-flex items-center gap-2 text-gray-400 hover:text-electric-400 transition-colors group font-orbitron tracking-wide"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              <span>Back to Home</span>
            </a>
          </motion.div>

          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-electric-500/10 border border-electric-500/20 mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4 text-electric-400" />
              <span className="text-xs uppercase tracking-[0.3em] text-electric-300 font-orbitron font-medium">
                PULSE&apos;26 Registration
              </span>
            </motion.div>

            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl mb-6 tracking-tight font-orbitron font-bold">
              <span className="bg-gradient-to-r from-electric-300 via-cyan-300 to-teal-300 bg-clip-text text-transparent">
                Join US
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Be part of a national-level technical symposium that celebrates innovation and engineering excellence
            </p>

            {/* Event Date Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="inline-flex items-center gap-3 mt-6 px-6 py-3 rounded-xl bg-electric-500/10 border border-electric-500/20"
            >
              <Calendar className="w-5 h-5 text-electric-400" />
              <span className="text-electric-200 font-orbitron tracking-wider">February 19, 2026</span>
            </motion.div>
          </motion.div>

          <div className="max-w-4xl mx-auto space-y-12">
            {/* Benefits Section - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Card className="glass-card neon-border relative overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-electric-500/5 rounded-full blur-3xl" />
                
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-1 h-8 bg-gradient-to-b from-electric-400 to-cyan-400 rounded-full" />
                    <CardTitle className="text-2xl md:text-3xl font-bold tracking-wide font-orbitron">
                      <span className="text-gradient">
                        What You&apos;ll Experience
                      </span>
                    </CardTitle>
                  </div>
                </CardHeader>
                <CardContent className="relative">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {benefits.map((benefit, index) => {
                      const IconComponent = benefit.icon
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          whileHover={{ x: 5, scale: 1.02 }}
                          className="flex items-center gap-4 p-5 rounded-xl bg-electric-500/5 hover:bg-electric-500/10 border border-electric-500/10 hover:border-electric-500/30 transition-all duration-300 group"
                        >
                          <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-500/20 to-cyan-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                            <IconComponent className="w-6 h-6 text-electric-400" />
                          </div>
                          <span className="text-gray-300 font-sans leading-relaxed">{benefit.text}</span>
                        </motion.div>
                      )
                    })}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Registration Steps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="text-center mb-8">
                <h2 className="text-2xl md:text-3xl font-bold font-orbitron mb-3">
                  <span className="text-gradient">Quick Registration Process</span>
                </h2>
                <p className="text-gray-400">Three simple steps to secure your spot</p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {steps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                    whileHover={{ y: -8 }}
                    className="glass-card rounded-2xl p-6 border border-electric-500/10 hover:border-electric-500/30 transition-all duration-300 group relative"
                  >
                    {/* Step Number */}
                    <div className="absolute -top-4 -left-4 w-14 h-14 rounded-xl bg-gradient-to-br from-electric-500 to-cyan-500 flex items-center justify-center font-bold text-xl font-orbitron shadow-lg shadow-electric-500/50 group-hover:scale-110 transition-transform">
                      {step.number}
                    </div>
                    
                    <div className="mt-6">
                      <h3 className="text-lg font-bold text-white mb-2 font-orbitron group-hover:text-electric-300 transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{step.desc}</p>
                    </div>

                    {/* Connector line (except last item) */}
                    {index < steps.length - 1 && (
                      <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gradient-to-r from-electric-500/50 to-transparent" />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* QR Code Section - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Card className="glass-card neon-border relative overflow-hidden">
                {/* Decorative gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-electric-500/5 via-transparent to-cyan-500/5 pointer-events-none" />
                
                <CardHeader>
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-1 h-8 bg-gradient-to-b from-electric-400 to-cyan-400 rounded-full" />
                    <CardTitle className="text-2xl md:text-3xl font-bold tracking-wide text-center font-orbitron mx-auto">
                      <span className="text-gradient">
                        Scan to Register
                      </span>
                    </CardTitle>
                  </div>
                  <p className="text-gray-400 text-center mt-2">
                    Use your smartphone camera to scan the QR code below
                  </p>
                </CardHeader>
                <CardContent className="space-y-8 relative">
                  {/* QR Code with enhanced styling */}
                  <div className="mx-auto w-full max-w-sm">
                    <motion.div
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 0.8, duration: 0.5 }}
                      whileHover={{ scale: 1.02 }}
                      className="relative group"
                    >
                      {/* Glow effect */}
                      <div className="absolute -inset-4 bg-gradient-to-r from-electric-500/20 via-cyan-500/20 to-teal-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      <div className="relative p-8 bg-white rounded-2xl shadow-2xl">
                        <img
                          src="/images/registerqr.png"
                          alt="Registration QR Code"
                          className="w-full h-auto object-contain"
                        />
                        {/* Corner accents */}
                        <div className="absolute top-6 left-6 w-4 h-4 border-t-4 border-l-4 border-electric-500 rounded-tl-lg" />
                        <div className="absolute top-6 right-6 w-4 h-4 border-t-4 border-r-4 border-electric-500 rounded-tr-lg" />
                        <div className="absolute bottom-6 left-6 w-4 h-4 border-b-4 border-l-4 border-electric-500 rounded-bl-lg" />
                        <div className="absolute bottom-6 right-6 w-4 h-4 border-b-4 border-r-4 border-electric-500 rounded-br-lg" />
                      </div>
                    </motion.div>
                  </div>

                  {/* Action Buttons - Enhanced */}
                  <div className="space-y-4">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        asChild
                        className="w-full bg-gradient-to-r from-electric-600 to-cyan-600 hover:from-electric-500 hover:to-cyan-500 text-white py-7 rounded-xl shadow-lg shadow-electric-500/30 hover:shadow-2xl hover:shadow-electric-500/50 transition-all duration-300 border-0 font-medium tracking-wide font-orbitron text-base"
                      >
                        <a href={registrationUrl} target="_blank" rel="noopener noreferrer">
                          <span className="flex items-center justify-center gap-3">
                            <ExternalLink className="w-5 h-5" />
                            Open Registration Form
                          </span>
                        </a>
                      </Button>
                    </motion.div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button
                        asChild
                        className="w-full bg-navy-800/50 hover:bg-navy-800 text-gray-300 hover:text-white border-2 border-electric-500/20 hover:border-electric-400/40 py-7 rounded-xl transition-all duration-300 font-medium tracking-wide font-orbitron text-base"
                      >
                        <a href="/Pulse'26 Rulebook.pdf" download>
                          <span className="flex items-center justify-center gap-3">
                            <Download className="w-5 h-5" />
                            Download Rulebook
                          </span>
                        </a>
                      </Button>
                    </motion.div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Important Info - Enhanced */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Card className="glass-card neon-border bg-gradient-to-br from-electric-500/10 via-cyan-500/5 to-transparent relative overflow-hidden">
                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-electric-500/10 rounded-full blur-2xl" />
                
                <CardContent className="p-8 relative">
                  <div className="flex gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-electric-500/20 to-cyan-500/20 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-electric-400" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-4 tracking-wide font-orbitron">
                        Important Information
                      </h3>
                      <div className="space-y-3">
                        {[
                          { icon: Calendar, text: "Registration closes on February 17, 2026" },
                          { icon: Mail, text: "Participants will receive confirmation via email" },
                          { icon: CheckCircle2, text: "Bring your student ID on the event day" },
                          { icon: Mail, text: "For queries, contact us at aeee@svce.ac.in" }
                        ].map((item, index) => {
                          const IconComponent = item.icon
                          return (
                            <motion.div
                              key={index}
                              initial={{ opacity: 0, x: -20 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ delay: 0.9 + index * 0.1 }}
                              className="flex items-start gap-3 group"
                            >
                              <IconComponent className="w-4 h-4 text-electric-400 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform" />
                              <span className="text-gray-300 text-sm leading-relaxed">{item.text}</span>
                            </motion.div>
                          )
                        })}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Final CTA */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              className="text-center py-8"
            >
              <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
                <Sparkles className="w-4 h-4 text-electric-400" />
                <span>Secure your spot today and be part of something extraordinary</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}