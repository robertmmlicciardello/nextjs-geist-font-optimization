import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"

export default function ArchiveNotFound() {
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
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
          
          <h1 className="text-2xl font-bold mb-4">
            Archive Section Not Found
          </h1>
          
          <p className="text-gray-400 mb-6">
            The archive section you're looking for doesn't exist. You can still access our security advisories through:
          </p>

          {/* Quick Search */}
          <div className="mb-8">
            <div className="flex gap-2 max-w-md mx-auto">
              <Input
                type="search"
                placeholder="Search advisories..."
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
                Current Advisories
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

      {/* Recent Archives */}
      <div className="max-w-2xl mx-auto mt-8">
        <h2 className="text-xl font-semibold mb-6 text-center">
          Recent Archive Entries
        </h2>
        <div className="space-y-4">
          {[
            {
              id: "VPN-2023-003",
              title: "Session Management Update",
              date: "October 1, 2023",
              severity: "Medium"
            },
            {
              id: "VPN-2023-002",
              title: "Connection Handling Improvement",
              date: "July 15, 2023",
              severity: "Low"
            },
            {
              id: "VPN-2023-001",
              title: "Protocol Security Enhancement",
              date: "March 20, 2023",
              severity: "High"
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
                        advisory.severity === 'High' ? 'bg-orange-900/50 text-orange-300' :
                        advisory.severity === 'Medium' ? 'bg-yellow-900/50 text-yellow-300' :
                        'bg-blue-900/50 text-blue-300'
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
      </div>

      {/* Archive Categories */}
      <Card className="max-w-2xl mx-auto mt-8 p-6 bg-gray-800/50 border-gray-700">
        <h2 className="text-xl font-semibold mb-6 text-center">
          Browse by Category
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <Link href="/security/advisories/archive?year=2023">
            <Card className="p-4 bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors text-center">
              <h3 className="font-semibold">2023</h3>
              <p className="text-sm text-gray-400">45 advisories</p>
            </Card>
          </Link>
          <Link href="/security/advisories/archive?year=2022">
            <Card className="p-4 bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors text-center">
              <h3 className="font-semibold">2022</h3>
              <p className="text-sm text-gray-400">38 advisories</p>
            </Card>
          </Link>
          <Link href="/security/advisories/archive?year=2021">
            <Card className="p-4 bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors text-center">
              <h3 className="font-semibold">2021</h3>
              <p className="text-sm text-gray-400">42 advisories</p>
            </Card>
          </Link>
          <Link href="/security/advisories/archive?year=2020">
            <Card className="p-4 bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors text-center">
              <h3 className="font-semibold">2020</h3>
              <p className="text-sm text-gray-400">35 advisories</p>
            </Card>
          </Link>
        </div>
      </Card>

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

      {/* Help Section */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>
          Need help finding archived advisories?{" "}
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
