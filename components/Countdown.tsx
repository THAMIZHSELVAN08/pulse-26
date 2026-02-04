'use client'

import { useEffect, useState } from 'react'

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
    <div className="relative group perspective">
      <div className="absolute inset-0 bg-gradient-to-br from-electric-500/20 to-cyan-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-500" />
      <div className="relative glass-card rounded-2xl p-6 border border-white/10 group-hover:border-electric-500/30 transition-all duration-300 transform group-hover:-translate-y-1 text-center">
        <div className="text-4xl md:text-6xl font-bold text-gradient tabular-nums font-orbitron">
          {value.toString().padStart(2, '0')}
        </div>
        <div className="text-xs md:text-sm text-gray-400 uppercase tracking-[0.2em] mt-3 font-medium">{label}</div>
      </div>
    </div>
  )

  if (!mounted) {
    return (
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 opacity-0">
        <TimeBlock value={0} label="Days" />
        <TimeBlock value={0} label="Hours" />
        <TimeBlock value={0} label="Minutes" />
        <TimeBlock value={0} label="Seconds" />
      </div>
    )
  }

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
      <TimeBlock value={timeLeft.days} label="Days" />
      <TimeBlock value={timeLeft.hours} label="Hours" />
      <TimeBlock value={timeLeft.minutes} label="Minutes" />
      <TimeBlock value={timeLeft.seconds} label="Seconds" />
    </div>
  )
}
