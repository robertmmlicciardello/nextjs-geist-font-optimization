'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function ArchiveError({
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
            Archive Access Error
          </h1>
          
          <p className="text-gray-400 mb-6">
            We encountered an error while accessing the security advisories archive. This could be due to:
          </p>
          
          <ul className="text-left text-gray-300 mb-8 space-y-2 max-w-md mx-auto">
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              Temporary archive service disruption
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              Archive maintenance or updates
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              Connection issues with our archive service
            </li>
          </ul>

          {error.digest && (
            <p className="text-sm text-gray-500 mb-6">
              Error Reference: {error.digest}
            </p>
          )}

          {/* Quick Search */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Try Finding Recent Advisories</h2>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input
                type="search"
                placeholder="Enter advisory ID or keyword..."
                className="bg-gray-700/50 border-gray-600"
              />
              <Button
                onClick={reset}
                className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap"
              >
                Search
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              onClick={reset}
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
            >
              Retry Archive Access
            </Button>
            
            <Link href="/security/advisories">
              <Button variant="outline" className="w-full sm:w-auto">
                Current Advisories
              </Button>
            </Link>

            <Link href="/security/report">
              <Button variant="outline" className="w-full sm:w-auto">
                Report Issue
              </Button>
            </Link>
          </div>
        </div>
      </Card>

      {/* Alternative Access */}
      <div className="max-w-2xl mx-auto mt-8">
        <h2 className="text-xl font-semibold mb-6 text-center">
          Alternative Access Methods
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="p-4 bg-gray-800/50 border-gray-700">
            <Link href="/security/advisories/rss" className="block text-center">
              <h3 className="font-semibold mb-2">RSS Feed</h3>
              <p className="text-sm text-gray-400">
                Access via RSS feed
              </p>
            </Link>
          </Card>
          <Card className="p-4 bg-gray-800/50 border-gray-700">
            <Link href="/security/advisories/search" className="block text-center">
              <h3 className="font-semibold mb-2">Search</h3>
              <p className="text-sm text-gray-400">
                Search all advisories
              </p>
            </Link>
          </Card>
          <Card className="p-4 bg-gray-800/50 border-gray-700">
            <Link href="/security/advisories/api" className="block text-center">
              <h3 className="font-semibold mb-2">API</h3>
              <p className="text-sm text-gray-400">
                Programmatic access
              </p>
            </Link>
          </Card>
        </div>
      </div>

      {/* Download Options */}
      <Card className="max-w-2xl mx-auto mt-8 p-6 bg-gray-800/50 border-gray-700">
        <div className="text-center">
          <h2 className="text-xl font-semibold mb-6">Download Archive</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Button variant="outline" className="w-full">
              CSV Format
            </Button>
            <Button variant="outline" className="w-full">
              JSON Format
            </Button>
            <Button variant="outline" className="w-full">
              PDF Report
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-400">
            Archives are digitally signed and include SHA-256 checksums
          </p>
        </div>
      </Card>

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

      {/* Help Section */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>
          Need help accessing archived advisories?{" "}
          <Link 
            href="/contact" 
            className="text-blue-400 hover:text-blue-300"
          >
            Contact our security team
          </Link>
        </p>
      </div>
    </div>
  )
}
