'use client'

import React, { useState, useEffect } from 'react'

export default function GlitchText({ children, className = '' }: { children: string, className?: string }) {
    const [glitchFactor, setGlitchFactor] = useState(0)

    useEffect(() => {
        // Random glitch effect
        const interval = setInterval(() => {
            if (Math.random() > 0.8) {
                setGlitchFactor(1)
                setTimeout(() => setGlitchFactor(0), 150)
            }
        }, 2000)

        return () => clearInterval(interval)
    }, [])

    return (
        <span className={`relative inline-block ${className} group`}>
            <span className="relative z-10">{children}</span>

            {/* Glitch Layer 1 (Red Shift) */}
            <span
                className={`absolute top-0 left-0 -z-10 w-full h-full text-heist-red opacity-0 mix-blend-screen transition-all duration-100 ${glitchFactor || 'group-hover:opacity-70 group-hover:translate-x-[-2px] group-hover:translate-y-[-2px]'}`}
                style={{
                    opacity: glitchFactor ? 0.8 : undefined,
                    transform: glitchFactor ? 'translate(-3px, -2px)' : undefined,
                    clipPath: 'polygon(0 0, 100% 0, 100% 45%, 0 45%)'
                }}
            >
                {children}
            </span>

            {/* Glitch Layer 2 (Cyan/Blue Shift) */}
            <span
                className={`absolute top-0 left-0 -z-10 w-full h-full text-cyan-500 opacity-0 mix-blend-screen transition-all duration-100 ${glitchFactor || 'group-hover:opacity-70 group-hover:translate-x-[2px] group-hover:translate-y-[2px]'}`}
                style={{
                    opacity: glitchFactor ? 0.8 : undefined,
                    transform: glitchFactor ? 'translate(3px, 2px)' : undefined,
                    clipPath: 'polygon(0 60%, 100% 60%, 100% 100%, 0 100%)'
                }}
            >
                {children}
            </span>
        </span>
    )
}
