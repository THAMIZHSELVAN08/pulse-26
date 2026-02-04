import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import { Inter, Orbitron } from 'next/font/google'

const bodyFont = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-outfit',
})

const orbitron = Orbitron({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-orbitron',
})

export const metadata: Metadata = {
  title: "PULSE'26 - National Level Technical Symposium",
  description: 'A National Level Technical Symposium organized by the Department of Electrical and Electronics Engineering, SVCE',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${bodyFont.className} ${bodyFont.variable} ${orbitron.variable} font-sans bg-navy-950 text-white selection:bg-electric-500 selection:text-navy-950`}>
        {/* Global animated background elements for all pages */}
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          {/* Floating orbs */}
          <div className="bg-orb w-[420px] h-[420px] -top-40 -left-32" />
          <div className="bg-orb w-[420px] h-[420px] bottom-[-260px] right-[-180px]" style={{ animationDelay: '6s' }} />

          {/* Sweeping lines */}
          <div className="bg-line top-1/4 left-[-40%]" />
          <div className="bg-line bottom-1/4 left-[-60%]" style={{ animationDelay: '10s' }} />
        </div>

        <Navbar />
        <main className="pt-24">
          {children}
        </main>
      </body>
    </html>
  )
}
