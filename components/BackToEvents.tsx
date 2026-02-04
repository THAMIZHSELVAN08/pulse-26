'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

export default function BackToEvents() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="mb-8"
    >
      <Link
        href="/events"
        className="inline-flex items-center space-x-2 text-electric-400 hover:text-electric-300 transition-colors group"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform" />
        <span className="font-medium font-orbitron tracking-wide">Back to Events</span>
      </Link>
    </motion.div>
  )
}


