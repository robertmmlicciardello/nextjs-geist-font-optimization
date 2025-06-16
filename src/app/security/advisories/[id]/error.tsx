'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function AdvisoryDetailError({
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
            Advisory Load Error
          </h1>
          
          <p className="text-gray-400 mb-6">
            We encountered an error while loading this security advisory. This could be due to:
          </p>
          
          <ul className="text-left text-gray-300 mb-8 space-y-2 max-w-md mx-auto">
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              Temporary service disruption
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              Advisory being updated
            </li>
            <li className="flex items-start">
              <span className="text-red-400 mr-2">•</span>
              Connection issues
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
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700"
            >
              Try Again
            </Button>
            
            <Link href="/security/advisories">
              <Button variant="outline" className="w-full sm:w-auto">
                View All Advisories
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

      {/* Recent Advisories */}
      <Card className="max-w-2xl mx-auto mt-8 p-6 bg-gray-800/50 border-gray-700">
        <h2 className="text-xl font-semibold mb-6 text-center">
          Recent Security Advisories
        </h2>
        <div className="space-y-4">
          {[
            {
              id: "VPN-2024-001",
              title: "Critical Update: OpenVPN Configuration Vulnerability",
              date: "January 15, 2024",
              severity: "Critical"
            },
            {
              id: "VPN-2023-005",
              title: "DNS Leak Prevention Update",
              date: "December 10, 2023",
              severity: "High"
            },
            {
              id: "VPN-2023-004",
              title: "Authentication Token Handling",
              date: "November 5, 2023",
              severity: "Medium"
            }
          ].map((advisory) => (
            <Link 
              key={advisory.id}
              href={`/security/advisories/${advisory.id}`}
            >
              <Card className="p-4 bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-sm font-mono text-gray-400">
                        {advisory.id}
                      </span>
                      <Badge className={
                        advisory.severity === 'Critical' ? 'bg-red-900/50 text-red-300' :
                        advisory.severity === 'High' ? 'bg-orange-900/50 text-orange-300' :
                        'bg-yellow-900/50 text-yellow-300'
                      }>
                        {advisory.severity}
                      </Badge>
                    </div>
                    <h3 className="font-semibold">{advisory.title}</h3>
                  </div>
                  <div className="text-sm text-gray-400">{advisory.date}</div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Card>

      {/* Alternative Actions */}
      <div className="max-w-2xl mx-auto mt-8">
        <h2 className="text-xl font-semibold mb-6 text-center">
          Alternative Actions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="p-4 bg-gray-800/50 border-gray-700">
            <Link href="/security/advisories/search" className="block text-center">
              <h3 className="font-semibold mb-2">Search</h3>
              <p className="text-sm text-gray-400">
                Find specific advisories
              </p>
            </Link>
          </Card>
          <Card className="p-4 bg-gray-800/50 border-gray-700">
            <Link href="/security/advisories/archive" className="block text-center">
              <h3 className="font-semibold mb-2">Archive</h3>
              <p className="text-sm text-gray-400">
                Browse historical records
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
          Need help accessing advisories?{" "}
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
