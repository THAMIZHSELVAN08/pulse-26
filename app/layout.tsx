import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import ScrollProgress from '@/components/ScrollProgress'
import PageTransition from '@/components/PageTransition'
import { Special_Elite, Bebas_Neue } from 'next/font/google'
import Script from 'next/script'

const bodyFont = Special_Elite({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-special-elite',
})

const displayFont = Bebas_Neue({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-bebas-neue',
})

export const metadata: Metadata = {
  title: "PULSE'26 - The Heist",
  description: 'Join the Resistance. The biggest technical symposium by SVCE EEE.',
  icons: {
    icon: '/images/logo3.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      {/* Google Analytics */}
      <Script
        strategy="afterInteractive"
        src="https://www.googletagmanager.com/gtag/js?id=G-8LLBDKWZ1P"
      />
      <Script
        id="google-analytics"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-8LLBDKWZ1P');
          `,
        }}
      />
      <body className={`${bodyFont.className} ${bodyFont.variable} ${displayFont.variable} font-sans bg-heist-black text-heist-white selection:bg-heist-red selection:text-white overflow-x-hidden`}>
        {/* Money Heist Background */}
        <div className="fixed inset-0 -z-10 bg-heist-black pointer-events-none">
          {/* Blueprint Grid Pattern */}
          <div className="absolute inset-0 bg-blueprint opacity-20" />

          {/* Noise Overlay */}
          <div className="absolute inset-0 noise-overlay" />

          {/* Scanlines */}
          <div className="absolute inset-0 scanline opacity-[0.03]" />

          {/* Vignette Overlay */}
          <div className="absolute inset-0 bg-radial-gradient from-transparent to-black opacity-80" />

          {/* Red Ambient Glow */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-heist-red/5 to-transparent pointer-events-none" />
        </div>

        <Navbar />
        <ScrollProgress />
        <main className="min-h-screen">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
      </body>
    </html>
  )
}
