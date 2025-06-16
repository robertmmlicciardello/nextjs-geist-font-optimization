import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

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
  year: string
}

// Mock data - in production this would come from an API
const archiveAdvisories: Advisory[] = [
  {
    id: "VPN-2023-003",
    date: "October 1, 2023",
    title: "Session Management Update",
    severity: "Medium",
    status: "Patched",
    affected: "VPN Client v2.0.0-2.1.2",
    description: "Session tokens could potentially be reused under specific conditions.",
    year: "2023"
  },
  {
    id: "VPN-2023-002",
    date: "July 15, 2023",
    title: "Connection Handling Improvement",
    severity: "Low",
    status: "Patched",
    affected: "VPN Client v2.0.0-2.1.1",
    description: "Connection stability issues under high network load.",
    year: "2023"
  },
  {
    id: "VPN-2023-001",
    date: "March 20, 2023",
    title: "Protocol Security Enhancement",
    severity: "High",
    status: "Patched",
    affected: "VPN Client v2.0.0-2.1.0",
    description: "Protocol version negotiation could be downgraded by an attacker.",
    year: "2023"
  },
  {
    id: "VPN-2022-004",
    date: "December 5, 2022",
    title: "Configuration Validation Update",
    severity: "Medium",
    status: "Patched",
    affected: "VPN Client v2.0.0",
    description: "Improper validation of configuration files could cause instability.",
    year: "2022"
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

const years = ["2024", "2023", "2022", "2021", "2020"]

export default function AdvisoriesArchive() {
  return (
    <div>
      {/* Hero Section */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-6">Security Advisories Archive</h1>
        <p className="text-xl text-gray-400 max-w-3xl mx-auto">
          Historical record of security advisories, updates, and patches.
        </p>
      </div>

      {/* Search and Filters */}
      <Card className="p-6 bg-gray-800/50 border-gray-700 mb-8">
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <div className="flex-1">
              <Input
                type="search"
                placeholder="Search archive..."
                className="bg-gray-700/50 border-gray-600"
              />
            </div>
            <div className="flex flex-wrap gap-2">
              <Select defaultValue="all">
                <SelectTrigger className="w-[140px] bg-gray-700/50 border-gray-600">
                  <SelectValue placeholder="Year" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Years</SelectItem>
                  {years.map((year) => (
                    <SelectItem key={year} value={year}>{year}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select defaultValue="all">
                <SelectTrigger className="w-[140px] bg-gray-700/50 border-gray-600">
                  <SelectValue placeholder="Severity" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Severities</SelectItem>
                  <SelectItem value="critical">Critical</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>

              <Link href="/security/advisories/search">
                <Button variant="outline">
                  Advanced Search
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </Card>

      {/* Archive Content */}
      <Card className="bg-gray-800/50 border-gray-700 mb-8">
        <Tabs defaultValue="list" className="w-full">
          <div className="p-6 border-b border-gray-700 flex items-center justify-between">
            <h2 className="text-2xl font-semibold">Archived Advisories</h2>
            <TabsList className="bg-gray-700/50">
              <TabsTrigger value="list">List View</TabsTrigger>
              <TabsTrigger value="grid">Grid View</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="list">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Date</TableHead>
                  <TableHead>ID</TableHead>
                  <TableHead>Title</TableHead>
                  <TableHead>Severity</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Action</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {archiveAdvisories.map((advisory) => (
                  <TableRow key={advisory.id}>
                    <TableCell>{advisory.date}</TableCell>
                    <TableCell className="font-mono">{advisory.id}</TableCell>
                    <TableCell>{advisory.title}</TableCell>
                    <TableCell>
                      <Badge className={severityColors[advisory.severity]}>
                        {advisory.severity}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Badge className={statusColors[advisory.status]}>
                        {advisory.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <Link href={`/security/advisories/${advisory.id}`}>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TabsContent>

          <TabsContent value="grid">
            <div className="p-6 grid gap-4">
              {archiveAdvisories.map((advisory) => (
                <Link 
                  key={advisory.id}
                  href={`/security/advisories/${advisory.id}`}
                >
                  <Card className="p-4 bg-gray-800/50 border-gray-700 hover:bg-gray-800/70 transition-colors">
                    <div className="flex flex-col sm:flex-row justify-between gap-4">
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <Badge className={severityColors[advisory.severity]}>
                            {advisory.severity}
                          </Badge>
                          <Badge className={statusColors[advisory.status]}>
                            {advisory.status}
                          </Badge>
                          <span className="text-sm text-gray-400">{advisory.date}</span>
                        </div>
                        <h3 className="text-lg font-semibold mb-1">{advisory.title}</h3>
                        <p className="text-sm text-gray-400">Advisory ID: {advisory.id}</p>
                      </div>
                      <div className="flex items-start">
                        <Button variant="outline" size="sm">View Details</Button>
                      </div>
                    </div>
                    <p className="mt-4 text-gray-300">{advisory.description}</p>
                    <p className="mt-2 text-sm text-gray-400">
                      Affected versions: {advisory.affected}
                    </p>
                  </Card>
                </Link>
              ))}
            </div>
          </TabsContent>
        </Tabs>
      </Card>

      {/* Archive Stats */}
      <Card className="p-6 bg-gray-800/50 border-gray-700 mb-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-2xl font-bold text-blue-400">120+</div>
            <div className="text-sm text-gray-400">Historical Advisories</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400">4 Years</div>
            <div className="text-sm text-gray-400">Of Records</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400">100%</div>
            <div className="text-sm text-gray-400">Resolution Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-blue-400">48h</div>
            <div className="text-sm text-gray-400">Avg. Fix Time</div>
          </div>
        </div>
      </Card>

      {/* Download Options */}
      <Card className="p-6 bg-gray-800/50 border-gray-700">
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
          Need help finding historical advisories?{" "}
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
