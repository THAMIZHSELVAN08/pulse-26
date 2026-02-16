'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { motion } from 'framer-motion'

export default function BackToHome() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      className="mb-8"
    >
      <Link
        href="/"
        className="inline-flex items-center space-x-2 text-heist-silver hover:text-heist-red transition-colors group font-display tracking-widest uppercase text-xl"
      >
        <ArrowLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform text-heist-red" />
        <span>Back to Base</span>
      </Link>
    </motion.div>
  )
}
