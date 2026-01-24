'use client'

import { motion } from 'framer-motion'
import BackToHome from '@/components/BackToHome'
import { Instagram, Building2, GraduationCap, Calendar } from 'lucide-react'

export default function ContactPage() {
  const contactCards = [
    {
      icon: Building2,
      title: 'College',
      content: 'Sri Venkateswara College of Engineering',
      color: 'from-neon-blue to-neon-cyan',
    },
    {
      icon: GraduationCap,
      title: 'Department',
      content: 'Electrical and Electronics Engineering',
      color: 'from-neon-cyan to-neon-blue',
    },
    {
      icon: Instagram,
      title: 'Instagram',
      content: '@aeee.svce',
      link: 'https://instagram.com/aeee.svce',
      color: 'from-neon-purple to-neon-blue',
    },
    {
      icon: Calendar,
      title: 'Date',
      content: '19 February 2026',
      color: 'from-neon-blue to-neon-purple',
    },
  ]

  const coordinators = [
    {
      title: 'AEEE Coordinators',
      people: [
        'MR. S. SUDHARSANAM, ASST.PROF',
        'MR. N. SURESH, ASST.PROF',
      ],
    },
    {
      title: 'Convenor',
      people: [
        'DR. SUDHAKAR K B',
        'HOD/EEE',
      ],
    },
    {
      title: 'Student Coordinators',
      people: [
        'HARIKRISHNAN S',
        'SAKTHIVEL V',
      ],
    },
  ]

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <BackToHome />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4">
            <span className="bg-gradient-to-r from-neon-blue to-neon-cyan bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="text-xl text-gray-300">
            Get in touch with us for any queries
          </p>
        </motion.div>

        {/* Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {contactCards.map((card, index) => {
            const Icon = card.icon
            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="glass rounded-xl p-6 neon-border hover-glow"
              >
                <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${card.color} flex items-center justify-center mb-4`}>
                  <Icon className="w-6 h-6 text-dark-bg" />
                </div>
                <h3 className="text-lg font-bold text-neon-blue mb-2">
                  {card.title}
                </h3>
                {card.link ? (
                  <a
                    href={card.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-neon-blue transition-colors"
                  >
                    {card.content}
                  </a>
                ) : (
                  <p className="text-gray-300">{card.content}</p>
                )}
              </motion.div>
            )
          })}
        </div>

        {/* Coordinators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="glass rounded-xl p-8 neon-border"
        >
          <h2 className="text-3xl font-bold text-neon-blue mb-8 text-center">
            Event Coordinators
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {coordinators.map((coord, index) => (
              <motion.div
                key={coord.title}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="text-center"
              >
                <h3 className="text-xl font-bold text-neon-cyan mb-4">
                  {coord.title}
                </h3>
                <div className="space-y-2">
                  {coord.people.map((person, idx) => (
                    <p key={idx} className="text-gray-300">
                      {person}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  )
}
