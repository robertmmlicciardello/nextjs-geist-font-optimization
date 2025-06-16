'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function SearchError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <div>
      {/* Error Message */}
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
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold mb-4">
            Search Error
          </h1>
          
          <p className="text-gray-400 mb-6">
            We encountered an error while performing your search. This could be due to:
          </p>
          
          <ul className="text-left text-gray-300 mb-8 space-y-2 max-w-md mx-auto">
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              A temporary search service disruption
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              Complex search query that needs simplification
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              Connection issues with our search service
            </li>
          </ul>

          {error.digest && (
            <p className="text-sm text-gray-500 mb-6">
              Error Reference: {error.digest}
            </p>
          )}

          {/* Quick Search */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Try a Simple Search</h2>
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
                Search Again
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/security/advisories">
              <Button variant="outline">
                View All Advisories
              </Button>
            </Link>

            <Link href="/security/advisories/archive">
              <Button variant="outline">
                Check Archive
              </Button>
            </Link>

            <Link href="/security/report">
              <Button variant="outline">
                Report Issue
              </Button>
            </Link>
          </div>
        </div>
      </Card>

      {/* Alternative Search Methods */}
      <div className="max-w-2xl mx-auto mt-8">
        <h2 className="text-xl font-semibold mb-6 text-center">
          Alternative Search Methods
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="p-4 bg-gray-800/50 border-gray-700">
            <Link href="/security/advisories" className="block text-center">
              <h3 className="font-semibold mb-2">Browse All</h3>
              <p className="text-sm text-gray-400">
                View complete list of advisories
              </p>
            </Link>
          </Card>
          <Card className="p-4 bg-gray-800/50 border-gray-700">
            <Link href="/security/advisories/archive" className="block text-center">
              <h3 className="font-semibold mb-2">Archive Search</h3>
              <p className="text-sm text-gray-400">
                Search historical advisories
              </p>
            </Link>
          </Card>
          <Card className="p-4 bg-gray-800/50 border-gray-700">
            <Link href="/security/advisories/rss" className="block text-center">
              <h3 className="font-semibold mb-2">RSS Feed</h3>
              <p className="text-sm text-gray-400">
                Subscribe to updates
              </p>
            </Link>
          </Card>
        </div>
      </div>

      {/* Search Tips */}
      <Card className="max-w-2xl mx-auto mt-8 p-6 bg-gray-800/50 border-gray-700">
        <h2 className="text-xl font-semibold mb-4 text-center">Search Tips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Effective Searching</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Use specific keywords</li>
              <li>• Try advisory IDs directly</li>
              <li>• Keep search terms simple</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Common Searches</h3>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>• Latest critical updates</li>
              <li>• Recent security patches</li>
              <li>• Version-specific fixes</li>
            </ul>
          </div>
        </div>
      </Card>

      {/* Help Section */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>
          Need help with your search?{" "}
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
