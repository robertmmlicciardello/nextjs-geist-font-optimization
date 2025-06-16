import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"

type Severity = 'Critical' | 'High' | 'Medium' | 'Low'
type Status = 'Patched' | 'In Progress' | 'Investigating'

interface Advisory {
  id: string
  date: string
  title: string
  severity: Severity
  status: Status
  affected: string
  description: string
}

// Mock data - in production this would come from an API
const searchResults: Advisory[] = [
  {
    id: "VPN-2024-001",
    date: "January 15, 2024",
    title: "Critical Update: OpenVPN Configuration Vulnerability",
    severity: "Critical",
    status: "Patched",
    affected: "VPN Client v2.0.0-2.1.5",
    description: "A vulnerability in the OpenVPN configuration parser could allow remote code execution."
  },
  {
    id: "VPN-2023-005",
    date: "December 10, 2023",
    title: "DNS Leak Prevention Update",
    severity: "High",
    status: "Patched",
    affected: "VPN Client v2.0.0-2.1.4",
    description: "DNS requests could leak outside the VPN tunnel under specific network conditions."
  },
  {
    id: "VPN-2023-004",
    date: "November 5, 2023",
    title: "Authentication Token Handling",
    severity: "Medium",
    status: "In Progress",
    affected: "VPN Client v2.0.0-2.1.3",
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

export default function AdvisoriesSearch() {
  return (
    <div>
      {/* Search Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Search Security Advisories</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Search through our comprehensive database of security advisories, patches, and updates.
        </p>
      </div>

      {/* Search Form */}
      <Card className="p-6 bg-gray-800/50 border-gray-700 mb-8">
        <Tabs defaultValue="basic" className="w-full">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-semibold">Search Options</h2>
            <TabsList className="bg-gray-700/50">
              <TabsTrigger value="basic">Basic</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="basic">
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Input
                    type="search"
                    placeholder="Search by advisory ID, keyword, or description..."
                    className="bg-gray-700/50 border-gray-600"
                  />
                </div>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Search
                </Button>
              </div>
            </div>
          </TabsContent>

          <TabsContent value="advanced">
            <div className="space-y-6">
              {/* Search Terms */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label className="mb-2 block">Advisory ID</Label>
                  <Input
                    placeholder="e.g., VPN-2024-001"
                    className="bg-gray-700/50 border-gray-600"
                  />
                </div>
                <div>
                  <Label className="mb-2 block">Keywords</Label>
                  <Input
                    placeholder="Enter keywords..."
                    className="bg-gray-700/50 border-gray-600"
                  />
                </div>
              </div>

              {/* Filters */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label className="mb-2 block">Severity</Label>
                  <Select>
                    <SelectTrigger className="w-full bg-gray-700/50 border-gray-600">
                      <SelectValue placeholder="Select severity" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Severities</SelectItem>
                      <SelectItem value="critical">Critical</SelectItem>
                      <SelectItem value="high">High</SelectItem>
                      <SelectItem value="medium">Medium</SelectItem>
                      <SelectItem value="low">Low</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="mb-2 block">Status</Label>
                  <Select>
                    <SelectTrigger className="w-full bg-gray-700/50 border-gray-600">
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="patched">Patched</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="investigating">Investigating</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label className="mb-2 block">Date Range</Label>
                  <Select>
                    <SelectTrigger className="w-full bg-gray-700/50 border-gray-600">
                      <SelectValue placeholder="Select range" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Time</SelectItem>
                      <SelectItem value="1m">Last Month</SelectItem>
                      <SelectItem value="3m">Last 3 Months</SelectItem>
                      <SelectItem value="6m">Last 6 Months</SelectItem>
                      <SelectItem value="1y">Last Year</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              {/* Additional Options */}
              <div className="space-y-4">
                <Label className="block">Include in Search:</Label>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="current" />
                    <label
                      htmlFor="current"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Current Advisories
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="archive" />
                    <label
                      htmlFor="archive"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Archived Advisories
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="description" />
                    <label
                      htmlFor="description"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Full Descriptions
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="patches" />
                    <label
                      htmlFor="patches"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Related Patches
                    </label>
                  </div>
                </div>
              </div>

              <div className="flex justify-end gap-4">
                <Button variant="outline">
                  Reset
                </Button>
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Search
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </Card>

      {/* Search Results */}
      <Card className="bg-gray-800/50 border-gray-700 mb-8">
        <div className="p-6 border-b border-gray-700">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Search Results</h2>
            <span className="text-sm text-gray-400">
              Showing {searchResults.length} results
            </span>
          </div>
        </div>

        <div className="p-6 space-y-4">
          {searchResults.map((advisory) => (
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
                <div className="mt-4 text-sm text-gray-400">
                  Affected versions: {advisory.affected}
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </Card>

      {/* Search Tips */}
      <Card className="p-6 bg-gray-800/50 border-gray-700">
        <h2 className="text-xl font-semibold mb-6 text-center">Search Tips</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
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
