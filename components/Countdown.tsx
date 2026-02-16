'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import HUDBrackets from './HUDBrackets'

function calculateTimeLeft(target: number) {
  const now = new Date().getTime()
  const difference = target - now

  if (difference > 0) {
    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
      seconds: Math.floor((difference % (1000 * 60)) / 1000)
    }
  }
  return { days: 0, hours: 0, minutes: 0, seconds: 0 }
}

export default function Countdown({ targetISO }: { targetISO: string }) {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const target = new Date(targetISO).getTime()
    setTimeLeft(calculateTimeLeft(target))

    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft(target))
    }, 1000)

    return () => clearInterval(interval)
  }, [targetISO])

  const TimeBlock = ({ value, label }: { value: number; label: string }) => (
    <div className="relative group">
      <div className="absolute inset-0 bg-heist-red/5 blur-2xl group-hover:bg-heist-red/10 transition-all duration-700" />

      <HUDBrackets className="transition-transform duration-500 group-hover:scale-105">
        <div className="relative bg-heist-charcoal/80 border border-heist-white/10 p-5 md:p-8 backdrop-blur-md overflow-hidden group-hover:border-heist-red/50 transition-all duration-300">
          {/* Scanning Line */}
          <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-heist-red/40 shadow-[0_0_10px_#E2231A] animate-[scan_3s_linear_infinite]" />
          </div>

          {/* Grid Background */}
          <div className="absolute inset-0 bg-blueprint opacity-[0.03] pointer-events-none" />

          <motion.div
            key={value}
            initial={{ opacity: 0.5, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-7xl font-black tabular-nums font-display text-white drop-shadow-[0_0_15px_rgba(226,35,26,0.4)] relative z-10 group-hover:animate-glitch"
          >
            {value.toString().padStart(2, '0')}
          </motion.div>

          <div className="text-[10px] md:text-xs text-heist-red font-heist font-bold uppercase tracking-[0.3em] mt-2 relative z-10 border-t border-heist-red/20 pt-2 group-hover:text-heist-gold transition-colors">
            {label}
          </div>

          {/* Glitch Overlay Detail */}
          <div className="absolute bottom-1 right-1 text-[8px] font-heist text-heist-red/20 uppercase tracking-tighter select-none">
            SYS_TIMER_v2.6
          </div>
        </div>
      </HUDBrackets>
    </div>
  )

  if (!mounted) {
    return (
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10 opacity-0">
        <TimeBlock value={0} label="DAYS" />
        <TimeBlock value={0} label="HOURS" />
        <TimeBlock value={0} label="MINS" />
        <TimeBlock value={0} label="SECS" />
      </div>
    )
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
        <TimeBlock value={timeLeft.days} label="DAYS" />
        <TimeBlock value={timeLeft.hours} label="HOURS" />
        <TimeBlock value={timeLeft.minutes} label="MINS" />
        <TimeBlock value={timeLeft.seconds} label="SECS" />
      </div>

      {/* Tactical Status Bar */}
      <div className="flex items-center justify-between text-[10px] font-heist text-heist-red/40 tracking-[0.2em] uppercase max-w-lg mx-auto border-x border-heist-red/20 px-4">
        <div className="flex items-center gap-2">
          <div className="w-1.5 h-1.5 bg-heist-red rounded-full animate-pulse" />
          <span>Live Feed [ENC_01]</span>
        </div>
        <div className="hidden md:block">Location: SVCE_HQ</div>
        <div>Signal: Stable</div>
      </div>
    </div>
  )
}

