import { Metadata, Viewport } from 'next'

export const metadata: Metadata = {
  title: 'Page Not Found | OPLERA',
  description: 'Sorry, the page you’re looking for does not exist.',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#0A1B3D',
}

export default function NotFound() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center text-center p-8">
      <h1 className="text-5xl font-bold text-oplera-cyan mb-4">404</h1>
      <p className="text-lg text-gray-300 mb-8">
        The page you’re looking for doesn’t exist.
      </p>
      <a
        href="/"
        className="px-6 py-3 bg-oplera-cyan text-oplera-navy font-semibold rounded-lg hover:scale-105 transition-all"
      >
        Back to Home
      </a>
    </main>
  )
}
