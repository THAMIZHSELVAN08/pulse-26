'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

export default function MoneyRain() {
    const [bills, setBills] = useState<number[]>([])

    useEffect(() => {
        // Generate 20 bills
        const newBills = Array.from({ length: 20 }, (_, i) => i)
        setBills(newBills)
    }, [])

    return (
        <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
            {bills.map((i) => {
                const randomLeft = Math.random() * 100
                const randomDuration = 5 + Math.random() * 5
                const randomDelay = Math.random() * 5
                const randomRotation = Math.random() * 360

                return (
                    <motion.div
                        key={i}
                        initial={{
                            y: -100,
                            x: `${randomLeft}vw`,
                            opacity: 0,
                            rotate: randomRotation
                        }}
                        animate={{
                            y: '120vh',
                            opacity: [0, 1, 1, 0],
                            rotate: randomRotation + 360
                        }}
                        transition={{
                            duration: randomDuration,
                            delay: randomDelay,
                            repeat: Infinity,
                            ease: "linear"
                        }}
                        className="absolute top-0 w-12 h-6 bg-green-800/20 border border-green-500/30 rounded-sm"
                    >
                        <div className="w-full h-full flex items-center justify-center text-[8px] text-green-500/50 font-bold opacity-50">
                            $$$
                        </div>
                    </motion.div>
                )
            })}
        </div>
    )
}
