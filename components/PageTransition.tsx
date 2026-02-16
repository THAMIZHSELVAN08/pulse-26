'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

export default function PageTransition({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname()

    return (
        <AnimatePresence mode="wait">
            <motion.div
                key={pathname}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="min-h-screen relative"
            >
                {/* Tactical shutter overlay */}
                <motion.div
                    initial={{ scaleY: 0 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 1 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 bg-heist-red z-[9999] origin-top pointer-events-none"
                >
                    <div className="absolute inset-0 bg-blueprint opacity-20" />
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="text-white font-display text-4xl tracking-[0.5em] uppercase italic">
                            Breaching...
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    initial={{ scaleY: 1 }}
                    animate={{ scaleY: 0 }}
                    exit={{ scaleY: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="fixed inset-0 bg-heist-red z-[9999] origin-bottom pointer-events-none"
                >
                    <div className="absolute inset-0 bg-blueprint opacity-20" />
                </motion.div>

                <motion.div
                    initial={{ y: 20, opacity: 0, filter: "blur(10px)" }}
                    animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    {children}
                </motion.div>
            </motion.div>
        </AnimatePresence>
    )
}
