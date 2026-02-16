'use client'

import React from 'react'
import { motion } from 'framer-motion'

export default function HUDBrackets({ children, className = '' }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`relative ${className}`}>
            {/* Top Left */}
            <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-heist-red z-20" />
            {/* Top Right */}
            <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-heist-red z-20" />
            {/* Bottom Left */}
            <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-heist-red z-20" />
            {/* Bottom Right */}
            <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-heist-red z-20" />

            {children}
        </div>
    )
}
