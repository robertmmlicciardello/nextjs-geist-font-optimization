import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function AdvisoriesNotFound() {
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
            Security Section Not Found
          </h1>
          
          <p className="text-gray-400 mb-8">
            The security section you're looking for doesn't exist. This could be because:
          </p>
          
          <ul className="text-left text-gray-300 mb-8 space-y-2 max-w-md mx-auto">
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              The URL might be incorrect
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              The section might have been moved or renamed
            </li>
            <li className="flex items-start">
              <span className="text-yellow-400 mr-2">•</span>
              You might not have permission to access this section
            </li>
          </ul>

          {/* Search Box */}
          <div className="mb-8">
            <h2 className="text-lg font-semibold mb-4">
              Search Security Resources
            </h2>
            <div className="flex gap-2">
              <Input
                type="search"
                placeholder="Search advisories, guides, or documentation..."
                className="bg-gray-700/50 border-gray-600"
              />
              <Button className="bg-blue-600 hover:bg-blue-700 whitespace-nowrap">
                Search
              </Button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link href="/security">
              <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                Security Overview
              </Button>
            </Link>
            
            <Link href="/security/advisories">
              <Button variant="outline" className="w-full sm:w-auto">
                Latest Advisories
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

      {/* Quick Links */}
      <div className="max-w-2xl mx-auto mt-8">
        <h2 className="text-xl font-semibold mb-6 text-center">
          Popular Security Resources
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          <Card className="p-4 bg-gray-800/50 border-gray-700">
            <Link href="/security/bug-bounty" className="block text-center">
              <h3 className="font-semibold mb-2">Bug Bounty Program</h3>
              <p className="text-sm text-gray-400">
                Help us improve security
              </p>
            </Link>
          </Card>
          <Card className="p-4 bg-gray-800/50 border-gray-700">
            <Link href="/security/pgp-key" className="block text-center">
              <h3 className="font-semibold mb-2">PGP Key</h3>
              <p className="text-sm text-gray-400">
                Secure communications
              </p>
            </Link>
          </Card>
          <Card className="p-4 bg-gray-800/50 border-gray-700">
            <Link href="/security/whitepaper" className="block text-center">
              <h3 className="font-semibold mb-2">Security Whitepaper</h3>
              <p className="text-sm text-gray-400">
                Technical documentation
              </p>
            </Link>
          </Card>
        </div>
      </div>

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
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        advisory.severity === 'Critical' ? 'bg-red-900/50 text-red-300' :
                        advisory.severity === 'High' ? 'bg-orange-900/50 text-orange-300' :
                        'bg-yellow-900/50 text-yellow-300'
                      }`}>
                        {advisory.severity}
                      </span>
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

      {/* Help Section */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>
          Need help finding something specific?{" "}
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
