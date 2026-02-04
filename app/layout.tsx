import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import { Outfit, Orbitron } from 'next/font/google'

const outfit = Outfit({
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
      <body className={`${outfit.className} ${outfit.variable} ${orbitron.variable} font-sans bg-navy-950 text-white selection:bg-electric-500 selection:text-navy-950`}>
        <Navbar />
        <main className="pt-20">
          {children}
        </main>
      </body>
    </html>
  )
}
