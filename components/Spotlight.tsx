'use client'

import { motion, useMotionTemplate, useMotionValue } from 'framer-motion'
import { useEffect } from 'react'

export default function Spotlight() {
    const mouseX = useMotionValue(0)
    const mouseY = useMotionValue(0)

    useEffect(() => {
        const handleMouseMove = ({ clientX, clientY }: MouseEvent) => {
            mouseX.set(clientX)
            mouseY.set(clientY)
        }

        if (typeof window !== 'undefined') {
            window.addEventListener('mousemove', handleMouseMove)
        }
        return () => {
            if (typeof window !== 'undefined') {
                window.removeEventListener('mousemove', handleMouseMove)
            }
        }
    }, [mouseX, mouseY])

    const gradient = useMotionTemplate`
    radial-gradient(
      250px circle at ${mouseX}px ${mouseY}px,
      rgba(226, 35, 26, 0.06),
      transparent 80%
    )
  `

    return (
        <motion.div
            className="pointer-events-none fixed inset-0 z-30 transition-opacity duration-300 mix-blend-screen"
            style={{ background: gradient }}
        />
    )
}
