'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import BackToHome from '@/components/BackToHome'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { CheckCircle2, ExternalLink } from 'lucide-react'

export default function RegisterPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => {
      setSubmitted(false)
    }, 3000)
  }

  const registrationUrl = "https://forms.gle/81sN5dpq7QSTtnBL9"

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <BackToHome />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
              Register
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Join PULSE'26 - Certificates will be provided
          </p>
        </motion.div>

        {/* QR Code Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Card className="glass neon-border hover-glow mb-8">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-center text-neon-blue">
                Scan to Register
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <div className="w-64 h-64 mx-auto bg-white rounded-lg flex items-center justify-center mb-6 shadow-lg">
                <img
                  src="/images/qr.png"
                  alt="Registration QR Code"
                  className="w-full h-full object-contain rounded-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    target.nextElementSibling?.classList.remove('hidden');
                  }}
                />
                <div className="hidden w-full h-full flex items-center justify-center bg-gray-100 rounded-lg">
                  <p className="text-gray-600 text-sm p-4 text-center">
                    QR Code
                    <br />
                    <span className="text-xs">(Add qr.png to /public/images/)</span>
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <p className="text-gray-300 text-lg">Or fill out the form below</p>
                
                <Button asChild size="lg" className="bg-gradient-to-r from-neon-blue to-neon-cyan text-dark-bg hover-glow">
                  <Link href={registrationUrl} target="_blank" rel="noopener noreferrer">
                    Open Registration Form
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </Link>
                </Button>
                
                <div className="mt-4 p-4 bg-neon-blue/10 rounded-lg border border-neon-blue/30">
                  <p className="text-sm text-gray-300 mb-2">Direct Link:</p>
                  <Link 
                    href={registrationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neon-blue hover:text-neon-cyan text-sm break-all"
                  >
                    {registrationUrl}
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>

        {/* Success Message */}
        {submitted && (
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center"
          >
            <Card className="glass neon-border">
              <CardContent className="py-12">
                <CheckCircle2 className="w-20 h-20 text-green-400 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-green-400 mb-2">Registration Successful!</h2>
                <p className="text-gray-300">We'll contact you soon with further details.</p>
              </CardContent>
            </Card>
          </motion.div>
        )}

        {/* Additional Information */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Card className="glass neon-border">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-neon-blue">Event Information</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <p className="text-gray-400">Date:</p>
                  <p className="text-white font-semibold">February 19, 2026</p>
                </div>
                <div>
                  <p className="text-gray-400">Theme:</p>
                  <p className="text-white font-semibold">"Where Sparks Become Solutions"</p>
                </div>
                <div>
                  <p className="text-gray-400">Venue:</p>
                  <p className="text-white font-semibold">Sri Venkateswara College of Engineering</p>
                </div>
                <div>
                  <p className="text-gray-400">Department:</p>
                  <p className="text-white font-semibold">Electrical and Electronics Engineering</p>
                </div>
              </div>
              
              <div className="mt-6 p-4 bg-yellow-500/10 rounded-lg border border-yellow-500/30">
                <p className="text-yellow-400 text-sm">
                  <strong>Note:</strong> All participants will receive certificates. 
                  Winners will receive awards and recognition.
                </p>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
