import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0a0a0f] flex items-center justify-center px-6">
      <div className="text-center">
        <div className="text-8xl font-bold text-[#6c63ff]/20 mb-4">404</div>
        <h1 className="text-2xl font-bold text-white mb-3">Page not found</h1>
        <p className="text-[#71717a] mb-8 max-w-md">
          This page doesn't exist or has been moved. Let's get you back on track.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="https://emvy-website.vercel.app"
            className="px-6 py-3 bg-[#6c63ff] hover:bg-[#5a52d5] text-white font-semibold rounded-lg transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="https://emvy-booking.vercel.app"
            className="px-6 py-3 bg-[#1e1e2e] hover:bg-[#2e2e3e] text-white font-semibold rounded-lg transition-colors"
          >
            Book a Discovery Call
          </Link>
        </div>
      </div>
    </div>
  )
}
