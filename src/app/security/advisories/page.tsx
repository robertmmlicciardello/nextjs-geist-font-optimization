import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

type Severity = 'Critical' | 'High' | 'Medium' | 'Low'
type Status = 'Patched' | 'In Progress' | 'Investigating'

interface Advisory {
  id: string
  date: string
  title: string
  severity: Severity
  status: Status
  description: string
}

// Mock data - in production this would come from an API
const advisories: Advisory[] = [
  {
    id: "VPN-2024-001",
    date: "January 15, 2024",
    title: "Critical Update: OpenVPN Configuration Vulnerability",
    severity: "Critical",
    status: "Patched",
    description: "A vulnerability in the OpenVPN configuration parser could allow remote code execution."
  },
  {
    id: "VPN-2023-005",
    date: "December 10, 2023",
    title: "DNS Leak Prevention Update",
    severity: "High",
    status: "Patched",
    description: "DNS requests could leak outside the VPN tunnel under specific network conditions."
  },
  {
    id: "VPN-2023-004",
    date: "November 5, 2023",
    title: "Authentication Token Handling",
    severity: "Medium",
    status: "In Progress",
    description: "Improper handling of authentication tokens could lead to session hijacking."
  }
]

const severityColors: Record<Severity, string> = {
  Critical: "bg-red-900/50 text-red-300",
  High: "bg-orange-900/50 text-orange-300",
  Medium: "bg-yellow-900/50 text-yellow-300",
  Low: "bg-blue-900/50 text-blue-300"
}

const statusColors: Record<Status, string> = {
  Patched: "bg-green-900/50 text-green-300",
  "In Progress": "bg-yellow-900/50 text-yellow-300",
  Investigating: "bg-blue-900/50 text-blue-300"
}

export default function SecurityAdvisories() {
  return (
    <div>
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Security Advisories</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Stay informed about security updates, patches, and vulnerabilities affecting our services.
        </p>
      </div>

      {/* Quick Actions */}
      <Card className="p-6 bg-gray-800/50 border-gray-700 mb-8">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex-1">
              <Input
                type="search"
                placeholder="Search advisories..."
                className="bg-gray-700/50 border-gray-600"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Link href="/security/advisories/search">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Advanced Search
                </Button>
              </Link>
              <Link href="/security/report">
                <Button variant="outline">
                  Report Issue
                </Button>
              </Link>
              <Link href="/security/advisories/rss">
                <Button variant="outline">
                  RSS Feed
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>

      {/* Advisory Categories */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
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

      {/* Advisories List */}
      <Card className="bg-gray-800/50 border-gray-700 mb-8">
        <div className="p-6 border-b border-gray-700">
          <Tabs defaultValue="current" className="w-full">
            <div className="flex items-center justify-between">
              <h2 className="text-2xl font-semibold">Security Advisories</h2>
              <TabsList className="bg-gray-700/50">
                <TabsTrigger value="current">Current</TabsTrigger>
                <TabsTrigger value="recent">Recent</TabsTrigger>
                <TabsTrigger value="all">All</TabsTrigger>
              </TabsList>
            </div>
          </Tabs>
        </div>

        <div className="p-6 space-y-4">
          {advisories.map((advisory) => (
            <Link 
              key={advisory.id}
              href={`/security/advisories/${advisory.id}`}
            >
              <Card className="p-4 bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-sm font-mono text-gray-400">
                        {advisory.id}
                      </span>
                      <Badge className={severityColors[advisory.severity]}>
                        {advisory.severity}
                      </Badge>
                      <Badge className={statusColors[advisory.status]}>
                        {advisory.status}
                      </Badge>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{advisory.title}</h3>
                    <p className="text-sm text-gray-400">{advisory.description}</p>
                  </div>
                  <div className="text-sm text-gray-400 whitespace-nowrap">
                    {advisory.date}
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Card>

      {/* Statistics */}
      <Card className="p-6 bg-gray-800/50 border-gray-700 mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-400 mb-2">156</div>
            <div className="text-sm text-gray-400">Total Advisories</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-400 mb-2">92%</div>
            <div className="text-sm text-gray-400">Resolution Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-yellow-400 mb-2">24h</div>
            <div className="text-sm text-gray-400">Avg. Response Time</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-red-400 mb-2">3</div>
            <div className="text-sm text-gray-400">Critical Active</div>
          </div>
        </div>
      </Card>

      {/* Resources */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        <Card className="p-6 bg-gray-800/50 border-gray-700">
          <h3 className="font-semibold mb-4">Security Resources</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link 
                href="/security/whitepaper"
                className="text-gray-400 hover:text-gray-300"
              >
                Security Whitepaper
              </Link>
            </li>
            <li>
              <Link 
                href="/security/audit"
                className="text-gray-400 hover:text-gray-300"
              >
                Security Audits
              </Link>
            </li>
            <li>
              <Link 
                href="/security/bug-bounty"
                className="text-gray-400 hover:text-gray-300"
              >
                Bug Bounty Program
              </Link>
            </li>
          </ul>
        </Card>

        <Card className="p-6 bg-gray-800/50 border-gray-700">
          <h3 className="font-semibold mb-4">Developer Tools</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link 
                href="/security/advisories/api"
                className="text-gray-400 hover:text-gray-300"
              >
                Security API
              </Link>
            </li>
            <li>
              <Link 
                href="/security/pgp-key"
                className="text-gray-400 hover:text-gray-300"
              >
                PGP Key
              </Link>
            </li>
            <li>
              <Link 
                href="/security/pgp-guide"
                className="text-gray-400 hover:text-gray-300"
              >
                PGP Guide
              </Link>
            </li>
          </ul>
        </Card>

        <Card className="p-6 bg-gray-800/50 border-gray-700">
          <h3 className="font-semibold mb-4">Stay Updated</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link 
                href="/security/advisories/rss"
                className="text-gray-400 hover:text-gray-300"
              >
                RSS Feed
              </Link>
            </li>
            <li>
              <Link 
                href="/security/transparency"
                className="text-gray-400 hover:text-gray-300"
              >
                Transparency Report
              </Link>
            </li>
            <li>
              <Link 
                href="/status"
                className="text-gray-400 hover:text-gray-300"
              >
                System Status
              </Link>
            </li>
          </ul>
        </Card>
      </div>

      {/* Help Section */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>
          Need help with security issues?{" "}
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
