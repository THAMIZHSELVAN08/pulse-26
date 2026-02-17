'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, User, Shield, Terminal, Zap } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import HUDBrackets from '@/components/HUDBrackets'
import CircuitBackground from '@/components/CircuitBackground'
import ScrambleText from '@/components/ScrambleText'
import { Button } from '@/components/ui/button'

const CREW_MEMBERS = [
    { name: "Harikrishnan", image: "/crew/Harikrishnan.jpeg", role: "Elite Cyber-Tactician", reward: "$75M" },
    { name: "Sakthivel", image: "/crew/Sakthivel.png", role: "Field Protocol Lead", reward: "$70M" },
    { name: "Kanishkar Kumar", image: "/crew/Knishkar Kumar.jpg", role: "Strategic Liaison", reward: "$65M" },
    { name: "Nimal", image: "/crew/Nimal.jpeg", role: "Field Operative", reward: "$50M" },
    { name: "Dharshini", image: "/crew/Dharshini.jpg", role: "Mission Intel", reward: "$40M" },
    { name: "Thamizh Selvan", image: "/crew/Thamizh.jpeg", role: "Chief Mission Coordinator", reward: "$100M", city: "TOKYO" },
    { name: "Palanikumar", image: "/crew/Palani.jpeg", role: "Logistics Specialist", reward: "$60M", city: "BERLIN" },
    { name: "Renuga Devi", image: "/crew/Renuga.jpg", role: "Data Retrieval Operative", reward: "$55M", city: "NAIROBI" },
    { name: "Jeevan Prasanna", image: "/crew/JeevanPrasanna.jpg", role: "Systems Architect", reward: "$50M" },
    { name: "Madhumitha", image: "/crew/Madhumitha R.jpg", role: "Communications Breach", reward: "$45M" },
    { name: "Harish", image: "/crew/Harish.jpg", role: "Infiltration Specialist", reward: "$40M" },
    { name: "Prarthana", image: "/crew/Prarthana.jpg", role: "Reconnaissance Lead", reward: "$40M" },
    { name: "Akash Kumar", image: "/crew/AKASH.jpg", role: "Infrastructure Sabotage", reward: "$35M" },
    { name: "Visvajith", image: "/crew/Visvajith.jpg", role: "Hardware Intercept", reward: "$35M" },
    { name: "Shruthi", image: "/crew/SHRUTHI S_.jpg", role: "Signal Analysis", reward: "$25M" },
    { name: "Sri Ram", image: "/crew/Sriram.jpeg", role: "Rapid Response Operative", reward: "$25M" },
    { name: "Nazira", image: "/crew/Nazira.jpeg", role: "Digital Archive Access", reward: "$20M" },
    { name: "Mukund", image: "/crew/Mukund.png", role: "Encryption Breaker", reward: "$20M" },
    { name: "Abu Sathik Afridi", image: "/crew/ABU SATHIK AFRIDI S.jpg", role: "Heavy Ordinance Support", reward: "$15M" },
    { name: "Gopika", image: "/crew/Gopika.jpg", role: "Tech Support Operative", reward: "$15M" },
    { name: "Harigaran", image: "/crew/Harigaran.jpg", role: "Circuit Manipulator", reward: "$15M" },
    { name: "Balapranav", image: "/crew/Balapranav.jpeg", role: "Junior Operative", reward: "$10M" },
    { name: "Rakshana", image: "/crew/rakshana.jpg", role: "Junior Operative", reward: "$10M" },
    { name: "Santhoshkumar", image: "/crew/Santhoshkumar C.jpg", role: "Logistics Support", reward: "$10M" },
    { name: "Sai Sundar", image: "/crew/SAISUNDAR S.jpg", role: "Field Technician", reward: "$10M" },
    { name: "Madheshwaran", image: "/crew/Madheshwaran.jpg", role: "Hardware Support", reward: "$10M" },
    { name: "Shreenidhi", image: "/crew/SHREENIDHI.jpg", role: "Intelligence Analysis", reward: "$10M" },
    { name: "Solai Priyadharshan", image: "/crew/Solai Priyadharshan.jpeg", role: "Grid Specialist", reward: "$10M" },
    { name: "Sai Harini", image: "/crew/Sai Harini B S_.jpg", role: "Systems Monitor", reward: "$10M" },
    { name: "Aswan", image: "/crew/Aswan E.jpg", role: "Network Scout", reward: "$10M" },
    { name: "Vishanth Srinivasan", image: "/crew/VISHANTH SRINIVASAN_.jpg", role: "Data Entry Breach", reward: "$10M" },
]

