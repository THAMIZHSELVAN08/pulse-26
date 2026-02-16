'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

export default function ProfessorGlitch() {
    const [glitchFactor, setGlitchFactor] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            if (Math.random() > 0.8) {
                setGlitchFactor(1)
                setTimeout(() => setGlitchFactor(0), 100 + Math.random() * 200)
            }
        }, 3000)

        return () => clearInterval(interval)
    }, [])

    return (
        <div className="absolute inset-0 pointer-events-none z-0">
            {/* Base Image */}
            <div className="absolute inset-0 opacity-[0.7] group-hover/inst:opacity-[0.85] transition-all duration-1000">
                <img
                    src="/professor.jpg"
                    alt="The Professor"
                    className={`w-full h-full object-cover object-[center_25%] transition-all duration-[10s] ease-out contrast-[1.15] brightness-[1.15] ${glitchFactor ? 'scale-[1.02] hue-rotate-15' : 'scale-100 group-hover/inst:scale-105'}`}
                />
            </div>

            {/* Glitch Layer 1 (Red Shift) */}
            <div
                className={`absolute inset-0 opacity-0 mix-blend-screen overflow-hidden transition-opacity duration-100 ${glitchFactor ? 'opacity-40' : 'group-hover/inst:opacity-0'}`}
                style={{
                    transform: glitchFactor ? `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)` : 'none',
                    clipPath: glitchFactor ? 'polygon(0 15%, 100% 15%, 100% 30%, 0 30%)' : 'none'
                }}
            >
                <img
                    src="/professor.jpg"
                    alt="The Professor"
                    className="w-full h-full object-cover object-[center_25%] contrast-150 brightness-110 sepia-[0.5] hue-rotate-[320deg]"
                />
            </div>

            {/* Glitch Layer 2 (Blue/Cyan Shift) */}
            <div
                className={`absolute inset-0 opacity-0 mix-blend-screen overflow-hidden transition-opacity duration-100 ${glitchFactor ? 'opacity-40' : 'group-hover/inst:opacity-0'}`}
                style={{
                    transform: glitchFactor ? `translate(${Math.random() * 10 - 5}px, ${Math.random() * 10 - 5}px)` : 'none',
                    clipPath: glitchFactor ? 'polygon(0 65%, 100% 65%, 100% 80%, 0 80%)' : 'none'
                }}
            >
                <img
                    src="/professor.jpg"
                    alt="The Professor"
                    className="w-full h-full object-cover object-[center_25%] contrast-150 brightness-110 sepia-[0.5] hue-rotate-[180deg]"
                />
            </div>

            {/* Scanning Line HUD */}
            <div className="absolute inset-0 opacity-40">
                <div className="absolute top-0 left-0 w-full h-[1px] bg-heist-red shadow-[0_0_15px_#E2231A] animate-[scan_4s_linear_infinite]" />
            </div>

            {/* Overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-heist-black/80 via-transparent to-transparent" />
            <div className="absolute inset-0 bg-heist-red/10 mix-blend-soft-light" />
        </div>
    )
}
