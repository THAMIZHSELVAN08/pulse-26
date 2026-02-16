'use client'
import { motion, useSpring, useTransform, animate } from 'framer-motion'
import { Users, Target, Zap, Banknote } from 'lucide-react'
import { useEffect, useState, useRef } from 'react'

const CountUp = ({ value, suffix = '' }: { value: string, suffix?: string }) => {
    const numericValue = parseInt(value) || 0
    const [displayValue, setDisplayValue] = useState(0)
    const nodeRef = useRef(null)
    const [hasAnimated, setHasAnimated] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting && !hasAnimated) {
                const controls = animate(0, numericValue, {
                    duration: 2,
                    ease: "easeOut",
                    onUpdate(value) {
                        setDisplayValue(Math.floor(value))
                    },
                    onComplete() {
                        setHasAnimated(true)
                    }
                })
                return () => controls.stop()
            }
        }, { threshold: 0.5 })

        if (nodeRef.current) observer.observe(nodeRef.current)
        return () => observer.disconnect()
    }, [numericValue, hasAnimated])

    return <span ref={nodeRef}>{displayValue}{suffix || value.replace(/[0-9]/g, '')}</span>
}

export default function HeistStats() {
    const stats = [
        { icon: Users, label: 'RECRUITS', value: '500+', color: 'text-heist-red' },
        { icon: Target, label: 'COLLEGES', value: '30+', color: 'text-heist-gold' },
        { icon: Zap, label: 'MISSIONS', value: '06', color: 'text-heist-red' },
        { icon: Banknote, label: 'PRIZE POOL', value: '25', suffix: 'K+', color: 'text-heist-gold' },
    ]

    return (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => {
                const Icon = stat.icon
                return (
                    <motion.div
                        key={stat.label}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-heist-charcoal/50 border border-heist-red/20 p-8 text-center relative overflow-hidden group hover:border-heist-red transition-all duration-500 backdrop-blur-sm"
                    >
                        {/* Scanning Line Effect */}
                        <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity">
                            <div className="absolute top-0 left-0 w-full h-[2px] bg-heist-red/50 shadow-[0_0_15px_#E2231A] animate-[scan_2s_linear_infinite]" />
                        </div>

                        <div className="absolute top-0 left-0 w-full h-1 bg-heist-red transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                        <Icon className={`w-12 h-12 mx-auto mb-4 ${stat.color} transition-all duration-500 group-hover:scale-110 drop-shadow-[0_0_8px_rgba(226,35,26,0.3)] group-hover:drop-shadow-[0_0_15px_rgba(226,35,26,0.6)]`} />
                        <div className={`text-4xl md:text-5xl font-black font-display mb-2 text-heist-white`}>
                            <CountUp value={stat.value} suffix={stat.suffix} />
                        </div>
                        <div className="text-xs text-heist-silver font-heist uppercase tracking-[0.2em] group-hover:text-heist-white transition-colors">
                            {stat.label}
                        </div>
                    </motion.div>
                )
            })}
        </div>
    )
}

