'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function AdvisoriesError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      <Card className="max-w-2xl mx-auto p-8 bg-gray-800/50 border-gray-700">
        <div className="text-center">
          <div className="inline-block p-3 rounded-full bg-red-900/50 mb-6">
            <svg
              className="w-8 h-8 text-red-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
              />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold mb-4">
            Unable to Load Security Advisories
          </h1>
          
          <p className="text-gray-400 mb-6">
            We encountered an error while trying to load the security advisories. This could be due to:
          </p>
          
          <ul className="text-left text-gray-300 mb-8 space-y-2 max-w-md mx-auto">
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              A temporary system issue
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              Network connectivity problems
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              Server maintenance
            </li>
          </ul>

          {error.digest && (
            <p className="text-sm text-gray-500 mb-6">
              Error Reference: {error.digest}
            </p>
          )}

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={reset}
              className="bg-blue-600 hover:bg-blue-700"
            >
              Try Again
            </Button>
            
            <Link href="/security">
              <Button variant="outline">
                Security Overview
              </Button>
            </Link>

            <Link href="/security/report">
              <Button variant="outline">
                Report Issue
              </Button>
            </Link>
          </div>

          <div className="mt-8 text-sm text-gray-400">
            <p>
              Need assistance?{" "}
              <Link 
                href="/contact" 
                className="text-blue-400 hover:text-blue-300"
              >
                Contact our security team
              </Link>
            </p>
          </div>
        </div>
      </Card>

      {/* Alternative Actions */}
      <div className="max-w-2xl mx-auto mt-8">
        <h2 className="text-xl font-semibold mb-6 text-center">
          Alternative Security Resources
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="p-4 bg-gray-800/50 border-gray-700">
            <Link href="/security/whitepaper" className="block text-center">
              <h3 className="font-semibold mb-2">Security Whitepaper</h3>
              <p className="text-sm text-gray-400">
                Learn about our security practices
              </p>
            </Link>
          </Card>
          <Card className="p-4 bg-gray-800/50 border-gray-700">
            <Link href="/security/bug-bounty" className="block text-center">
              <h3 className="font-semibold mb-2">Bug Bounty Program</h3>
              <p className="text-sm text-gray-400">
                Help improve our security
              </p>
            </Link>
          </Card>
          <Card className="p-4 bg-gray-800/50 border-gray-700">
            <Link href="/security/transparency" className="block text-center">
              <h3 className="font-semibold mb-2">Transparency Report</h3>
              <p className="text-sm text-gray-400">
                View our security metrics
              </p>
            </Link>
          </Card>
        </div>
      </div>

      {/* Status Updates */}
      <Card className="max-w-2xl mx-auto mt-8 p-6 bg-gray-800/50 border-gray-700">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-4">
            Check System Status
          </h2>
          <p className="text-gray-400 mb-6">
            View our system status page for any ongoing issues or maintenance
          </p>
          <Link href="/status">
            <Button className="bg-blue-600 hover:bg-blue-700">
              View Status Page
            </Button>
          </Link>
        </div>
      </Card>

      {/* RSS Feed Alternative */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>
          Want to stay updated?{" "}
          <Link 
            href="/security/advisories/rss"
            className="text-blue-400 hover:text-blue-300"
          >
            Subscribe to our RSS feed
          </Link>
          {" "}for security advisory notifications.
        </p>
      </div>
    </div>
  )
}
