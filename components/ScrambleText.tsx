'use client'

import React, { useState, useEffect, useRef } from 'react'

const glyphs = 'ABCDEFHIJKLMNOPQRSTUVWXTZ0123456789!@#$%^&*()_+-=[]{}|;:,.<>?'

interface ScrambleTextProps {
    text: string
    className?: string
    duration?: number
    delay?: number
    once?: boolean
}

export default function ScrambleText({ text, className = '', duration = 1.5, delay = 0, once = true }: ScrambleTextProps) {
    const [displayText, setDisplayText] = useState(text)
    const [isScrambling, setIsScrambling] = useState(false)
    const [hasAnimated, setHasAnimated] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    const scramble = () => {
        if (once && hasAnimated) return
        setIsScrambling(true)
        setHasAnimated(true)

        const characters = text.split('')
        let iteration = 0
        const interval = setInterval(() => {
            setDisplayText(characters.map((char, index) => {
                if (char === ' ') return ' '
                if (index < iteration) return text[index]
                return glyphs[Math.floor(Math.random() * glyphs.length)]
            }).join(''))

            if (iteration >= text.length) {
                clearInterval(interval)
                setIsScrambling(false)
            }

            iteration += text.length / (duration * 60) // 60fps
        }, 1000 / 60)
    }

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            if (entries[0].isIntersecting) {
                setTimeout(scramble, delay * 1000)
            }
        }, { threshold: 0.1 })

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => observer.disconnect()
    }, [text, delay, once, hasAnimated])

    return (
        <span ref={containerRef} className={className} onMouseEnter={() => !once && !isScrambling && scramble()}>
            {displayText}
        </span>
    )
}
