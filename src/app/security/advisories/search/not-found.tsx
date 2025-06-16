import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function SearchNotFound() {
  return (
    <div>
      <Card className="max-w-2xl mx-auto p-8 bg-gray-800/50 border-gray-700">
        <div className="text-center">
          <div className="inline-block p-3 rounded-full bg-yellow-900/50 mb-6">
            <svg
              className="w-8 h-8 text-yellow-400"
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
            No Results Found
          </h1>
          
          <p className="text-gray-400 mb-6">
            We couldn't find any security advisories matching your search. Try:
          </p>
          
          <ul className="text-left text-gray-300 mb-8 space-y-2 max-w-md mx-auto">
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              Checking for typos in your search
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              Using more general keywords
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              Searching by advisory ID or version number
            </li>
          </ul>

          {/* Quick Search */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Try Another Search</h2>
            <div className="flex gap-2 max-w-md mx-auto">
              <Input
                type="search"
                placeholder="Enter advisory ID or keyword..."
                className="bg-gray-700/50 border-gray-600"
              />
              <Link href="/security/advisories/search">
                <Button className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">
                  Search
                </Button>
              </Link>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/security/advisories">
              <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                View All Advisories
              </Button>
            </Link>
            
            <Link href="/security/advisories/archive">
              <Button variant="outline" className="w-full sm:w-auto">
                Browse Archive
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

      {/* Search Tips */}
      <Card className="max-w-2xl mx-auto mt-8 p-6 bg-gray-800/50 border-gray-700">
        <h2 className="text-xl font-semibold mb-6 text-center">Search Tips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div>
            <h3 className="font-semibold mb-2">Advisory IDs</h3>
            <p className="text-sm text-gray-400">
              Use format VPN-YYYY-NNN (e.g., VPN-2024-001)
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Version Numbers</h3>
            <p className="text-sm text-gray-400">
              Search specific versions using v*.*.* format
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Keywords</h3>
            <p className="text-sm text-gray-400">
              Use quotes for exact phrase matches
            </p>
          </div>
        </div>
      </Card>

      {/* Alternative Methods */}
      <div className="max-w-2xl mx-auto mt-8">
        <h2 className="text-xl font-semibold mb-6 text-center">
          Alternative Ways to Find Advisories
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <Card className="p-4 bg-gray-800/50 border-gray-700">
            <Link href="/security/advisories/rss" className="block text-center">
              <h3 className="font-semibold mb-2">RSS Feed</h3>
              <p className="text-sm text-gray-400">
                Subscribe to updates
              </p>
            </Link>
          </Card>
          <Card className="p-4 bg-gray-800/50 border-gray-700">
            <Link href="/security/advisories/api" className="block text-center">
              <h3 className="font-semibold mb-2">API Access</h3>
              <p className="text-sm text-gray-400">
                Programmatic search
              </p>
            </Link>
          </Card>
          <Card className="p-4 bg-gray-800/50 border-gray-700">
            <Link href="/security/advisories/archive" className="block text-center">
              <h3 className="font-semibold mb-2">Archive</h3>
              <p className="text-sm text-gray-400">
                Browse by year
              </p>
            </Link>
          </Card>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>
          Can't find what you're looking for?{" "}
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
