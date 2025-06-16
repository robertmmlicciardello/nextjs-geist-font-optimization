import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function AdvisoryNotFound() {
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
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M12 12h.01M12 14h.01M12 16h.01M12 18h.01M12 20h.01M12 22h.01"
              />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold mb-4">
            Advisory Not Found
          </h1>
          
          <p className="text-gray-400 mb-6">
            The security advisory you're looking for doesn't exist. This could be because:
          </p>
          
          <ul className="text-left text-gray-300 mb-8 space-y-2 max-w-md mx-auto">
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              The advisory ID might be incorrect
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              The advisory might have been moved to the archive
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              The advisory might have been consolidated with another
            </li>
          </ul>

          {/* Quick Search */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">Search Advisories</h2>
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
                Check Archive
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
          Latest Security Advisories
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

      {/* Browse Categories */}
      <div className="max-w-2xl mx-auto mt-8">
        <h2 className="text-xl font-semibold mb-6 text-center">
          Browse by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <Card className="p-4 bg-gray-800/50 border-gray-700">
            <Link href="/security/advisories?severity=critical" className="block text-center">
              <div className="p-2 rounded-full bg-red-900/50 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <span className="text-red-300 text-xl">!</span>
              </div>
              <h3 className="font-semibold mb-2">Critical</h3>
              <p className="text-sm text-gray-400">
                High-priority fixes
              </p>
            </Link>
          </Card>
          <Card className="p-4 bg-gray-800/50 border-gray-700">
            <Link href="/security/advisories?type=patch" className="block text-center">
              <div className="p-2 rounded-full bg-green-900/50 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <span className="text-green-300 text-xl">✓</span>
              </div>
              <h3 className="font-semibold mb-2">Patches</h3>
              <p className="text-sm text-gray-400">
                Latest updates
              </p>
            </Link>
          </Card>
          <Card className="p-4 bg-gray-800/50 border-gray-700">
            <Link href="/security/advisories?status=investigating" className="block text-center">
              <div className="p-2 rounded-full bg-blue-900/50 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <span className="text-blue-300 text-xl">?</span>
              </div>
              <h3 className="font-semibold mb-2">Active</h3>
              <p className="text-sm text-gray-400">
                Under investigation
              </p>
            </Link>
          </Card>
          <Card className="p-4 bg-gray-800/50 border-gray-700">
            <Link href="/security/advisories/archive" className="block text-center">
              <div className="p-2 rounded-full bg-gray-700/50 w-12 h-12 mx-auto mb-3 flex items-center justify-center">
                <span className="text-gray-300 text-xl">⌛</span>
              </div>
              <h3 className="font-semibold mb-2">Archive</h3>
              <p className="text-sm text-gray-400">
                Historical records
              </p>
            </Link>
          </Card>
        </div>
      </div>

      {/* Help Section */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>
          Need help finding an advisory?{" "}
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