export default function CrewPage() {
    return (
        <main className="min-h-screen bg-black text-white relative overflow-hidden pt-24 pb-32">
            {/* Background Decor */}
            <CircuitBackground />
            <div className="fixed inset-0 z-0 opacity-20 pointer-events-none">
                <div className="absolute inset-0 bg-gradient-to-b from-heist-red/10 via-transparent to-black" />
                <div className="absolute inset-0 scanline opacity-30" />
            </div>

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Back Button */}
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="mb-12"
                >
                    <Button asChild variant="ghost" className="text-heist-silver hover:text-white hover:bg-heist-red/10 gap-2 font-display uppercase tracking-widest group">
                        <Link href="/">
                            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                            Return to Base
                        </Link>
                    </Button>
                </motion.div>

                {/* Header */}
                <div className="text-center mb-24 space-y-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-3 px-6 py-2 bg-heist-red/10 border border-heist-red/30 mb-6 font-heist text-[10px] tracking-[0.5em] text-heist-red uppercase">
                            <Shield className="w-3 h-3" />
                            DALÍ_PROTOCOLS_ACTIVE_
                        </div>
                        <h1 className="text-6xl md:text-9xl font-black font-display italic tracking-normal uppercase leading-none mb-4">
                            THE <span className="text-heist-red">RESISTANCE</span> DOSSIER
                        </h1>
                        <p className="text-heist-silver/40 font-heist text-xs md:text-sm tracking-[0.6em] uppercase max-w-2xl mx-auto">
                            LEADERSHIP_HIERARCHY_REVEALED // {CREW_MEMBERS.length} OPERATIVES_IDENTIFIED
                        </p>
                    </motion.div>
                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {CREW_MEMBERS.map((member, i) => (
                        <motion.div
                            key={member.name}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: (i % 4) * 0.1 }}
                            className="group"
                        >
                            <HUDBrackets className="h-full">
                                <div className="bg-gradient-to-br from-heist-charcoal/80 to-heist-black/95 backdrop-blur-md border border-heist-white/10 p-1 relative overflow-hidden group-hover:border-heist-red/40 transition-all duration-500 shadow-2xl h-full flex flex-col">
                                    {/* High-Tech Overlays */}
                                    <div className="absolute inset-0 bg-blueprint opacity-[0.05] pointer-events-none" />

                                    {/* Image Container - Standardized Size */}
                                    <div className="relative w-full aspect-[3/4] overflow-hidden border border-heist-white/10 bg-heist-black">
                                        <div className="absolute inset-0 bg-heist-red/10 mix-blend-overlay z-10" />
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="object-cover object-[center_20%] grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105"
                                            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                                        />

                                        {/* Scanning Line */}
                                        <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20">
                                            <div className="absolute top-0 left-0 w-full h-[2px] bg-heist-red shadow-[0_0_15px_#E2231A] animate-[scan_3s_linear_infinite]" />
                                        </div>

                                        {/* City ID - Technical Badge */}
                                        {member.city && (
                                            <div className="absolute top-4 right-4 z-30">
                                                <div className="bg-heist-black/80 backdrop-blur-md border border-heist-red/50 text-heist-red text-[8px] font-black px-2 py-1 uppercase tracking-widest">
                                                    CODE_{member.city}
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    {/* Info Area */}
                                    <div className="p-6 space-y-4 flex-grow flex flex-col justify-between relative z-10">
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-2">
                                                <div className="h-[1px] w-4 bg-heist-red" />
                                                <span className="text-[8px] font-heist text-heist-silver/40 uppercase tracking-[0.3em]">ID_RECOGNIZED</span>
                                            </div>

                                            <div>
                                                <h3 className="text-xl font-black font-display text-white uppercase italic tracking-wider group-hover:text-heist-red transition-colors mb-1">
                                                    {member.name}
                                                </h3>
                                                <div className="flex items-center gap-2">
                                                    <div className="w-1.5 h-1.5 bg-heist-red rounded-full" />
                                                    <span className="text-[10px] text-heist-silver font-heist uppercase tracking-widest group-hover:text-white transition-colors">
                                                        {member.role}
                                                    </span>
                                                </div>
                                            </div>

                                            <div className="pt-4 border-t border-heist-white/5 flex items-center justify-between">
                                                <div className="space-y-1">
                                                    <p className="text-[8px] text-heist-silver/30 font-heist uppercase tracking-[0.2em]">Bounty_Value</p>
                                                    <p className="text-xl font-display font-black text-heist-gold tracking-widest drop-shadow-[0_0_10px_rgba(255,215,0,0.1)]">
                                                        {member.reward}
                                                    </p>
                                                </div>
                                                <Zap className="w-5 h-5 text-heist-silver/20 group-hover:text-heist-red/40 transition-colors" />
                                            </div>
                                        </div>
                                    </div>

                                    {/* Corner Accents */}
                                    <div className="absolute top-1 left-1 w-2 h-2 border-t border-l border-heist-red/20 group-hover:border-heist-red/40" />
                                    <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r border-heist-gold/20 group-hover:border-heist-gold/40" />

                                    <div className="pt-4 border-t border-heist-white/5 flex items-center justify-between p-4">
                                        <div className="flex flex-col gap-1 text-[8px] font-heist text-heist-silver/40 uppercase tracking-widest">
                                            <span>STATUS: ACTIVE</span>
                                            <span>PRIORITY: ALPHA</span>
                                        </div>
                                        <div className="bg-heist-red/90 text-white px-3 py-1.5 rotate-2 font-display text-sm tracking-widest shadow-lg">
                                            {member.reward}
                                        </div>
                                    </div>

                                    {/* Scrambled Text on Hover */}
                                    <div className="h-4 overflow-hidden px-4 pb-2">
                                        <p className="text-[8px] font-heist text-heist-red animate-pulse opacity-0 group-hover:opacity-100 transition-opacity uppercase tracking-[0.4em]">
                                            <ScrambleText text={`SCANNING_DATA_CLUSTER_${i}...`} />
                                        </p>
                                    </div>
                                </div>
                            </HUDBrackets>
                        </motion.div>
                    ))}
                </div>
            </div>

            <footer className="mt-32 text-center py-12 border-t border-heist-white/10 relative">
                <div className="absolute inset-0 bg-gradient-to-t from-heist-red/[0.02] to-transparent pointer-events-none" />
                <div className="relative z-10 flex flex-col items-center gap-4">
                    <div className="flex items-center justify-center gap-4 text-heist-silver/20 font-heist text-[10px] tracking-[0.6em] uppercase animate-pulse">
                        <Terminal className="w-4 h-4" />
                        END_OF_CLASSIFIED_DOSSIER
                        <Terminal className="w-4 h-4" />
                    </div>
                    <p className="text-[8px] font-heist text-heist-red/30 tracking-[0.5em] uppercase">SYSTEM_ACCESS_TERMINATED // NODE_SVCE_V26</p>
                </div>
            </footer>
        </main>
    )
}
