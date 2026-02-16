'use client'

import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Download, ExternalLink, Shield, Terminal, Zap, Star, Target, Activity } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import HUDBrackets from '@/components/HUDBrackets'
import ScrambleText from '@/components/ScrambleText'
import CircuitBackground from '@/components/CircuitBackground'

export default function RegisterPage() {
  const benefits = [
    { icon: Zap, title: "Mission XP", desc: "Gain 500+ XP towards your technical career dossier.", color: "heist-red" },
    { icon: Activity, title: "Real-time Ops", desc: "Execute strategies in live-action technical missions.", color: "heist-gold" },
    { icon: Target, title: "Elite Network", desc: "Connect with the most skilled operatives in the grid.", color: "heist-white" },
    { icon: Shield, title: "Certification", desc: "Proof of successful mission deployment from SVCE.", color: "heist-red" }
  ]

  const steps = [
    { number: "01", title: "Scan ID", desc: "Use your device to scan the secure QR" },
    { number: "02", title: "Input Data", desc: "Complete the recruitment form" },
    { number: "03", title: "Await Signal", desc: "Receive mission confirmation" }
  ]

  return (
    <div className="min-h-screen bg-heist-black text-heist-white font-sans relative overflow-x-hidden">
      <CircuitBackground />

      {/* Background Atmosphere */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-heist-red/[0.08] via-transparent to-transparent" />
        <div className="absolute top-0 right-0 w-1/2 h-screen opacity-10 blur-3xl bg-heist-red/20 -z-10" />
      </div>

      {/* The Professor - Subtle Presence */}
      <div className="fixed right-0 bottom-0 w-1/3 h-2/3 pointer-events-none opacity-[0.03] z-0">
        <Image
          src="/professor.jpg"
          alt="The Professor"
          fill
          className="object-cover object-center grayscale contrast-150 brightness-50"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-heist-black via-transparent to-transparent" />
      </div>

      {/* CRT Flicker Overlay */}
      <div className="fixed inset-0 pointer-events-none z-50 bg-[rgba(18,16,16,0)] opacity-[0.02] animate-[flicker_0.15s_infinite]" />

      <div className="relative z-10 py-12 px-6 md:px-12 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Button asChild variant="ghost" className="text-heist-silver hover:text-white hover:bg-heist-red/10 gap-2 font-display uppercase tracking-widest group border border-transparent hover:border-heist-red/20">
            <Link href="/">
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Return to Base
            </Link>
          </Button>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info & Recruitment Details */}
          <div className="space-y-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div className="inline-flex items-center gap-3 px-4 py-1.5 bg-heist-red/10 border border-heist-red/30 font-heist text-[10px] tracking-[0.5em] text-heist-red uppercase">
                <Shield className="w-3 h-3 animate-pulse" />
                SECURE_ENROLLMENT_PROTOCOL_v2.6
              </div>
              <h1 className="text-7xl md:text-9xl font-black font-display italic tracking-normal uppercase leading-[0.85] mb-4">
                JOIN THE <br />
                <span className="text-heist-red drop-shadow-[0_0_30px_rgba(226,35,26,0.4)]">RESISTANCE</span>
              </h1>
              <p className="text-heist-silver font-heist text-base md:text-lg leading-relaxed max-w-xl opacity-80 border-l-2 border-heist-red/30 pl-6">
                The vault is ready. We need your technical expertise to breach the systems.
                Configure your squad and register for the ultimate operation.
              </p>
            </motion.div>

            {/* Benefits Grid */}
            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, i) => (
                <motion.div
                  key={benefit.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                >
                  <HUDBrackets>
                    <div className="bg-heist-charcoal/30 backdrop-blur-md border border-heist-red/10 p-6 space-y-3 group hover:border-heist-red/40 transition-all h-full flex flex-col justify-between">
                      <div>
                        <benefit.icon className={`w-8 h-8 mb-4 text-heist-red group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(226,35,26,0.2)]`} />
                        <h3 className="text-xl font-display uppercase tracking-widest text-white mb-2">{benefit.title}</h3>
                        <p className="text-[11px] text-heist-silver/60 font-heist uppercase tracking-wider leading-relaxed">{benefit.desc}</p>
                      </div>
                      <div className="pt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="h-[1px] w-full bg-gradient-to-r from-heist-red/40 to-transparent" />
                      </div>
                    </div>
                  </HUDBrackets>
                </motion.div>
              ))}
            </div>

            {/* Steps Container */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-heist-black/40 backdrop-blur-md border border-heist-white/5 p-8 md:p-10 space-y-10 relative overflow-hidden group shadow-2xl"
            >
              <div className="absolute inset-0 bg-blueprint opacity-[0.03] pointer-events-none" />
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-display uppercase tracking-[0.4em] text-heist-red italic">Recruitment Sequence</h3>
                <div className="text-[10px] font-heist text-heist-silver/20 animate-pulse">AUTH_LVL: ALPHA</div>
              </div>
              <div className="space-y-10 relative z-10">
                {steps.map((step, i) => (
                  <div key={step.title} className="flex gap-8 group/step">
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-none border border-heist-red flex items-center justify-center font-display text-heist-red text-xl group-hover/step:bg-heist-red group-hover/step:text-white transition-all duration-300 shadow-[0_0_15px_rgba(226,35,26,0.2)]">
                        {step.number}
                      </div>
                      {i < steps.length - 1 && <div className="w-[1px] h-full bg-gradient-to-b from-heist-red to-transparent my-4 opacity-30" />}
                    </div>
                    <div className="space-y-2 py-1">
                      <h4 className="text-white font-display text-2xl tracking-widest uppercase italic group-hover/step:text-heist-red transition-colors">{step.title}</h4>
                      <p className="text-heist-silver/50 font-heist text-xs uppercase tracking-[0.2em] leading-relaxed max-w-sm">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Decorative Corner */}
              <div className="absolute top-0 right-0 w-16 h-16 bg-heist-red/10 clip-path-triangle opacity-20" />
            </motion.div>
          </div>

          {/* Right: QR Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="lg:sticky lg:top-24"
          >
            <HUDBrackets>
              <div className="bg-gradient-to-br from-heist-charcoal/95 to-heist-black p-1 md:p-16 relative overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)] group/qr border border-heist-white/5">
                {/* Visual Flair */}
                <div className="absolute inset-0 bg-blueprint opacity-[0.08] pointer-events-none" />
                <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-heist-red to-transparent opacity-50" />

                <div className="relative z-10 text-center space-y-12">
                  <div className="space-y-4">
                    <p className="text-[10px] font-heist text-heist-red font-black tracking-[0.8em] uppercase animate-pulse">
                      AUTHENTICATION_REQUIRED
                    </p>
                    <h2 className="text-5xl md:text-7xl font-black font-display uppercase italic tracking-tighter text-white drop-shadow-lg">
                      OFFICIAL <span className="text-heist-red">ENROLLMENT</span>
                    </h2>
                  </div>

                  {/* QR Presentation */}
                  <div className="relative max-w-sm mx-auto p-2 bg-gradient-to-br from-heist-red/20 to-transparent border border-heist-white/10 group-hover/qr:border-heist-red/50 transition-all duration-700 shadow-3xl">
                    {/* Scanning Bar Animation */}
                    <div className="absolute inset-0 z-20 pointer-events-none opacity-0 group-hover/qr:opacity-100 transition-opacity duration-700">
                      <div className="absolute top-0 left-0 w-full h-[4px] bg-heist-red shadow-[0_0_25px_#E2231A] animate-[scan_3s_linear_infinite]" />
                    </div>

                    <div className="aspect-square relative flex items-center justify-center p-4 bg-white rounded-none overflow-hidden">
                      <Image
                        src="/images/registerqr.png"
                        alt="Registration QR"
                        width={400}
                        height={400}
                        className="w-full h-full object-contain mix-blend-multiply transition-transform duration-700 group-hover/qr:scale-105"
                      />

                      {/* Scanning HUD Overlay */}
                      <div className="absolute inset-0 border-[20px] border-black/5 pointer-events-none" />
                      <div className="absolute top-4 left-4 w-4 h-4 border-t-2 border-l-2 border-heist-red opacity-40" />
                      <div className="absolute bottom-4 right-4 w-4 h-4 border-b-2 border-r-2 border-heist-red opacity-40" />
                    </div>

                    {/* Corner Technical Decor */}
                    <div className="absolute -top-4 -left-4 w-12 h-12 border-t font-heist text-[8px] text-heist-red pl-1 pt-1">
                      NODE_44
                    </div>
                  </div>

                  <div className="space-y-8">
                    <div className="bg-heist-red/5 border border-heist-red/30 p-6 flex items-center gap-6 relative group/channel overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-heist-red/10 to-transparent -translate-x-full group-hover/channel:translate-x-full transition-transform duration-1000" />
                      <div className="w-12 h-12 border border-heist-red/50 flex items-center justify-center bg-heist-black relative z-10">
                        <Terminal className="text-heist-red w-6 h-6 animate-pulse" />
                      </div>
                      <div className="text-left relative z-10">
                        <p className="text-[10px] font-heist text-heist-red font-black tracking-[0.2em] uppercase">DIRECT_ACCESS_CHANNEL</p>
                        <p className="text-white font-heist text-xs uppercase tracking-widest break-all font-bold">svce.pulse26.protocol.v1</p>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6">
                      <Button asChild className="bg-heist-red hover:bg-heist-darkRed text-white rounded-none font-display tracking-[0.2em] uppercase py-8 h-auto shadow-[8px_8px_0_rgba(179,0,0,0.3)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                        <a href="https://forms.gle/9562vEghgWp1o9uX6" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-lg">
                          <ExternalLink className="w-5 h-5" />
                          Apply Now
                        </a>
                      </Button>
                      <Button asChild variant="outline" className="border-heist-white/20 text-white rounded-none font-display tracking-[0.2em] uppercase py-8 h-auto hover:bg-white hover:text-black transition-all shadow-[8px_8px_0_rgba(255,255,255,0.05)] hover:shadow-none hover:translate-x-1 hover:translate-y-1">
                        <a href="/Pulse'26 Rulebook.pdf" download="Pulse26_Rulebook.pdf" className="flex items-center gap-3 text-lg">
                          <Download className="w-5 h-5" />
                          Get Rulebook
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* System Status Display */}
                  <div className="pt-8 border-t border-heist-white/10 flex items-center justify-between text-[10px] font-heist text-heist-silver/40 uppercase tracking-[0.5em]">
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 bg-heist-red rounded-full animate-ping shadow-[0_0_8px_#E2231A]" />
                      LINK_STATE: SECURE_V3
                    </div>
                    <div className="flex gap-4">
                      <span>LAT: 12.9126° N</span>
                      <span>LON: 79.9436° E</span>
                    </div>
                  </div>
                </div>
              </div>
            </HUDBrackets>
          </motion.div>
        </div>
      </div>

      {/* Footer Decoration */}
      <div className="mt-32 border-t border-heist-white/5 py-16 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-heist-red/[0.04] to-transparent pointer-events-none" />
        <div className="relative z-10 space-y-6">
          <div className="flex justify-center gap-8 mb-4">
            {[1, 2, 3, 4, 5].map(i => (
              <div key={i} className="w-1 h-3 bg-heist-red/20 skew-x-12" />
            ))}
          </div>
          <p className="text-xs font-heist text-heist-silver/30 tracking-[1.5em] uppercase">END_OF_RECRUITMENT_PROTOCOL</p>
          <div className="text-[10px] font-heist text-heist-red animate-pulse tracking-[0.5em]">SYSTEM_WAITING_FOR_SQUAD_INPUT...</div>
        </div>
      </div>
    </div>
  )
}
