import Link from 'next/link'
import BackToHome from '@/components/BackToHome'

export default function NotFound() {
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <BackToHome />
        <h1 className="text-6xl font-bold text-neon-blue mb-4">404</h1>
        <p className="text-2xl text-gray-300 mb-8">Event not found</p>
        <Link
          href="/events"
          className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-neon-blue to-neon-cyan text-dark-bg font-bold rounded-lg hover-glow transition-all"
        >
          View All Events
        </Link>
      </div>
    </div>
  )
}
