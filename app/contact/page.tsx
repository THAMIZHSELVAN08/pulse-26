'use client'

import { motion } from 'framer-motion'
import BackToHome from '@/components/BackToHome'
import { Instagram, Building2, GraduationCap, Calendar, Phone, AlertCircle } from 'lucide-react'
import CircuitBackground from '@/components/CircuitBackground'
import ScrambleText from '@/components/ScrambleText'
import HUDBrackets from '@/components/HUDBrackets'

export default function ContactPage() {
  const contactCards = [
    {
      icon: Building2,
      title: 'College',
      content: 'Sri Venkateswara College of Engineering',
      subContent: 'Pennalur, Sriperumbudur',
    },
    {
      icon: GraduationCap,
      title: 'Department',
      content: 'Electrical and Electronics Engineering',
      subContent: 'AEEE Association',
    },
    {
      icon: Instagram,
      title: 'Secure Channel',
      content: '@aeee.svce',
      link: 'https://instagram.com/aeee.svce',
      action: 'Follow Protocol',
    },
    {
      icon: Calendar,
      title: 'D-Day',
      content: '19 February 2026',
      subContent: '0800 Hours',
    },
  ]

  const coordinators = [
    {
      title: 'Faculty Advisors',
      people: [
        'MR. S. SUDHARSANAM, ASST.PROF',
        'MR. N. SURESH, ASST.PROF',
      ],
      role: 'Professor'
    },
    {
      title: 'The Mastermind',
      people: [
        'DR. SUDHAKAR K B',
      ],
      role: 'HOD/EEE'
    },
    {
      title: 'Field Commanders',
      people: [
        'HARIKRISHNAN S',
        'SAKTHIVEL V',
      ],
      role: 'Student Coordinators'
    },
  ]

  return (
    <div className="min-h-screen bg-heist-black text-heist-white relative overflow-x-hidden">
      <CircuitBackground />

      {/* Red ambient overlay */}
      <div className="fixed inset-0 bg-gradient-to-b from-heist-red/5 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 py-24 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <BackToHome />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="inline-block border-b-2 border-heist-red mb-4">
              <h1 className="text-5xl md:text-7xl font-black mb-2 font-display uppercase italic text-white tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                <span className="text-chromatic"><ScrambleText text="CONTACT" className="inline" /></span> <span className="text-heist-red">HQ</span>
              </h1>
            </div>

            <p className="text-xl text-heist-silver font-heist uppercase tracking-widest max-w-2xl mx-auto">
              Establish secure communication with the command center.
            </p>
          </motion.div>

          {/* Contact Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
            {contactCards.map((card, index) => {
              const Icon = card.icon
              return (
                <motion.div
                  key={card.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="group"
                >
                  <HUDBrackets className="h-full transition-transform duration-500 group-hover:scale-105">
                    <div className="bg-heist-charcoal/80 backdrop-blur-md border border-heist-white/10 p-8 shadow-xl group-hover:border-heist-red/50 transition-all duration-300 relative overflow-hidden h-full">
                      {/* Scanning Line */}
                      <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute top-0 left-0 w-full h-[1px] bg-heist-red/30 shadow-[0_0_10px_#E2231A] animate-[scan_3s_linear_infinite]" />
                      </div>

                      <div className="w-14 h-14 bg-heist-black border border-heist-red flex items-center justify-center mb-6 group-hover:bg-heist-red group-hover:text-white transition-all duration-500 shadow-lg relative z-10">
                        <Icon className="w-7 h-7 text-heist-red group-hover:text-white transition-colors" />
                      </div>

                      <h3 className="text-xl font-bold text-white mb-3 font-display tracking-[0.2em] uppercase relative z-10 group-hover:text-heist-gold transition-colors">
                        {card.title}
                      </h3>

                      <div className="relative z-10">
                        {card.link ? (
                          <a
                            href={card.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-heist-silver hover:text-white transition-colors font-heist text-sm block"
                          >
                            <span className="block mb-2">{card.content}</span>
                            <span className="inline-flex items-center gap-2 text-[10px] mt-1 text-heist-red uppercase font-bold tracking-widest group-hover:text-heist-gold transition-colors animate-pulse">
                              &gt; INITIALIZE_PROTOCOL
                            </span>
                          </a>
                        ) : (
                          <div className="text-heist-silver font-heist text-sm">
                            <p className="text-white/90">{card.content}</p>
                            {card.subContent && <p className="text-gray-500 text-[10px] mt-2 uppercase tracking-widest">{card.subContent}</p>}
                          </div>
                        )}
                      </div>

                      {/* Tactical Decoration */}
                      <div className="absolute bottom-2 right-2 text-[8px] font-heist text-heist-red/20 uppercase tracking-tighter">
                        HQ_DATA_CH_{index + 1}
                      </div>
                    </div>
                  </HUDBrackets>
                </motion.div>
              )
            })}
          </div>

          {/* Coordinators Dossier */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <HUDBrackets>
              <div className="bg-heist-charcoal/90 backdrop-blur-md border-t-4 border-heist-red p-10 md:p-16 shadow-2xl relative overflow-hidden group">
                {/* Grid Background */}
                <div className="absolute inset-0 bg-blueprint opacity-[0.05] pointer-events-none" />

                {/* Decorative Tape */}
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-heist-red text-white text-[10px] font-bold px-6 py-1.5 font-heist uppercase tracking-[0.3em] rotate-[-1deg] shadow-lg z-20">
                  Top Secret Personnel // Dossier
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 text-center md:text-left relative z-10">
                  {coordinators.map((coord, index) => (
                    <motion.div
                      key={coord.title}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.5 + index * 0.1 }}
                      className="relative group/coord"
                    >
                      <div className="absolute -inset-4 bg-heist-red/5 transform scale-0 group-hover/coord:scale-100 transition-transform duration-500 origin-center rounded-lg border border-heist-red/10" />

                      <div className="relative z-10">
                        <div className="flex items-center gap-3 mb-4 border-b border-heist-white/10 pb-3">
                          <h3 className="text-2xl font-black text-white font-display tracking-widest uppercase italic group-hover/coord:text-heist-red transition-colors">
                            {coord.title}
                          </h3>
                        </div>
                        <p className="text-heist-gold text-[10px] uppercase font-bold mb-6 tracking-[0.3em] flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-heist-gold rounded-full animate-pulse" />
                          Code Name: {coord.role}
                        </p>
                        <div className="space-y-4">
                          {coord.people.map((person, idx) => (
                            <div key={idx} className="flex flex-col">
                              <p className="text-white font-heist font-medium tracking-widest text-sm mb-1">
                                {person}
                              </p>
                              <div className="h-[1px] w-8 bg-heist-red/30 group-hover/coord:w-full transition-all duration-700" />
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-20 text-center pt-10 border-t border-heist-white/10 relative z-10">
                  <p className="text-heist-silver/40 font-heist text-[10px] uppercase tracking-[0.4em] flex items-center justify-center gap-3">
                    <AlertCircle className="w-4 h-4 text-heist-red animate-pulse" />
                    Authorized Intelligence Personnel Only [ACCESS_RESTRICTED]
                  </p>
                </div>
              </div>
            </HUDBrackets>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
